import { I } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { ForwardData, ForwardDatanull } from '../../../Actions/Forward.action';
import { getUsersForward } from '../../../Actions/GetUsersForForward.actions';
import { forwardState, getcustomerinvoicelistdetails, loginState } from '../../../Selectors/invoice.selector';
import { AssignedtomeServiceload } from '../assignedto-me/assignedtoMe.service';
import { ExceptionServiceload } from '../invoice-exceptions/exceptions.service';
import { QueriesServiceload } from '../invoice-queries/queries.service';
import { PaidService } from '../paidinvoices/paid.service';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { UserselectionComponent } from '../userselection/userselection.component';
@Component({
  selector: 'app-forwardpopup',
  templateUrl: './forwardpopup.component.html',
  styleUrls: ['./forwardpopup.component.css']
})
export class ForwardpopupComponent implements OnInit {
  mess: any="";
  status:any=false
  actionto: boolean=false;
  release: boolean=false;
  service: any;
  service2: any;
  service1: any;
  currentuserid: any;
  service4: any;
  supplier_legal_name: any;
  po_ref_num: any;
  statusload: any;
  constructor(public dialog: MatDialog,public _myFB:FormBuilder,public unpaid:UnpaidService,public store:Store,public dialogRef: MatDialogRef<ForwardpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private exception:ExceptionServiceload,private assidned:AssignedtomeServiceload,private queries:QueriesServiceload,private paid:PaidService,private cdref: ChangeDetectorRef
    ) {
      //console.log(data)
     }
  loading:any=false;
  faSearch:any =faSearch
  userid:any=""
  forwardetails = this._myFB.group({
    documentRefId: ['',[Validators.required]],
    action : ['',[Validators.required]],
    actionComments: ['',[Validators.required]],
    actionTo : ['',[Validators.required]],
  })

  ngOnInit() {

    this.unpaid.status.subscribe((status)=>{
      //console.log(status)
      this.statusload = status
      this.cdref.detectChanges();
    })

    this.service = this.unpaid.forwarduserid.subscribe((userid)=>{
      this.userid = userid
      this.forwardetails.patchValue({
        actionTo : this.userid
      })
    })
    this.store.dispatch(ForwardDatanull())
    this.service1 = this.store.select(forwardState).subscribe((data)=>{
      this.loading = data.loading
      //console.log(data)
      if(data.result){
        if(data.result.results.hasError){
          this.status=true
          this.mess = "Error occurred while forwarding the invoice"
        }
        else{
          this.status=true
          this.mess = data.result.results.refid
          this.dialogRef.close();
          if(this.statusload === 'Exception'){
            this.exception.loadexception.next(true)
          }
          else if(this.unpaid.myinbox){
            this.assidned.loadexception.next(true)
          }
          else if(this.statusload === 'Queried'){
            this.queries.loadexception.next(true)
          }
          else if(this.statusload === 'Paid'){
            this.paid.loadpaid.next(true)
          }
          else{
            this.unpaid.loadunpaid.next(true)
          }
        }
      }
    })
    this.service2 = this.store.select(loginState).subscribe((data:any)=>{
      // //console.log(data.user.user)
      this.currentuserid = data.user.user
    })
    this.service4 = this.store.select(getcustomerinvoicelistdetails).subscribe((data)=>{
    
      //console.log(data)
      if(data.invoicelist){
        if(!data.invoicelist.hasError){
          if(data.invoicelist.results.invoiceSupplierBuyerDetails){
            this.supplier_legal_name = data.invoicelist.results.invoiceSupplierBuyerDetails.supplier_legal_name
          }
          else{
            this.supplier_legal_name=""
          }
          if(data.invoicelist.results.invoiceReferenceDetails){
            this.po_ref_num = data.invoicelist.results.invoiceReferenceDetails.po_ref_num
          }
          else{
            this.po_ref_num=""
          }
        }
        else{
          //console.log("working")
        }
       
      }
    })
  }
  setusername(){
    // //console.log(this.userid)
    // //console.log(this.forwardetails.value.action)
    if(this.forwardetails.value.action==="Claim"){
      this.userid = this.currentuserid
      this.forwardetails.patchValue({
        actionTo:this.userid
      })
      this.actionto = true
      // this.forwardetails.get('actionTo')?.disable()
    }
    else if(this.forwardetails.value.action==="Release"){
      this.userid = ""
      this.forwardetails.patchValue({
        actionTo:this.userid
      })
      this.actionto = true
      this.release=true
      // this.forwardetails.get('actionTo')?.disable()
    }
    else{
      this.release=false
      this.forwardetails.patchValue({
        actionTo:this.userid
      })
      this.actionto = false
      
      // this.forwardetails.get('actionTo')?.enable()
    }
  }
  userid_change(){
    // //console.log(this.userid)
    this.forwardetails.patchValue({
      actionTo:this.userid
    })
  }
  openDialog(item: any) {
    if(item==='SearchUser'){
      const dialogRef = this.dialog.open(UserselectionComponent,{panelClass: 'custom-dialog-container' });
    }
  }
  Submit(){
    // Release
    if(this.forwardetails.value.action==="Release"){
      const releasedata={
        "documentRefId": this.unpaid.ref,
        "actionComments": this.forwardetails.value.actionComments
      }
      //console.log(releasedata)
      if(this.data.external){
        this.store.dispatch(ForwardData({url:Constants.ExternalRelease,data:releasedata}))
      }
      else if(!this.data.external){
        this.store.dispatch(ForwardData({url:Constants.Release,data:releasedata}))
      }
    }
    else{
      this.forwardetails.patchValue({
        documentRefId : this.unpaid.ref
      })
      // //console.log(this.forwardetails.value)
      if(this.data.external){
        this.store.dispatch(ForwardData({url:Constants.ExternalForward,data:this.forwardetails.value}))
      }
      else if(!this.data.external){
        this.store.dispatch(ForwardData({url:Constants.Forward,data:this.forwardetails.value}))
      }
    }
    
  }
  get f(){
    return this.forwardetails.controls
  }
   close(){
    this.dialogRef.close();
  }
  
}
