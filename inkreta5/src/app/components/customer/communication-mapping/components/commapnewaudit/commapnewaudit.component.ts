import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { addCommList } from '../../Action/Communication.action';
import { RecService } from '../../communication.service';
import { Store } from '@ngrx/store';
import { outboundSerice } from '../outbond.service';
// import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-commapnewaudit',
  templateUrl: './commapnewaudit.component.html',
  styleUrls: ['./commapnewaudit.component.css']
})
export class CommapnewauditComponent implements OnInit {
 
  // @Input() public receipentForm:FormGroup;
  @Input() public connectorTag !:FormGroup;
  @Input() public description !: FormGroup;
  @Input() public outboundConnectorsItemDeliveryWebserviceMapping!:FormGroup;
  @Input() public outboundConnectorsGSTIN! : FormGroup;
  @Input() public outboundConnectorsItemDeliveryEmailMapping !:FormGroup;
  @Input() public invoicestatusupdateDeliverymode! : FormGroup;
  @Input() public invoicequeryDeliverymode!:FormGroup;
 @Input() public invoiceuploadDeliverymode !: FormGroup;

 @Input() public toppings:any;
 
//  @Input() public  :FormGroup;
 
   selectedValueweb: string = '';
  receipentForm!: FormGroup
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
  constructor(private _formbuilder: FormBuilder, private _service: RecService, private _router: Router
    , public dialog: MatDialog, private store: Store,public out:outboundSerice) { }
    test(value:any){
      //console.log(value)
    }
  ngOnInit(): void {
  
    this.getGstins();
    this.getrecId();
    this.receipentForm = this._formbuilder.group({
      connectorTag: ['test '],
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
    }
    )
  }
  goback() {
    // //console.log("clicked on cancel")
    // this._router.navigate(['/app/customer_manager/mappings/recipient_mapping']);
  }
  
  onSubmit1() {
    // //console.log("testing---->",this.out.Title)
    // //console.log(this.receipentForm)
    this.submitted = true;
    // //console.log("fndeb")
    // //console.log(this.toppings.value.length);
    // for (let i = 0; i < this.toppings.value.length; i++) {
    //   let val = this.toppings.value[i];
    //   let obj = { gstin: val }
    //   this.GstinDetails.push(obj);
    // }
    // this.receipentForm.value.outboundConnectorsGSTIN = this.GstinDetails;
  
    //  //console.log(this.gstinList);
    
    // this.receipentForm.value.outboundConnectorsGSTIN = this.gstinList;
    // this.receipentForm.value.outboundConnectorsGSTIN.gstin = this.GstinDetails;
    // this.receipentForm.value.outboundConnectorsGSTIN.gstin = this.gstinList;
    // //console.log(this.gstinList)
    // //console.log(this.receipentForm.value.outboundConnectorsGSTIN[0])
    // //console.log(this.receipentForm.value.outboundConnectorsGSTIN.gstin)
    // //console.log(this.receipentForm.value)
    // //console.log(this.connectorTag)
    // //console.log(this.connectorTag.value)
    // //console.log(this.connectorTag.value.connectorTag)
    // //console.log(this.invoiceuploadDeliverymode)
    // //console.log(this.outboundConnectorsItemDeliveryEmailMapping.value.outboundConnectorsItemDeliveryEmailMapping.emailAddress)
    this.receipentForm.value.connectorTag = this.connectorTag.value.connectorTag
    this.receipentForm.value.description = this.description.value.description
    this.receipentForm.value.outboundConnectorsGSTIN = this.GstinDetails;
    this.receipentForm.value.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress = this.out.emailAddress
    // this.receipentForm.value.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress = this.out.emailAddressquery
    this.receipentForm.value.invoiceuploadDeliverymode = this.out.deliver
    
    this.receipentForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].url = this.out.url
    this.receipentForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].userName = this.out.userName
    this.receipentForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword = this.out.userPassword
    this.receipentForm.value.invoicequeryDeliverymode = this.out.deliverquery
    this.receipentForm.value.invoicestatusupdateDeliverymode= this.out.deliveryst
    // //console.log(this.receipentForm.value)
    var submitdata:any = {
      "connectorTag":this.receipentForm.value.connectorTag ,
      "isActive": "true ",
      "autopostOnVerification": "true",
      "description": this.receipentForm.value.description,
      "invoiceuploadDeliverymode":this.receipentForm.value.invoiceuploadDeliverymode,
      "invoicequeryDeliverymode":this.receipentForm.value.invoicequeryDeliverymode,
      "invoicestatusupdateDeliverymode":this.receipentForm.value.invoicestatusupdateDeliverymode,
      "outboundConnectorsItemDeliveryEmailMapping": [
          {
              "itemType": this.receipentForm.value.outboundConnectorsItemDeliveryEmailMapping[0].itemType,
              "emailAddress":this.receipentForm.value.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
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
              "connectorType": this.receipentForm.value.connectorType,
              "userName": this.receipentForm.value.userName,
              "userPassword": this.receipentForm.value.userPassword,
              "url": this.receipentForm.value.url,
              "inputRequest": this.receipentForm.value.inputRequest,
              "respDocNumberOnsuccessful": this.receipentForm.value.respDocNumberOnsuccessful,
              "respMessage": this.receipentForm.value.respMessage,
              "operationAction": this.receipentForm.value.operationAction
          }
      ,
      "outboundConnectorsItemDeliveryWebserviceMapping": [
          {
              "itemType": this.receipentForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].itemType,
              "url":this.receipentForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].url,
              "userName":this.receipentForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].userName,
              "userPassword":this.receipentForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword,
            }
      ],
      "type": "[CommList] add commlist"
  }

//  if (itemType==="Invoiceupload")
//  {
//      url = this.receipentForm.value.outboundConnectorsItemDeliveryWebserviceMapping[0].urlq
//  }



  // //console.log(this.toppings.value)
  for (let i = 0; i < this.toppings.value.length; i++) {
    let gstin = this.toppings.value[i];
    let obj = {gstin}
    // this.GstinDetails.push(obj);
    submitdata.outboundConnectorsGSTIN.push({gstin:this.toppings.value[i]})
    // this.GstinDetails= obj
    // //console.log(this.toppings)
  }

    // //console.log("submit---->",submitdata)
    var communication = this.receipentForm.value
    this.store.dispatch(addCommList(submitdata))
    alert("Outbound connector Submited Sucessfully");
  }
}
