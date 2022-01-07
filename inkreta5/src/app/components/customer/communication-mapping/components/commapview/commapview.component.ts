import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecService } from '../../communication.service';
import { getcommunication, getcommunicationid } from '../../Selector/Communication.selector';
import { outboundSerice } from '../outbond.service';
export interface reciObj {
  address1: string,
  address2: string,
  deliveryMechanism: string,
  deliveryMode: string,
  description: string,
  isActive: string,
  recipientEmailMappings: [],
  recipientGstinMappings: [],
  recipientFtpMappings: [],
  recipientId: string,
  recipientTag: string,
  recipientWebserviceMappings: [],
  pincode: string,
  state: string
}
@Component({
  selector: 'app-commapview',
  templateUrl: './commapview.component.html',
  styleUrls: ['./commapview.component.css']
})
export class CommapviewComponent implements OnInit {


  @Input() dumy1:any;
  @Input() viewdetails:any;
  @Input() rowindex : any;
  @Input() dumyresp :any;

  // getemail= true;
  getemail:boolean = true;
  urls: any;
  constructor(private _formbuilder: FormBuilder, private _http: HttpClient,public out:outboundSerice,
    private rec: RecService, private _activateroute: ActivatedRoute, private _router: Router,public store:Store) { }
 
  updatereceipentForm !: FormGroup
  email!: FormGroup
  ftp!: FormGroup
  webservice!: FormGroup
  password: any;
  ftpLocation: any;
  ftpServer: any;
  emailAddress: any;
  selectedValue: string = '';
  selectValuess: string = '';
  fb = new FormBuilder;
  data: any
  invoiceuploadDeliverymode: string = ''
  invoicestatusupdateDeliverymode !:string;
  invoicequeryDeliverymode! :string;
  operationAction !:string;
  respMessage !:string;
  respDocNumberOnsuccessful ! :string;
  inputRequest! :string;
  url! :string
  userPassword !:string;
  userName !:string
  description: string = ''
  active: any=""
  outboundConnectorsGSTIN: any;
  connectorTag:any = ''
  autopostOnVerification :any ;
  connectorType :any;
  data1:any=null;
  test:any;
  id:any
  // recipientFtpMappings: RecipientFtpMapping[];
  // recipientGstinMappings: RecipientGstinMapping[];
  
  myArr = {
    address1: null,
    address2: null,
    deliveryMechanism: null,
    deliveryMode: null,
    description: null,
    isActive: null,
    recipientEmailMappings: [
      {
        emailAddress: null
      }
    ],
    recipientGstinMappings: '',
    recipientFtpMappings: [{
      ftpServer: null,
      ftpLocation: null,
      userName: null,
      password: null
    }],
    recipientId: null,
    recipientTag: null,
    recipientWebserviceMappings: [
      {
        url: null,
        userName: null,
        password: null
      }
    ],
    pincode: null,
    state: null
  }

  // ngDoCheck()
  // {
  //   //console.log(this.out.index)
  //   //console.log(this.data1)
  //   // this.data1 = this.dumy1
  //   this.data1=this.dumyresp
  //   //console.log(this.data1)
  //   // //console.log(this.data1.results)
  //   // //console.log(this.data1.connectorId)
  //     if(this.data1 ){
  //       this.connectorTag =this.data1.results.connectorTag
  //     this.active = this.data1.results.active
  //     this.invoiceuploadDeliverymode = this.data1.results.invoiceuploadDeliverymode
  //     this.invoicequeryDeliverymode = this.data1.results.invoicequeryDeliverymode
  //     this.invoicestatusupdateDeliverymode = this.data1.results.invoicestatusupdateDeliverymode
  //     this.description=this.data1.results.description
  //     this.autopostOnVerification = this.data1.results.autopostOnVerification
  //     this.outboundConnectorsGSTIN = this.data1.results.outboundConnectorsGSTIN
  //     this.connectorType = this.data1.results.outboundConnectorsAutopost.connectorType
  //     this.userName = this.data1.results.outboundConnectorsAutopost.userName
  //     this.userPassword = this.data1.results.outboundConnectorsAutopost.userPassword
  //     this.url = this.data1.results.outboundConnectorsAutopost.url
  //     this.inputRequest = this.data1.results.outboundConnectorsAutopost.inputRequest
  //     this.respDocNumberOnsuccessful = this.data1.results.outboundConnectorsAutopost.respDocNumberOnsuccessful
  //     this.respMessage = this.data1.results.outboundConnectorsAutopost.respMessage
  //     this.operationAction = this.data1.results.outboundConnectorsAutopost.operationAction
  //     // this. = this.data1.results.outboundConnectorsAutopost.userName
  //    }
  // }
  ngOnInit(): void {
    this.store.select(getcommunicationid).subscribe((data1:any)=>{
      // //console.log(data1)
      if(data1.results){
        this.connectorTag =data1.results.connectorTag
        this.active = data1.results.active
        // this.invoiceuploadDeliverymode = data1.results.invoiceuploadDeliverymode
        // this.invoicequeryDeliverymode = data1.results.invoicequeryDeliverymode
        // this.invoicestatusupdateDeliverymode = data1.results.invoicestatusupdateDeliverymode
        this.description=data1.results.description
        this.autopostOnVerification =data1.results.autopostOnVerification
        this.outboundConnectorsGSTIN = data1.results.outboundConnectorsGSTIN
        // this.connectorType = data1.results.outboundConnectorsAutopost.connectorType
        // this.userName = data1.results.outboundConnectorsAutopost.userName
        // this.userPassword = data1.results.outboundConnectorsAutopost.userPassword
        // this.url = data1.results.outboundConnectorsAutopost.url
        // this.inputRequest = data1.results.outboundConnectorsAutopost.inputRequest
        // this.respDocNumberOnsuccessful = data1.results.outboundConnectorsAutopost.respDocNumberOnsuccessful
        // this.respMessage =data1.results.outboundConnectorsAutopost.respMessage
        // this.operationAction = data1.results.outboundConnectorsAutopost.operationAction
        // this.url= this.data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
      }
    })
    // //console.log(this.rowindex)
    // this.data = this.rowindex
    // //console.log(this.data)
    // this.rec.getdatabyid(this.data).subscribe(res => {
    //     //console.log(res)
    // })
    // this.store.subscribe((re)=>{
    //     //console.log(re)
    //   // })

    // this.data1 = this.viewdetails 
    // this.store.select(getcommunication).subscribe((data)=>{
    //   // //console.log(data)
    //   if(data){
    //     this.connectorTag =data[0].connectorTag
    //   this.active = data[0].active
    //   this.invoiceuploadDeliverymode = data[0].invoiceuploadDeliverymode
    //   this.description=data[0].description
    //   this.outboundConnectorsGSTIN = data[0].outboundConnectorsGSTIN
    //   this.autopostOnVerification = data[0].autopostOnVerification
    //   this.connectorType = data[0].connectorType
    //   }
    // })
  }
    
    // })
    // this.data1 = this.dumy1
    // //console.log(this.data1)
    // //   if(this.data1 ){
    // //console.log(this.out.index)
    // this.rec.getdatabyid(this.out.index).subscribe(res => {
    //   //console.log(res)
    // this.store.subscribe((re)=>{
    //   //console.log(re)
    // })

  // })
}
