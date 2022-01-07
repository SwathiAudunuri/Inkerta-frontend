import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter , Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { RecService } from '../../../recipientmapping/rec.service';
import { RecService } from '../../communication.service';
import { RecipientGstinMapping } from '../../../recipientmapping/receipents';

@Component({
  selector: 'app-commapedit',
  templateUrl: './commapedit.component.html',
  styleUrls: ['./commapedit.component.css']
})
export class CommapeditComponent implements OnInit {

  @Output() public childEvent = new EventEmitter()
  @Input() public updaterow:any;
  @Input() public rowindex:any;
  data1:any=null;
  
  constructor(private _formbuilder: FormBuilder, private _http: HttpClient,
    private rec: RecService, private _activateroute: ActivatedRoute,private _router:Router) { }
    receipentupdateForm !: FormGroup
    email!: FormGroup
    ftp!: FormGroup
    webservice!: FormGroup
    userName:any;
    password:any;
    ftpLocation:any;
    ftpServer:any;
    emailAddress:any;
    url:any;
    selectedValue: string = '';
    selectValuess: string = '';
    fb = new FormBuilder;
    data: any
    deliveryMode: string = ''
    description: string = ''
    isActive?: boolean
    recipientActivities: any;
    recipientEmailMappings: any;
    // selectgstin:any= [];
  //   recipientFtpMappings: RecipientFtpMapping[];
  recipientGstinMappings :any =[]
  // recipientGstinMappings: RecipientGstinMapping[];
  recipientId: string = ''
  recipientTag: string = ''
  recipientWebserviceMappings: any;
  deliveryMechanism: string = ''
  address1: string = ''
  address2: string = ''
  pincode?: number
  state: string = ''
  GstinDetailsFromGetService = [];
  GstinDetails: any = [];
  toppings = new FormControl(["27AAACL6442L1ZA","03BZNPM9430M1KL"]);
  dropdownSettings: any = {}; 
  disabled = false;
  showFilter = false
  limitSelection = false;
  selectedItems: any = [];
  public fruit: any = { description: '',address1:'',address2:''};
  maxChars =100;
   // gstins = new FormControl();
  gstinList: any = [];
  // recipientGstinMappings:any =[];

//  gstin=this._formbuilder.group({
    // gstvalue:[["ashok"]]
  // })
  toppingList=[""]

  ngDoCheck()
  {
    this.data1 = this.updaterow
    if(this.data1 ){
      // //console.log(this.data1.value)
      // //console.log(this.data1.value.recipientEmailMappings)
      // //console.log(this.data1.value.recipientEmailMappings[0])
      // //console.log(this.data1.value.recipientWebserviceMappings)
      // //console.log(this.data1.value.recipientWebserviceMappings[0].password)
      // //console.log(this.data1.value.recipientWebserviceMappings[0].url)
      // //console.log(this.data1.value.recipientGstinMappings)
      this.recipientGstinMappings = this.data1.value.recipientGstinMappings
      this.recipientEmailMappings = this.data1.value.recipientEmailMappings[0].emailAddress
      this.recipientWebserviceMappings = this.data1.value.recipientWebserviceMappings[0].password
      this.recipientWebserviceMappings = this.data1.value.recipientWebserviceMappings[0].url
      this.recipientWebserviceMappings = this.data1.value.recipientWebserviceMappings[0].userName
    }
  }


