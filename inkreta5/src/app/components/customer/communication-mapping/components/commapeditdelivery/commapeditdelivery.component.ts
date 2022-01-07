import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecService } from '../../communication.service';
import { getcommunicationid } from '../../Selector/Communication.selector';
import { outboundSerice } from '../outbond.service';

@Component({
  selector: 'app-commapeditdelivery',
  templateUrl: './commapeditdelivery.component.html',
  styleUrls: ['./commapeditdelivery.component.css']
})
export class CommapeditdeliveryComponent implements OnInit {


  receipentupdateForm!: FormGroup
  selectedValue: string = '';
  selectedValuess: string = '';
  selectradio : string ='';
  selectedValuetype : string =''
  selectradioy :string ='false'
  email !: FormGroup
  ftp!: FormGroup
  webservice!: FormGroup
  activity !:FormGroup
  gstins!: FormGroup
  gstinss !:FormGroup
  outbounds! :FormGroup
  userNames:any;
  emaill :any;
  emailAdd : any;
  userPasswords:any;
  urls:any;
  passwordq :any;
  userq : any;
  urlq :any;
  passwordst :any;
  emailAddd :any;
  urlst :any;
  usernamest : any;

  selectedValues : string ="";
  submitted = false;
  constructor(private _formbuilder: FormBuilder, private _service: RecService, private _router: Router
    , public dialog: MatDialog, private store: Store,public out:outboundSerice) { }
    test(){
      // //console.log(this.receipentupdateForm)
      this.out.deliver = this.selectedValue
    this.out.emailAddress = this.emaill
    this.out.url= this.urls
    this.out.userName= this.userNames
    this.out.userPassword = this.userPasswords
    this.out.emailAddressquery = this.emailAdd
    this.out.deliverquery = this.selectedValues
    this.out.deliveryst =this.selectedValuess
    this.out.urlquery = this.urlq
    this.out.userquery = this.userq
    this.out.passwordquery = this.passwordq
    this.out.urlsta = this.urlst
    this.out.usersta = this.usernamest
    this.out.passwordsta = this.passwordst
    this.out.emailst = this.emailAddd
    }
  ngOnInit(): void {
    this.receipentupdateForm = this._formbuilder.group({
      connectorTag: [' '],
      isActive: ['true '],
      invoiceuploadDeliverymode: [''],
      invoicequeryDeliverymode: [''],
      invoicestatusupdateDeliverymode: [''],
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
      outboundConnectorsAutopost: this._formbuilder.array([
       this.outbounds = this._formbuilder.group({
        connectorType: [''],
        userName: [''],
        userPassword: [''],
        url: [''],
        inputRequest: [''],
        respDocNumberOnsuccessful: [''],
        respMessage: [''],
        operationAction: [''],
       })
      ]),
      outboundConnectorsItemDeliveryWebserviceMapping:this._formbuilder.array([
        this.webservice = this._formbuilder.group({
          itemType: [' Invoiceupload'],
          userName: ['',],
          userPassword: [''],
          url: ['']
        })
      ]),
    })
  
    this.store.select(getcommunicationid).subscribe((data1:any)=>{
      //console.log(data1)
      this.out.deliver = data1.results.invoiceuploadDeliverymode
      this.out.deliverquery = data1.results.invoicequeryDeliverymode
      this.out.deliveryst = data1.results.invoicestatusupdateDeliverymode
      this.out.emailAddress = data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
      this.out.emailAddressquery =data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
      this.out.emailst = data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
      this.out.url = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
      this.out.urlquery = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
      this.out.urlsta = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
      this.out.userName = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userName
      this.out.userquery =data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userName
      this.out.usersta = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userName
      this.out.userPassword = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword
      this.out.passwordquery = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword
      this.out.passwordsta = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword
      // //console.log(this.out.deliver)
      if(data1.results){
        this.selectedValue = data1.results.invoiceuploadDeliverymode
        this.selectedValues = data1.results.invoicequeryDeliverymode
        this.selectedValuess= data1.results.invoicestatusupdateDeliverymode
        this.emaill = data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
        this.emailAdd = data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
        this.emailAddd = data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
        this.userNames = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userName,
        this.userPasswords = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword,
        this.urls = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
        this.userq = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userName,
        this.passwordq = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword,
        this.urlq = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
        this.usernamest = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userName,
        this.passwordst = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword,
        this.urlst = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
        // if(data1.results.outboundConnectorsItemDeliveryEmailMapping[0].itemType==="Invoiceupload"){
        // this.emaill = data1.results.outboundConnectorsItemDeliveryEmailMapping.emailAddress
        // }
        // if(data1.results.outboundConnectorsItemDeliveryEmailMapping.itemType==="Invoiceupload"){

        // this.userNames = data1.results.outboundConnectorsItemDeliveryWebserviceMapping.userName,
        // this.userPasswords = data1.results.outboundConnectorsItemDeliveryWebserviceMapping.userPassword,
        // this.urls = data1.results.outboundConnectorsItemDeliveryWebserviceMapping.url
        // }
        // //console.log(data1.results.outboundConnectorsItemDeliveryEmailMapping.itemType)
        // if(data1.results.outboundConnectorsItemDeliveryEmailMapping[0].itemType==="InvoiceQuery"){
        //   //console.log("correct---------------------->")
        //   this.emailAdd = data1.results.outboundConnectorsItemDeliveryEmailMapping.emailAddress
        // }
        // if(data1.results.outboundConnectorsItemDeliveryWebserviceMapping.itemType==="InvoiceQuery"){
        //   this.urlq = data1.results.outboundConnectorsItemDeliveryWebserviceMapping.url,
        //   this.userq = data1.results.outboundConnectorsItemDeliveryWebserviceMapping.userName,
        //   this.passwordq = data1.results.outboundConnectorsItemDeliveryWebserviceMapping.userPassword
        // }

        this.receipentupdateForm.patchValue({
          
          invoiceuploadDeliverymode :data1.results.invoiceuploadDeliverymode,
          invoicequeryDeliverymode :data1.results.invoicequeryDeliverymode,
          invoicestatusupdateDeliverymode :data1.results.invoicestatusupdateDeliverymode,
          emailAddress :data1.results.outboundConnectorsItemDeliveryEmailMapping.emailAddress,
          url: data1.results.outboundConnectorsItemDeliveryWebserviceMapping.url,
          userName : data1.results.outboundConnectorsItemDeliveryWebserviceMapping.userName,
          userPassword :  data1.results.outboundConnectorsItemDeliveryWebserviceMapping.userPassword

         
        })
      }
    })
  }
}
