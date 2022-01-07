import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { getcustomerInvoiceListInitialValue } from '../../../Actions/invoicelist.action';
// import { getcustomerinvoicelistdetails } from 'src/app/components/buyerandsupplier/customerinvoicelist/Selectors/invoice.selector';
import { custInvoiceListDetailsInitialvalues, getcustomerInvoiceListDetails } from '../../../Actions/invoicelistdetails.actions';
import { getcustomerinvoicelistdetails } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {
  // @ViewChild('tabGroup') tabGroup:any;

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
  invoicedetails: any
  @Input() index: any;
  loadinvoicedetails = new BehaviorSubject<boolean>(false)
  detailsloading: any;
  service: any;
  service1: any;
  value: any;
  dtab: any;
  status1: any;
  invoicelistdetails: any;
  invoicelist: any = [];
  InvoiceNo: any = "";
  service3: any;
  po_ref_num: any="4500022519";
  document_ref_id: any;
  service4: any;
  igstvalue: any;
  previewsDoc_ref_id: any;
  constructor(private unpaid:UnpaidService,private store:Store) { }
  icon:any= [];
  duedate:any;
  ngAfterViewInit(){
    // //console.log(this.tabGroup)
  }
  ngOnInit(): void {
    this.icon["INR"] = "currency_rupee";
    this.icon["USD"] = "attach_money";
    
    this.store.dispatch(custInvoiceListDetailsInitialvalues())
    this.service4 = this.store.select(getcustomerinvoicelistdetails).subscribe((data)=>{
      this.detailsloading = data.loading
      this.previewsDoc_ref_id = data.doc_refid
      // //console.log(data)
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

            this.duedate =this.invoicelistdetails.invoiceDetails.created_date
            // this.duedate = this.add_daete(parseInt(this.invoicelistdetails.invoiceDetails.created_date), this.invoicelistdetails.invoiceDetails.invoicedate)
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

    
    // this.unpaid.invoicedetails.next(null)
    // //console.log("ngoninit - >details")

    

    this.service = this.unpaid.changetab.subscribe((value) => {
      //console.log(this.unpaid.tab)
      //console.log(this.index)
      //console.log(value)
      if(this.previewsDoc_ref_id !== this.unpaid.ref){
        if(value === 0){
          if (this.unpaid.tab === this.index) {
            //console.log("changetab")
            this.store.dispatch(getcustomerInvoiceListDetails({ doc_refid: this.unpaid.ref }))
            this.loadinvoicedetails.next(true)
          }
        }
      }
    })
    this.getdata()
  }
  add_daete(days: any, date1: any) {
    var date = new Date(date1);
    date.setDate(date.getDate() + days);
    return date;
  }
  verfy(value:any){
    if(value){
      return value;
    }
    else{
      return "";
    }
  }
  getdata() {
    this.service1 = this.unpaid.invoicedetails.subscribe((l) => {
      // this.dtab=this.unpaid.status
      // //console.log(this.unpaid.tab)
      if(l){
        //console.log(this.unpaid.tab)
        //console.log(this.index)
        if (this.unpaid.tab === this.index) {
          //console.log("invoicedetails",l)
          
          this.store.dispatch(getcustomerInvoiceListDetails({ doc_refid: l }))
          this.loadinvoicedetails.next(true)
        }
      }
      // this.unpaid.invoicedetails.next(null)
    })
    //  this.loadinvoicedetails.subscribe(() => {
    //    //console.log(this.unpaid.tab)
    //   if (this.unpaid.tab === this.index) {
    //     this.service4 = this.store.select(getcustomerinvoicelistdetails).subscribe((data)=>{
    //       this.detailsloading = data.loading
    //       if(data.invoicelist){
    //         if(!data.invoicelist.hasError){
    //           //console.log(data)
    //           this.invoicelistdetails = data.invoicelist.results

    //           this.InvoiceNo = this.verfy(this.invoicelistdetails.invoiceDetails.invoicenum)
    //           this.status1 = this.invoicelistdetails.invoiceDetails.invoice_status
    //           this.invoicedate = this.invoicelistdetails.invoiceDetails.invoicedate
    //           this.invoicecreatedate = this.invoicelistdetails.invoiceDetails.created_date
    //           this.paidamount = this.invoicelistdetails.invoiceSellerPaymentDetails.paid_amount
    //           this.csessvalue = this.invoicelistdetails.invoiceDetails.statecessvalue
    //           this.total_assessable_value = this.invoicelistdetails.invoiceDetails.total_assessable_value
    //           this.total_invoice_value = this.invoicelistdetails.invoiceDetails.total_invoice_value
    //           this.document_ref_id =this.invoicelistdetails.invoiceDetails.document_ref_id

    //           this.dispatch_pincode = this.invoicelistdetails.invoiceDispatchShiptoDetails.dispatch_pincode
    //           this.dispatch_state = this.invoicelistdetails.invoiceDispatchShiptoDetails.dispatch_state
    //           this.dispatch_address1 = this.invoicelistdetails.invoiceDispatchShiptoDetails.dispatch_address1
    //           this.dispatch_location = this.invoicelistdetails.invoiceDispatchShiptoDetails.dispatch_location
    //           this.supplier_email = this.invoicelistdetails.invoiceSupplierBuyerDetails.supplier_email
    //           this.supplier_phone = this.invoicelistdetails.invoiceSupplierBuyerDetails.supplier_phone
    //           this.supplier_gstin = this.invoicelistdetails.invoiceSupplierBuyerDetails.supplier_gstin
    //           this.supplier_legal_name = this.invoicelistdetails.invoiceSupplierBuyerDetails.supplier_legal_name

    //           this.shippingto_pincode = this.invoicelistdetails.invoiceDispatchShiptoDetails.shippingto_pincode
    //           this.shippintto_state = this.invoicelistdetails.invoiceDispatchShiptoDetails.shippintto_state
    //           this.shippingto_address2 = this.invoicelistdetails.invoiceDispatchShiptoDetails.shippingto_address2
    //           this.shippingto_location = this.invoicelistdetails.invoiceDispatchShiptoDetails.shippingto_location
    //           this.shippingto_address1 = this.invoicelistdetails.invoiceDispatchShiptoDetails.shippingto_address1
    //           this.billing_email = this.invoicelistdetails.invoiceSupplierBuyerDetails.billing_email
    //           this.billing_phone = this.invoicelistdetails.invoiceSupplierBuyerDetails.billing_phone
    //           this.billing_gstin = this.invoicelistdetails.invoiceSupplierBuyerDetails.billing_gstin
    //           this.billing_legal_name = this.invoicelistdetails.invoiceSupplierBuyerDetails.billing_legal_name
    //           if(this.invoicelistdetails.invoiceReferenceDetails){
    //             this.po_ref_num = this.invoicelistdetails.invoiceReferenceDetails.po_ref_num
    //           }
    //           else{
    //             this.po_ref_num=""
    //           }
              
    //         }
           
    //       }
    //     })
    //   }
      
    // })
   
  }
  ngOnDestroy() {
    // this.service3.unsubscribe()
    this.service.unsubscribe()
    this.service1.unsubscribe()
    this.service4.unsubscribe()
    
  }

}