  ngOnInit(): void {
    // this.getcurrentrec();
    this.getGstins();
 
    this.receipentupdateForm = this.fb.group({

      deliveryMode: [''],
      description: [''],
      isActive: [' '],
      recipientActivities: this._formbuilder.array([]),
      recipientEmailMappings: this._formbuilder.array([
        this.email = this._formbuilder.group({
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
      recipientGstinMappings: [ ],
      // recipientGstinMappings: this._formbuilder.array([]),
      recipientId: [],
      recipientTag: [''],
      recipientWebserviceMappings: this._formbuilder.array([
        this.webservice = this._formbuilder.group({
          url: [''],
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
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'gstin',
    //   textField: 'gstinTag',
    //   selectAllText: 'select All',
    //   unSelectAllText: 'Unselect All',
    //   itemsShowLimit: 5,
    //   allowSearchFilter: this.showFilter
    // };
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

  back_icon(){
    // this.childEvent1.emit(null)
    this.childEvent.emit(false)
  }
  get f(){
    return this.updaterow.controls
  }
  // getcurrentrec() {
  //   let uid
  //   this._activateroute.paramMap.subscribe((params: ParamMap) => {
  //     uid = params.get('uid');
  //     //console.log(uid)
  //   }
  //   )
  //   this.rec.getCurrentData(uid).subscribe(res => {
  //     //console.log(res)
  //     this.data = res
  //     this.data = this.data.results
  //     //console.log(this.data);
      // //console.log(this.data.recipientTag)

  //     this.receipentupdateForm = this.fb.group({
  //       recipientId:[this.data.recipientId],
  //       recipientTag: [this.data.recipientTag],
  //       deliveryMode: [this.data.deliveryMode],
  //       description: [this.data.description],
  //       deliveryMechanism: [this.data.deliveryMechanism],
  //       address1: [this.data.address1],
  //       address2: [this.data.address2],
  //       pincode: [this.data.pincode],
  //       state: [this.data.state],
  //       isActive: [this.data.isActive],
  //       recipientGstinMappings: [this.data.RecipientGstinMapping],
  //       recipientFtpMappings: this._formbuilder.array([
  //         this.ftp = this._formbuilder.group({
  //           ftpLocation: [this.data.ftpLocation],
  //           ftpServer: [this.data.ftpServer],
  //           password: [this.data.password],
  //           userName: [this.data.userName]
  //         })
  //       ]),
  //       recipientEmailMappings: this._formbuilder.array([
  //         this.email = this._formbuilder.group({
  //           emailAddress: [this.data.emailAddress],
  //         })
  //       ]),
  //       recipientWebserviceMappings: this._formbuilder.array([
  //         this.webservice = this._formbuilder.group({
  //           url: [this.data.url],
  //           userName: [this.data.userName],
  //           password: [this.data.password]
  //         })
  //       ])
  //     })
  //   })
  // }
  onItemSelect(item: any) {
    //console.log('onItemSelect', item);
  }
  onSelectAll(item: any) {
    //console.log('onSelectAll', item);
  }
  // setValue(){
  //   this.updaterow.get('firstName').setValue(data.name);
  // }
  getGstins() {

    this.rec.getGstin().subscribe(res => {
      //console.log(res);
      let myArr: any;
      myArr = res;
      myArr = myArr.results
      this.GstinDetailsFromGetService = myArr;
      this.gstinList = Object.keys(myArr);
      this.toppingList = Object.keys(myArr);
      let values = Object.values(this.gstinList);

      //console.log(this.gstinList);
    }
    )
  }
  goback(){
    //console.log("clicked on cancel")
    this._router.navigate(['/app/vendor_manager/mappings/recipient_mapping']);
  }
  submit() {
    //console.log(this.toppings.value.length);
    
    for (let i = 0; i < this.toppings.value.length; i++) {
      let val = this.toppings.value[i];
      let obj = { gstin: val, gstinTag: this.GstinDetailsFromGetService[val] }
      this.GstinDetails.push(obj);
    }
    //console.log( this.updaterow.value.recipientId)
    if(this.updaterow.valid){
      //console.log(this.updaterow.value)
      this.recipientId = this.rowindex
      this.updaterow.value.recipientId=this.recipientId
      //console.log( this.updaterow.value.recipientId)
      //console.log(this.recipientId)
      this.updaterow.value.recipientGstinMappings=this.GstinDetails;
      //console.log(this.updaterow.value)
    // this.rec.updateRec(this.updaterow.value.recipientId,this.updaterow.value)
    this.rec.updateRec(this.recipientId,this.updaterow.value)  
  }
  }
}



