import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecService } from '../../communication.service';
import { getcommunicationid } from '../../Selector/Communication.selector';
import { outboundSerice } from '../outbond.service';

@Component({
  selector: 'app-commapeditauto',
  templateUrl: './commapeditauto.component.html',
  styleUrls: ['./commapeditauto.component.css']
})
export class CommapeditautoComponent implements OnInit {
  @Input() public connectorTag!:FormGroup;
  @Input() public description !: FormGroup;
  @Input() public outboundConnectorsItemDeliveryWebserviceMapping !:FormGroup;
  @Input() public outboundConnectorsGSTIN! : FormGroup;
  @Input() public outboundConnectorsItemDeliveryEmailMapping! :FormGroup;
  @Input() public invoicestatusupdateDeliverymode !: FormGroup;
  @Input() public invoicequeryDeliverymode !:FormGroup;
 @Input() public invoiceuploadDeliverymode! : FormGroup;
@Input() public toppings: any;
  selectedValueweb: string = '';
  receipentupdateForm!: FormGroup
  email !: FormGroup
  ftp!: FormGroup
  webservice!: FormGroup
  activity !: FormGroup
  gstins!: FormGroup
  gstinss !: FormGroup
  outbounds !: FormGroup
  submitted = false;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  selectedValue: string = '';
  selectValuess: string = '';
  dropdownSettings: any = {};
  disabled = false;
  showFilter = false
  limitSelection = false;
  selectedItems: any = [];
  recipientGstinMappings: any = []
  // gstins = new FormControl();
  // gstinList: any = [];
  // gstinListss=['07AAEFE1763C1ZU','06AAVCS4878E1ZP','36AAACD7999Q1ZL','07AAACP3682N2ZZ','19AAACW2286K1ZW',
  // '27AAACL6442L1ZA','29AAACR4849R2ZG']
  // gstinList=['07AAEFE1763C1ZU']
  selectedGstins: any;
  data: any;
  recipientId: string = ''
  recipientss = new FormControl();
  getdiv: boolean = false;
  GstinDetailsFromGetService = [];
  GstinDetails: any = [];
  // GSTIN : any=[]
  // toppings = new FormControl();
  // gstinList={["07AAEFE1763C1ZU"]};
  gstinList : any =[]
  public fruit: any = { description: '' };
  maxChars = 100;
  userName: any;
  index: any;
  sidenav: boolean = true;
  details: any = [];
  search: any;
  statusopen1: any = false
  statusopen: boolean = true
  dumy1: any
  // connectorTag: any;
  // toppings: any;
  constructor(private _formbuilder: FormBuilder, private _service: RecService, private _router: Router
    , public dialog: MatDialog, private store: Store,public out:outboundSerice) { }
    test(value:any){
      // //console.log(value)
    }
  ngOnInit(): void {
  
    this.getGstins();
    this.getrecId();
    this.receipentupdateForm = this._formbuilder.group({
      connectorTag: [' '],
      isActive: ['true '],
      invoiceuploadDeliverymode: [' '],
      invoicequeryDeliverymode: [''],
      invoicestatusupdateDeliverymode: [' '],
      autopostOnVerification: ['true'],
      description: [' '],
      outboundConnectorsItemDeliveryEmailMapping: this._formbuilder.array([
        this.email = this._formbuilder.group({
          itemType: ['InvoiceQuery'],
          emailAddress: [''],
        })
      ]),
      outboundConnectorsGSTIN: this._formbuilder.array([
        this.gstinss = this._formbuilder.group({
          gstin: [ ],
        })
      ]),
      
        connectorType: [''],
        userName: [''],
        userPassword: [''],
        url: [''],
        inputRequest: [''],
        respDocNumberOnsuccessful: [''],
        respMessage: [''],
        operationAction: [''],

      outboundConnectorsItemDeliveryWebserviceMapping:this._formbuilder.array([
        this.webservice = this._formbuilder.group({
          itemType: ['Invoiceupload'],
          userName: [''],
          userPassword: [''],
          url: ['']
        })
      ]),
    })

    this.store.select(getcommunicationid).subscribe((data1:any)=>{
      // //console.log(data1)
      if(data1.results)  {
       this.receipentupdateForm.patchValue({
         connectorType :data1.results.outboundConnectorsAutopost.connectorType,
         userName:data1.results.outboundConnectorsAutopost.userName,
         userPassword:data1.results.outboundConnectorsAutopost.userPassword,
         url:data1.results.outboundConnectorsAutopost.url,
         inputRequest:data1.results.outboundConnectorsAutopost.inputRequest,
         respDocNumberOnsuccessful:data1.results.outboundConnectorsAutopost.respDocNumberOnsuccessful,
         respMessage:data1.results.outboundConnectorsAutopost.respMessage,
         operationAction:data1.results.outboundConnectorsAutopost.operationAction
        })
      }})
  }


