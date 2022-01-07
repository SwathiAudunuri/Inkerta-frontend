import { Component, forwardRef, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { DialogexampleComponent } from '../recipientmapping/dialogexample/dialogexample.component';
//import { RecService } from '../recipientmapping/rec.service';
import { RecService } from './communication.service';
export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CommunicationMappingComponent),
  multi: true,
};
@Component({
  selector: 'app-communication-mapping',
  templateUrl: './communication-mapping.component.html',
  styleUrls: ['./communication-mapping.component.css'],
  providers: [VALUE_ACCESSOR]
})
export class CommunicationMappingComponent implements OnInit {
  
  receipentForm! : FormGroup
  email !: FormGroup
  ftp!: FormGroup
  webservice!: FormGroup
  activity !:FormGroup
  gstins!: FormGroup
  gstinss !:FormGroup
  submitted = false;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  selectedValue: string = '';
  selectValuess: string = '';
  dropdownSettings: any = {}; 
  disabled = false;
  showFilter = false
  limitSelection = false;
  selectedItems: any = [];
  recipientGstinMappings :any =[]
   // gstins = new FormControl();
  gstinList: any = [];
  // gstinListss=['07AAEFE1763C1ZU','06AAVCS4878E1ZP','36AAACD7999Q1ZL','07AAACP3682N2ZZ','19AAACW2286K1ZW',
  // '27AAACL6442L1ZA','29AAACR4849R2ZG']
  selectedGstins: any;
  data: any;
  recipientId: string = ''
  recipientss = new FormControl();
  getdiv:boolean =false;
  GstinDetailsFromGetService = [];
  GstinDetails: any = [];
  // GSTIN : any=[]
  toppings = new FormControl();
  public fruit: any = { description: ''};
  maxChars =100;
  userName:any;
  index:any;
  sidenav:boolean=true;
  details:any=[];
  search:any;
  // chars = 0;
  constructor(private _formbuilder: FormBuilder, private _service: RecService,private _router:Router
    ,public dialog: MatDialog) { }
  //  openDialog(){
  //    this.dialog.open(DialogexampleComponent)
  //  }
  
   showMe(){
    this.getdiv=!this.getdiv
  }
  ngOnInit(): void {
    this.getGstins();
    this.getrecId();
    this.receipentForm = this._formbuilder.group({
      deliveryMode: [''],
      description: [''],
      isActive: ['true '],
      recipientActivities: this._formbuilder.array([
        // this.activity = this._formbuilder.group({
        // activityType:['post'],
        // actionBy:['000012'],
        // actionComments: ['posting data']
        // })
      ]),
      recipientEmailMappings: this._formbuilder.array([
        this.email=  this._formbuilder.group( {
            //  emailAddress:['',Validators.required],
             emailAddress: [''],
            //  recipientId:[this.recipientId]
           })
          ]),
      recipientFtpMappings: this._formbuilder.array([
        this.ftp = this._formbuilder.group({
          ftpLocation: [''],
          ftpServer: [''],
          password: [''],
          userName: ['']
        })
      ]),
      // recipientGstinMappings: this._formbuilder.array([
      //   this.gstinss = this._formbuilder.group({
      //     gstin: [''],
      //     gstinTag: [''],
      //   })
      // ]),
      recipientGstinMappings: [ ],
     
      // gstvalue:[["ashok"]],
      // recipientGstinMappings: this._formbuilder.array([]),
      // recipientId: [this.recipientId, Validators.required],
      recipientId: [],
      recipientTag: [''],
      recipientWebserviceMappings: this._formbuilder.array([
        this.webservice = this._formbuilder.group({
          url: ['',],
          userName: [''],
          password: ['']
        })
      ]),

      deliveryMechanism: [''],
      address1: [''],
      address2: [''],
      pincode: [''],
      state: ['']
    })
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'gstin',
      textField: 'gstinTag',
      selectAllText: 'select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 5,
      allowSearchFilter: this.showFilter,
      // name:'GSTIN'
    };
  }




  getrecId() {
    this._service.getid().
      subscribe(response => {
        this.data = response
        this.data = this.data.results
        this.recipientId = this.data;
        //console.log(this.recipientId)
      })
  }
  onItemSelect(item: any) {
    //console.log('onItemSelect', item);
  }
  onSelectAll(item: any) {
    //console.log('onSelectAll', item);
  }

  getGstins() {

    this._service.getGstin().subscribe(res => {
      //console.log(res);
      let myArr: any;
      myArr = res;
      myArr = myArr.results
      this.GstinDetailsFromGetService = myArr;
      this.gstinList = Object.keys(myArr);
      let values = Object.values(this.gstinList);
      //console.log(this.gstinList);
    }
    )
  }
  get f(){
    return this.receipentForm.controls
  }

  goback(){
    //console.log("clicked on cancel")
    // this._router.navigate(['/app/customer_manager/mappings/recipient_mapping']);
  }
  onReset() {
    this.submitted = false;
    this.receipentForm.reset();
}

  onSubmit() {
    this.submitted = true;
    //console.log("fndeb")
    //console.log(this.toppings.value.length);
    
    for (let i = 0; i < this.toppings.value.length; i++) {
      let val = this.toppings.value[i];
      let obj = { gstin: val, gstinTag: this.GstinDetailsFromGetService[val] }
      this.GstinDetails.push(obj);
    }
    // //console.log(this.recipientss)
    //console.log(this.recipientId)
    this.receipentForm.value.recipientId=this.recipientId
    this.receipentForm.value.recipientGstinMappings = this.GstinDetails;
    //console.log(this.receipentForm.value)

    this._service.postRec(this.receipentForm.value)
    alert("Recipient Submission success")
        // this._router.navigate(['/app/customer_manager/mappings/recipient_mapping'])
    
  
      // //console.log(this.receipentForm.value);
      // alert("Recipient Submission success")
      //   this._router.navigate(['/app/vendor_manager/mappings/recipient_mapping'])
      // this._service.todo(this.receipentForm.value)
    // }
  }
}





