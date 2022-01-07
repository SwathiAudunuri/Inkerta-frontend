import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { getstatusandrole } from '../../../Actions/statusandrole.action';
import { getstatusandroles } from '../../../Selectors/customaction.selector';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as vkbeautify from 'vkbeautify';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { addcustomercustomactions, getcustomercustomactions } from '../../../Actions/customaction.action';
import { assign } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/constants/constants';
import { CustomactionService } from '../../customaction.service';
@Component({
  selector: 'app-newaction',
  templateUrl: './newaction.component.html',
  styleUrls: ['./newaction.component.css']
})
export class NewactionComponent implements OnInit {

  constructor(public _myFB:FormBuilder,private store:Store,private _http:HttpClient,private actionservice:CustomactionService) { }
  statusandrole:any
  dropdownSettings = {};
  customActionsByInvoiceStatus: any = [];
  temp:any
  temp1:any
  customActionsByPartnerRole: any = [];
  toppings = new FormControl();
  invoiceStatuses:any
  roles:any
  disabled = false;
  showFilter = false
  limitSelection = false;
  inputrequest:any
  @Output() sharedload: EventEmitter<any>=   new EventEmitter();

  newaction= this._myFB.group({
    actionName: ['',[Validators.required]],
    actionConnectorType : ['',[Validators.required]],
    url : ['',[Validators.required]],
    userName:['',[Validators.required]],
    actionSystem:['',[Validators.required]],
    userPassword:['',[Validators.required]],
    customActionsByInvoiceStatus:[[],[Validators.required]],
    customActionsByPartnerRole:[[],[Validators.required]],
    respAttributeOnsuccessful:['',[Validators.required]],
    respMessage:['',[Validators.required]],
    actionOperation:['',[Validators.required]],
    inputRequest:['',[Validators.required]],

    transferStylesheet:['',[Validators.required]],
  })
  ngOnInit(): void {
   
    this.store.dispatch(getstatusandrole())
    this.store.select(getstatusandroles).subscribe((data:any)=>{
      this.statusandrole=data.result.results
      this.roles=data.result.results.partnerRoles
      this.invoiceStatuses=this.statusandrole.invoiceStatuses
      this.invoiceStatuses = Object.values(this.invoiceStatuses);
      this.roles = Object.values(this.roles);

      

      

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
  closesidenav(){
    this.actionservice.newaction.next(false)
  }
  // onItemSelect(item: any) {
  //   //console.log(item);
  // }
  // onSelectAll(items: any) {
  //   //console.log(items);
  // }
  Submit(){
    
  this.temp=   Object.assign({},this.newaction.value.customActionsByInvoiceStatus)
    this.temp= Object.values(this.temp) 
    var statuses=[]
    for (let i = 0; i < this.temp.length; i++) {
      let val = this.newaction.value.customActionsByInvoiceStatus[i];   
      //console.log(val)
      let obj = { invoiceStatus: val }
      //console.log(obj)
      statuses.push(obj);  
    }
    //console.log(statuses)
    this.temp=   Object.assign({},this.newaction.value.customActionsByPartnerRole)
    this.temp= Object.values(this.temp)
    var roleses=[]
    for (let i = 0; i < this.temp.length; i++) {
      let val = this.newaction.value.customActionsByPartnerRole[i];    
      let obj = { "roleName": val }   
      roleses.push(obj)
    }
    //console.log(roleses)
  
  
  this.temp1= this.newaction.value
  const obj={

    "customActions": {           

        "actionName": this.temp1.actionName,          

        "actionConnectorType": this.temp1.actionConnectorType,

        "actionSystem": this.temp1.actionSystem,


        "userName": this.temp1.userName,

        "userPassword": this.temp1.userPassword,

        "url": this.temp1.url,

        "inputRequest": this.temp1.inputRequest,

        "respAttributeOnsuccessful": this.temp1.respAttributeOnsuccessful,

        "respMessage": this.temp1.respMessage,

        "actionOperation": this.temp1.actionOperation,

        "transferStylesheet": this.temp1.transferStylesheet

    },

    "customActionsByInvoiceStatus": statuses,

    "customActionsByPartnerRole": roleses

     



}
  var t1=this.store.dispatch(addcustomercustomactions({data:obj}))
    //console.log(obj)
    this.actionservice.newaction.next(false)
    this.store.dispatch(getcustomercustomactions())

  }
  close(){
    this.actionservice.newaction.next(false)
    this.sharedload.emit(true)
  }
}
