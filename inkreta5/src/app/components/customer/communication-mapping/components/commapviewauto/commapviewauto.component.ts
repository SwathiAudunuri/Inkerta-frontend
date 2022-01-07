import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RecService } from '../../communication.service';
import { outboundSerice } from '../outbond.service';
import { Store } from '@ngrx/store';
import { getcommunicationid } from '../../Selector/Communication.selector';
import * as vkbeautify from 'vkbeautify';


@Component({
  selector: 'app-commapviewauto',
  templateUrl: './commapviewauto.component.html',
  styleUrls: ['./commapviewauto.component.css']
})
export class CommapviewautoComponent implements OnInit {
  invoiceuploadDeliverymode: string = '';
  invoicestatusupdateDeliverymode:string='';
  invoicequeryDeliverymode :string='';
  connectorType :any;
  operationAction :any;
  respMessage :any;
  respDocNumberOnsuccessful :any;
  inputRequest!:string;
  url :any
  userPassword :any;
  userName:any
  autopostOnVerification :any;
  constructor(private _formbuilder: FormBuilder, private _http: HttpClient,public out:outboundSerice,
    private rec: RecService, private _router: Router,public store:Store) { }
    // var xmlDoc = jQuery.parseXML("<foo>Stuff</foo>");
  ngOnInit(): void {
    this.store.select(getcommunicationid).subscribe((data1:any)=>{
      // //console.log(data1)
      if(data1.results){

        this.autopostOnVerification =data1.results.autopostOnVerification
        this.connectorType = data1.results.outboundConnectorsAutopost.connectorType
        this.userName = data1.results.outboundConnectorsAutopost.userName
        this.userPassword = data1.results.outboundConnectorsAutopost.userPassword
        this.url = data1.results.outboundConnectorsAutopost.url
        // this.inputRequest = data1.results.outboundConnectorsAutopost.inputRequest
        this.inputRequest = vkbeautify.xml(data1.results.outboundConnectorsAutopost.inputRequest)
        //console.log(vkbeautify.xml(data1.results.outboundConnectorsAutopost.inputRequest))
        
        // this.inputRequest.parseFromString(data1.results.outboundConnectorsAutopost.inputRequest, "text/xml");
        this.respDocNumberOnsuccessful = data1.results.outboundConnectorsAutopost.respDocNumberOnsuccessful
        this.respMessage =data1.results.outboundConnectorsAutopost.respMessage
        this.operationAction = data1.results.outboundConnectorsAutopost.operationAction




        this.invoiceuploadDeliverymode = data1.results.invoiceuploadDeliverymode
        this.invoicequeryDeliverymode = data1.results.invoicequeryDeliverymode
        this.invoicestatusupdateDeliverymode = data1.results.invoicestatusupdateDeliverymode
      }
    })
 
  }
  // transform(value: string): string {
  //   return vkbeautify.xml(value);
  // }

}
