import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecService } from '../rec.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogexampleComponent } from '../dialogexample/dialogexample.component';
@Component({
  selector: 'app-recform',
  templateUrl: './recform.component.html',
  styleUrls: ['./recform.component.css']
})
export class RecformComponent implements OnInit {
  receipentForm! : FormGroup
  email !: FormGroup
  ftp!: FormGroup
  webservice!: FormGroup
  gstins!: FormGroup
  submitted = false;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  selectedValue: string = '';
  selectValuess: string = '';
  dropdownSettings: any = {}; 
  disabled = false;
  showFilter = false
  limitSelection = false;
  selectedItems: any = [];
   // gstins = new FormControl();
  gstinList: any = [];
  // gstinList=['07AAEFE1763C1ZU','06AAVCS4878E1ZP','36AAACD7999Q1ZL','07AAACP3682N2ZZ','19AAACW2286K1ZW',
  // '27AAACL6442L1ZA','29AAACR4849R2ZG']
  selectedGstins: any;
  data: any;
  recipientId: string = ''
  recipientss = new FormControl();

  GstinDetailsFromGetService = [];
  GstinDetails: any = [];
  toppings = new FormControl();
  public fruit: any = { description: '',address1:'',address2:''};
  maxChars =100;

  // chars = 0;
  constructor(private _formbuilder: FormBuilder, private _service: RecService,private _router:Router
    ,public dialog: MatDialog) { }
   openDialog(){
     this.dialog.open(DialogexampleComponent)
   }
  
  ngOnInit(): void {
    this.getGstins();
    this.getrecId();
    this.receipentForm = this._formbuilder.group({
      deliveryMode: [''],
      description: ['',Validators.required],
      isActive: [' ',Validators.required],
      recipientActivities: this._formbuilder.array([]),
      recipientEmailMappings: this._formbuilder.array([
        this.email=  this._formbuilder.group( {
            //  emailAddress:['',Validators.required],
             emailAddress: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
            //  recipientId:[this.recipientId]
           })
          ]),
      recipientFtpMappings: this._formbuilder.array([
        this.ftp = this._formbuilder.group({
          ftpLocation: ['',Validators.required],
          ftpServer: ['',Validators.required],
          password: ['',Validators.required],
          userName: ['',Validators.required]
        })
      ]),
      recipientGstinMappings: [],
      // recipientGstinMappings: this._formbuilder.array([]),
      // recipientId: [this.recipientId, Validators.required],
      recipientId: [],
      recipientTag: ['',Validators.required],
      recipientWebserviceMappings: this._formbuilder.array([
        this.webservice = this._formbuilder.group({
          url: ['',Validators.required],
          userName: ['',Validators.required],
          password: ['',Validators.required]
        })
      ]),

      deliveryMechanism: [''],
      address1: ['',Validators.required],
      address2: ['',Validators.required],
      pincode: ['',[Validators.required,Validators.maxLength(6)]],
      state: ['',[Validators.required,Validators.maxLength(2)]]
    })
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'gstin',
      textField: 'gstinTag',
      selectAllText: 'select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 5,
      allowSearchFilter: this.showFilter
    };
  }




  getrecId() {
    this._service.getid().
      subscribe(response => {
        this.data = response
        this.data = this.data.results
        this.recipientId = this.data;
        console.log(this.recipientId)
      })
  }
  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onSelectAll(item: any) {
    console.log('onSelectAll', item);
  }

  getGstins() {

    this._service.getGstin().subscribe(res => {
      console.log(res);
      let myArr: any;
      myArr = res;
      myArr = myArr.results
      this.GstinDetailsFromGetService = myArr;
      this.gstinList = Object.keys(myArr);
      let values = Object.values(this.gstinList);

      console.log(this.gstinList);
    }
    )
  }

  goback(){
    console.log("clicked on cancel")
    this._router.navigate(['/app/vendor_manager/mappings/recipient_mapping']);
  }
  onReset() {
    this.submitted = false;
    this.receipentForm.reset();
}

  onSubmit() {
    this.submitted = true;
    console.log("fndeb")
    console.log(this.toppings.value.length);
    
    for (let i = 0; i < this.toppings.value.length; i++) {
      let val = this.toppings.value[i];
      let obj = { gstin: val, gstinTag: this.GstinDetailsFromGetService[val] }
      this.GstinDetails.push(obj);
    }
    // console.log(this.recipientss)
    console.log(this.recipientId)
    this.receipentForm.value.recipientId=this.recipientId
    this.receipentForm.value.recipientGstinMappings = this.GstinDetails;
    console.log(this.receipentForm.value)

    this._service.todo(this.receipentForm.value)
    alert("Recipient Submission success")
        this._router.navigate(['/app/vendor_manager/mappings/recipient_mapping'])
    
  
      // console.log(this.receipentForm.value);
      // alert("Recipient Submission success")
      //   this._router.navigate(['/app/vendor_manager/mappings/recipient_mapping'])
      // this._service.todo(this.receipentForm.value)
    // }
  }
}


