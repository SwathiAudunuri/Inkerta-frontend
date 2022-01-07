import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { getcustomerExceptionInvoiceList } from '../../../Actions/Exceptioninvoicelist.action';
import { getcustomerInvoiceList } from '../../../Actions/invoicelist.action';
import { getcustomerPaidInvoiceList } from '../../../Actions/paidinvoicelist.action';
import { PostUpdateStatus, PostUpdateStatusnull } from '../../../Actions/postUpdateStatus.actions';
import { customerupdateStatus, customerupdateStatusnull } from '../../../Actions/updatestatus.action';
import { updatestatus } from '../../../models/updatestatus.model';
import { PostupdateStatusState, updateStatusState } from '../../../Selectors/invoice.selector';
import { ExceptionServiceload } from '../invoice-exceptions/exceptions.service';
import { PaidService } from '../paidinvoices/paid.service';
import { SuccessComponent } from '../success/success.component';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { UnpaidinvoicesComponent } from '../unpaidinvoices/unpaidinvoices.component';
import { UpdateService } from './update.service';


@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
//@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
export class UpdatestatusComponent implements OnInit {
  ref: any
  serive1: any;
  service2: any;
  loading1: any=false;

  paid_amt:any;
  paid_due:any=0;
  paid_on:any;
  pay_status:any="Paid";
  pay_fin_branch:any;
  pay_fin_acc:any;
  pay_mode:any;
  pay_name:any;
  pay_reason:any

  dumy: any;
  external: any;
  constructor(public dialogRef: MatDialogRef<UpdatestatusComponent>, private updateservice: UpdateService, private store: Store,
    public dialog: MatDialog,private cdref: ChangeDetectorRef,
    private fb: FormBuilder, private unpaid: UnpaidService, private paid: PaidService, private exception: ExceptionServiceload) {
    // this.ref=data.document_ref_id
    this.ref = this.unpaid.ref

  }
  updateForm = this.fb.group({
    actionComments: [{ value: 'please add note', disabled: false }, Validators.required],
    action: ['', Validators.required],
    // Payment_Number:[''],
    // Transaction_Number:[''],
    // Reason:['']
  });
  //updateForm: FormGroup;
  //updateForm: FormGroup;
  isChecked!: string;
  selectedValue!: string;
  dynamic_color!: string
  temp: any
  total_invoice_value: any
  invoicedate: any
  invoiceduedate: any
  invoicenum: any
  supplier_legal_name: any
  statuskeys: any
  temp1: any
  statusDescription: any
  loading: any = false;
  ngOnInit(): void {
    this.store.dispatch(customerupdateStatusnull())
    this.store.dispatch(PostUpdateStatusnull())
    //console.log("------------------------")
    this.getStatus()
    //console.log(this.ref)
    this.unpaid.external.subscribe((data)=>{
      this.external = data
      this.cdref.detectChanges();
    })
  }
  paid_amount(){
    this.paid_due = this.dumy - this.paid_amt
  }
  getStatus() {
    var url = Constants.Updatestatus + this.ref
    this.store.dispatch(customerupdateStatus({ url: url }))

    this.serive1 = this.store.select(updateStatusState).subscribe((data: any) => {
      //console.log(data)
      this.loading = data.loading
      if (data?.result) {
        if (data?.result?.hasError) {

        }
        else {
          this.temp = data?.result?.results
          //console.log(this.temp)
          this.total_invoice_value = this.temp.invoiceheader.total_invoice_value
          this.paid = this.temp.invoiceheader.total_invoice_value

          this.paid_amt = this.temp.invoiceheader.total_invoice_value

          this.dumy= this.temp.invoiceheader.total_invoice_value
          
          this.invoicedate = this.temp.invoiceheader.invoicedate
          //console.log(this.invoicedate)
          this.invoiceduedate = this.temp.invoiceheader.invoiceduedate
          //console.log(this.invoiceduedate)

          this.invoicenum = this.temp.invoiceheader.invoicenum
          this.supplier_legal_name = this.temp.invoiceheader.supplier_legal_name
          this.statuskeys = this.temp.statuskeys
        }
      }
    })

    this.service2 = this.store.select(PostupdateStatusState).subscribe((data:any)=>{
      //console.log(data)
      this.loading1 = data.loading
      if(data?.result){
        if(data?.result?.hasError){

        }
        else{
          
          this.unpaid.loadunpaid.next(true)
          // this.paid.loadpaid.next(true)
          // this.exception.loadexception.next(true)
          //console.log("working fine")
          this.dialog.open(SuccessComponent);
          this.dialogRef.close();
        }
      }
    })

    // this.updateservice.getStatus(this.ref).subscribe(data=>{
    //   this.temp=data
    //   this.temp=this.temp.results
    //   //console.log(this.temp)
    // this.total_invoice_value=this.temp.invoiceheader.total_invoice_value 
    // this.invoicedate=this.temp.invoiceheader.invoicedate
    // //console.log(this.invoicedate)
    // this.invoiceduedate=this.temp.invoiceheader.invoiceduedate
    // //console.log(this.invoiceduedate)

    //  this.invoicenum=this.temp.invoiceheader.invoicenum 
    //   this.supplier_legal_name=this.temp.invoiceheader.supplier_legal_name
    //   this.statuskeys=this.temp.statuskeys
    // })
  }
  close() {
    this.dialogRef.close();

  }
  checkValue(e: any) {

    this.temp1 = e
    //console.log(e)

    this.selectedValue = e.statusValue
    this.statusDescription = this.temp1.statusDescription
    this.dynamic_color = "dynamic_color"

  }
  onSubmit() {
    //console.log(this.updateForm.value)
    if(this.updateForm.value.action === 'Paid'){
      var a:any={
        "financial_institution_branch" :this.pay_fin_branch,
        "modeofpayment":this.pay_mode,
        "paid_amount":parseInt(this.paid_amt),
        "payee_financial_account":this.pay_fin_acc,
        "payee_name":this.pay_name,
        "payment_due":this.paid_due,
        "paid_on":this.paid_on,
        "documentRefId":this.ref,
        "reason_for_partial_payment":this.pay_reason,
        "status" : this.pay_status,
        "action_comments" : this.updateForm.value.actionComments,
        "externalInvoice" : false
      }
      this.store.dispatch(PostUpdateStatus({url:Constants.PaidUpdateStatusSave,data:a}))
    }
    else{
      var a: any = {
        "documentRefId": this.ref, "actionComments": this.updateForm.value.actionComments,
        "action": this.updateForm.value.action, "actionType": "STATUS CHANGE", "actionBy": "000012",
        "source": "Customer"
      }
      this.store.dispatch(PostUpdateStatus({url:Constants.UpdateStatusSave,data:a}))
    }
    console.log(a)
    // this.store.dispatch(PostUpdateStatus({url:Constants.UpdateStatusSave,data:a}))

  }
  ngOnDestroy() {
    this.serive1.unsubscribe()
    this.service2.unsubscribe()
    this.store.dispatch(customerupdateStatusnull())
    this.store.dispatch(PostUpdateStatusnull())
  }
}


