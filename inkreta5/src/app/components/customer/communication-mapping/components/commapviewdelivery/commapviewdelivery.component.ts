import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RecService } from '../../communication.service';
import { Store } from '@ngrx/store';
import { outboundSerice } from '../outbond.service';
import { getcommunicationid } from '../../Selector/Communication.selector';

@Component({
  selector: 'app-commapviewdelivery',
  templateUrl: './commapviewdelivery.component.html',
  styleUrls: ['./commapviewdelivery.component.css']
})
export class CommapviewdeliveryComponent implements OnInit {
  invoiceuploadDeliverymode: string = ''
  invoicestatusupdateDeliverymode!:string;
  invoicequeryDeliverymode! :string;
  url:any;
  userPassword :any;
  userName :any;
  emailAddressss :any;
  invoiceuploademail:any;
  invoiceupdatepassword:any;
  invoiceupdateusername :any;
  invoiceupdateurl: any;
  invoicequrl:any;
  invoicequsername:any;
  invoiceqpassword:any;
  invoicesturl:any;
  invoicestusername:any;
  invoicestpassword:any;
  invoiceqemail:any;
  invoicestemail:any;

  constructor(private _formbuilder: FormBuilder, private _http: HttpClient,public out:outboundSerice,
    private rec: RecService, private _router: Router,public store:Store) { }

  ngOnInit(): void {
    this.store.select(getcommunicationid).subscribe((data1:any)=>{
      ////console.log(data1)
      // if(data1.results){
      //   if(data1.results.outboundConnectorsItemDeliveryWebserviceMapping.length>0){
      //   //console.log(data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress)
        this.invoiceuploadDeliverymode = data1.results.invoiceuploadDeliverymode
        this.invoicequeryDeliverymode = data1.results.invoicequeryDeliverymode
        this.invoicestatusupdateDeliverymode = data1.results.invoicestatusupdateDeliverymode
      //   this.emailAddressss= data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
      //   this.url = data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
      //   this.userName =  data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userName
      //   this.userPassword =  data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword
      //   }
      //   else{
      //     this.invoiceuploadDeliverymode = ""
      //   this.invoicequeryDeliverymode = ""
      //   this.invoicestatusupdateDeliverymode = ""
      //   this.emailAddressss= ""
      //   this.url = ""
      //   this.userName = ""
      //   this.userPassword =""
      //   }

      // }

      if(data1.results.invoiceuploadDeliverymode==="eMail"){
        ////console.log(data1.results.invoiceuploadDeliverymode)
        this.invoiceuploademail= data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
      }
      else{
        this.invoiceuploademail =" "
      }

      if(data1.results.invoicequeryDeliverymode==="eMail"){
        this.invoiceqemail= data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
      }
      else{
        this.invoiceqemail =" "
      }
      if(data1.results.invoicestatusupdateDeliverymode === "eMail"){
        this.invoicestemail = data1.results.outboundConnectorsItemDeliveryEmailMapping[0].emailAddress
      }
      else{
        this.invoicestemail = " "
      }

      if(data1.results.invoiceuploadDeliverymode==="WebService"){
        this.invoiceupdateurl= data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
        this.invoiceupdateusername= data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userName
        this.invoiceupdatepassword= data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword
      }
      else{
        this.invoiceupdatepassword=""
        this.invoiceupdateusername = ""
        this.invoiceupdateurl = ""
      }

      if(data1.results.invoicequeryDeliverymode==="WebService"){
       this.invoicequrl= data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
        this.invoicequsername= data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userName
        this.invoiceqpassword= data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword
      }
      else{
         this.invoicequrl=" "
         this.invoicequsername = " "
         this.invoiceqpassword =" "
      }

      if(data1.results.invoicestatusupdateDeliverymode==="Webservice")
      {
        ////console.log(data1.results.invoicestatusupdateDeliverymode)
        this.invoicesturl= data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].url
        this.invoicestusername= data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userName
        this.invoicestpassword =data1.results.outboundConnectorsItemDeliveryWebserviceMapping[0].userPassword
      }
      else{
        this.invoicestpassword= " "
        this.invoicestusername=" "
        this.invoicesturl= " "
      }
        

      if(data1.results.invoiceuploadDeliverymode==="None"){
      }
    })
  }

}
