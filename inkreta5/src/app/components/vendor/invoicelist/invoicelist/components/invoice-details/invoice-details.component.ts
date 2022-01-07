import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { getInvoiceListDetails, InvoiceListDetailsInitialvalues } from '../../../Actions/invoicelistdetails.actions';
import { getinvoicelistdetails } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {
  invoicelist: any = [];
  document_ref_id: any;
  invoicelistdetails: any;
  buyuyerName: any;
  loading:any=false
  date:any = new Date()
  status1: any;
 @Input() invoicesidenav:any;
  invoicedate: any;
  invoicecreatedate: any;
  paidamount: any;
  csessvalue: any;
  total_assessable_value: any;
  total_invoice_value: any;
  dispatch_pincode: any;
  dispatch_state: any;
  dispatch_address1: any;
  dispatch_location: any;
  supplier_email: any;
  supplier_phone: any;
  supplier_gstin: any;
  supplier_legal_name: any;
  shippingto_pincode: any;
  shippintto_state: any;
  shippingto_address2: any;
  shippingto_location: any;
  shippingto_address1: any;
  billing_email: any;
  billing_phone: any;
  billing_gstin: any;
  billing_legal_name: any;
  service: any;
  detailsloading: any;
  InvoiceNo:any;
  @Input() index: any;
  loadinvoicedetails= new BehaviorSubject<boolean>(false)
  service1: any;
  service4: any;
  po_ref_num: any;
  igstvalue: any;
  external: any;
  constructor(private store:Store,public unpaid:UnpaidService) { }

  ngOnInit(){
    this.store.dispatch(InvoiceListDetailsInitialvalues())
    this.service4 = this.store.select(getinvoicelistdetails).subscribe((data)=>{
      this.detailsloading = data.loading
      //console.log(data)
      if(data.invoicelist){
        if(!data.invoicelist.hasError){
          // //console.log(data)
          this.invoicelistdetails = data.invoicelist.results
          if(this.invoicelistdetails.invoiceReferenceDetails){
            this.po_ref_num = this.invoicelistdetails.invoiceReferenceDetails.po_ref_num
          }
          else{
            this.po_ref_num=""
          }
          if(this.invoicelistdetails.invoiceDetails){
            this.InvoiceNo = this.invoicelistdetails.invoiceDetails.invoicenum
            this.status1 = this.invoicelistdetails.invoiceDetails.invoice_status
            this.invoicedate = this.invoicelistdetails.invoiceDetails.invoicedate
            this.invoicecreatedate = this.invoicelistdetails.invoiceDetails.created_date
            this.csessvalue = this.invoicelistdetails.invoiceDetails.statecessvalue
            this.total_assessable_value = this.invoicelistdetails.invoiceDetails.total_assessable_value
            this.total_invoice_value = this.invoicelistdetails.invoiceDetails.total_invoice_value
            this.document_ref_id =this.invoicelistdetails.invoiceDetails.document_ref_id
            this.igstvalue = this.invoicelistdetails.invoiceDetails.igstvalue
          }
          else{
            this.InvoiceNo = ""
            this.status1 = ""
            this.invoicedate = ""
            this.invoicecreatedate = ""
            this.csessvalue = ""
            this.total_assessable_value = ""
            this.total_invoice_value = ""
            this.document_ref_id = ""
            this.igstvalue = ""
          }

 

          if(this.invoicelistdetails.invoiceDispatchShiptoDetails){
            this.dispatch_pincode = this.invoicelistdetails.invoiceDispatchShiptoDetails.dispatch_pincode
            this.dispatch_state = this.invoicelistdetails.invoiceDispatchShiptoDetails.dispatch_state
            this.dispatch_address1 = this.invoicelistdetails.invoiceDispatchShiptoDetails.dispatch_address1
            this.dispatch_location = this.invoicelistdetails.invoiceDispatchShiptoDetails.dispatch_location
            this.shippingto_pincode = this.invoicelistdetails.invoiceDispatchShiptoDetails.shippingto_pincode
            this.shippintto_state = this.invoicelistdetails.invoiceDispatchShiptoDetails.shippintto_state
            this.shippingto_address2 = this.invoicelistdetails.invoiceDispatchShiptoDetails.shippingto_address2
            this.shippingto_location = this.invoicelistdetails.invoiceDispatchShiptoDetails.shippingto_location
            this.shippingto_address1 = this.invoicelistdetails.invoiceDispatchShiptoDetails.shippingto_address1

          }
          else{
            this.dispatch_pincode = ""
            this.dispatch_state = ""
            this.dispatch_address1 = ""
            this.dispatch_location = ""
            this.shippingto_pincode = ""
            this.shippintto_state = ""
            this.shippingto_address2 = ""
            this.shippingto_location = ""
            this.shippingto_address1 = ""
          }
          if(this.invoicelistdetails.invoiceSupplierBuyerDetails){
            this.supplier_email = this.invoicelistdetails.invoiceSupplierBuyerDetails.supplier_email 
            this.supplier_phone = this.invoicelistdetails.invoiceSupplierBuyerDetails.supplier_phone
            this.supplier_gstin = this.invoicelistdetails.invoiceSupplierBuyerDetails.supplier_gstin
            this.supplier_legal_name = this.invoicelistdetails.invoiceSupplierBuyerDetails.supplier_legal_name
            this.billing_email = this.invoicelistdetails.invoiceSupplierBuyerDetails.billing_email
            this.billing_phone = this.invoicelistdetails.invoiceSupplierBuyerDetails.billing_phone
            this.billing_gstin = this.invoicelistdetails.invoiceSupplierBuyerDetails.billing_gstin
            this.billing_legal_name = this.invoicelistdetails.invoiceSupplierBuyerDetails.billing_legal_name
          }
          else{
            this.supplier_email = ""
            this.supplier_phone = ""
            this.supplier_gstin = ""
            this.supplier_legal_name = ""
            this.billing_email = ""
            this.billing_phone = ""
            this.billing_gstin = ""
            this.billing_legal_name = ""
          }
          if(this.invoicelistdetails.invoiceSellerPaymentDetails){
            this.paidamount = this.invoicelistdetails.invoiceSellerPaymentDetails.paid_amount
          }
          else{
            this.paidamount = ""
          }
          

          // if(this.invoicelistdetails.invoiceReferenceDetails){
            
          // }
          // else{
          //   this.po_ref_num=""
          // }
          
        }
        else{
          //console.log("working")
        }
       
      }
    })
    this.service = this.unpaid.changetab.subscribe((value)=>{
      //console.log(value)
      if(value){
      if(this.unpaid.tab===this.index ){
        //console.log("in changetab",value)
        //console.log("details compomemt",this.unpaid.tab)
        this.store.dispatch(getInvoiceListDetails({doc_refid : this.unpaid.ref}))
        
      this.loadinvoicedetails.next(true)
      }
    }
    })
    this.getdata()
    
  }
  getdata(){
    this.service1 = this.unpaid.invoicedetails.subscribe((l)=>{
      if(l){
        if(this.unpaid.tab===this.index){
        //console.log(l)
        //console.log("details compomemt",this.unpaid.tab)
        this.store.dispatch(getInvoiceListDetails({doc_refid : this.unpaid.ref}))

        this.loadinvoicedetails.next(true)
        //console.warn(l)
      }
  }
    })
  }
  ngOnDestroy() {
    this.service.unsubscribe()
    this.service1.unsubscribe()
    this.service4.unsubscribe()
  }
}
