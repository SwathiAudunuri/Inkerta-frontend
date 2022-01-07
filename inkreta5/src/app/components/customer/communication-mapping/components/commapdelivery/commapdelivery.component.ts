import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { addCommList } from '../../Action/Communication.action';
import { RecService } from '../../communication.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { outboundSerice } from '../outbond.service';
@Component({
  selector: 'app-commapdelivery',
  templateUrl: './commapdelivery.component.html',
  styleUrls: ['./commapdelivery.component.css']
})
export class CommapdeliveryComponent implements OnInit {
  // @Input()  public receipentForm:any;
  // @Output() receipentForm1=new EventEmitter()
  receipentForm!: FormGroup
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
  outbounds !:FormGroup
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
      // //console.log(this.receipentForm)
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
    // this.out.emailAddresss = this.emailAddd
    }
  ngOnInit(): void {
    this.receipentForm = this._formbuilder.group({
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
  }
  onSubmit1() {
    this.submitted = true;
    // //console.log("fndeb")
    // //console.log(this.receipentForm.value)
    var communication = this.receipentForm.value
    this.store.dispatch(addCommList(communication))
  }
}