  getrecId() {
    this._service.getid().
      subscribe(response => {
        this.data = response
        this.data = this.data.results
        this.recipientId = this.data;
        // //console.log(this.recipientId)
      })
  }
  getGstins() {

    this._service.getGstin().subscribe(res => {
      // //console.log(res);
      let myArr: any;
      myArr = res;
      myArr = myArr.results
      this.GstinDetailsFromGetService = myArr;
      this.gstinList = Object.keys(myArr);
      let values = Object.values(this.gstinList);
      // //console.log(this.gstinList);
      // this.toppings = this.gstinList
    }
    )
  }
  goback() {
    // //console.log("clicked on cancel")
    // this._router.navigate(['/app/customer_manager/mappings/recipient_mapping']);
  }
  
  onSubmit1() {
    // //console.log("testing---->",this.out.Title)
    // //console.log(this.receipentupdateForm.value.connectorTag)
    // //console.log(this.connectorTag.value.connectorTag)
    // //console.log(this.invoiceuploadDeliverymode)
    this.submitted = true;
    // //console.log("fndeb")
  
    //  //console.log(this.gstinList);
    
    this.receipentupdateForm.value.connectorTag = this.connectorTag.value.connectorTag
    this.receipentupdateForm.value.description = this.description.value.description
    this.receipentupdateForm.value.outboundConnectorsGSTIN = this.GstinDetails;
    this.receipentupdateForm.value.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress = this.out.emailAddress
    // this.receipentForm.value.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress = this.out.emailAddressquery
    this.receipentupdateForm.value.invoiceuploadDeliverymode = this.out.deliver
    this.receipentupdateForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].url = this.out.url
    this.receipentupdateForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].userName = this.out.userName
    this.receipentupdateForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword = this.out.userPassword
    this.receipentupdateForm.value.invoicequeryDeliverymode = this.out.deliverquery
    this.receipentupdateForm.value.invoicestatusupdateDeliverymode= this.out.deliveryst
    // //console.log(this.receipentupdateForm.value)
    var submitdata:any = {
      "connectorTag":this.receipentupdateForm.value.connectorTag ,
      "isActive": "true",
      "autopostOnVerification": "true",
      "description": this.receipentupdateForm.value.description,
      "invoiceuploadDeliverymode":this.receipentupdateForm.value.invoiceuploadDeliverymode,
      "invoicequeryDeliverymode":this.receipentupdateForm.value.invoicequeryDeliverymode,
      "invoicestatusupdateDeliverymode":this.receipentupdateForm.value.invoicestatusupdateDeliverymode,
      "outboundConnectorsItemDeliveryEmailMapping": [
          {
              "itemType": this.receipentupdateForm.value.outboundConnectorsItemDeliveryEmailMapping[0].itemType,
              "emailAddress":this.receipentupdateForm.value.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
          }
      ],
      "outboundConnectorsGSTIN":[],
       
      //     {
      //         "gstin": this.gstinList[0]
      //     },
      //     {
      //         "gstin": this.gstinList[1]
      //     },
      //     {
      //         "gstin": this.gstinList[2]
      //     }
      // ],
      "outboundConnectorsAutopost": 
          {
              "connectorType": this.receipentupdateForm.value.connectorType,
              "userName": this.receipentupdateForm.value.userName,
              "userPassword": this.receipentupdateForm.value.userPassword,
              "url": this.receipentupdateForm.value.url,
              "inputRequest": this.receipentupdateForm.value.inputRequest,
              "respDocNumberOnsuccessful": this.receipentupdateForm.value.respDocNumberOnsuccessful,
              "respMessage": this.receipentupdateForm.value.respMessage,
              "operationAction": this.receipentupdateForm.value.operationAction
          }
      ,
      "outboundConnectorsItemDeliveryWebserviceMapping": [
          {
              "itemType": this.receipentupdateForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].itemType,
              "url":this.receipentupdateForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].url,
              "userName":this.receipentupdateForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].userName,
              "userPassword":this.receipentupdateForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword,
            }
      ]
  }
  // //console.log(this.toppings)
  for (let i = 0; i < this.toppings.value.length; i++) {
    let gstin = this.toppings.value[i];
    let obj = {gstin}
    // this.GstinDetails.push(obj);
    submitdata.outboundConnectorsGSTIN.push({gstin:this.toppings.value[i]})
    // this.GstinDetails= obj
    // //console.log(this.toppings.value)
  }
  // //console.log("submit---->",submitdata)
    var communication = this.receipentupdateForm.value
    // this.store.dispatch(addCommList(submitdata))
  }
}

