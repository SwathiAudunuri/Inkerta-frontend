import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { getcustomerinvoicelistdetails } from 'src/app/components/customer/invoicelist/Selectors/invoice.selector';
@Component({
  selector: 'app-dispatch-shipto',
  templateUrl: './dispatch-shipto.component.html',
  styleUrls: ['./dispatch-shipto.component.css']
})
export class DispatchShiptoComponent implements OnInit {
  invoicedetails: any;
  invoicedetailsview: any;
  dispatch_company_name: any;
  dispatch_location: any;
  dispatch_pincode: any;
  dispatch_address1: any;
  dispatch_address2: any;
  shippingto_address2: any;
  shippingto_address1: any;
  shippingto_pincode: any;
  shippingto_location: any;
  shippingto_trade_name: any;
  shippingto_gstin: any;
  shippingto_legal_name: any;

  constructor(public store : Store) { }

  ngOnInit(): void {
    this.store.select(getcustomerinvoicelistdetails).subscribe(data=>{
      this.invoicedetails=data.invoicelist.results
      this.invoicedetailsview=this.invoicedetails
      this.dispatch_company_name =this.invoicedetailsview.invoiceDispatchShiptoDetails.dispatch_company_name
      this.dispatch_location =this.invoicedetailsview.invoiceDispatchShiptoDetails.dispatch_location
      this.dispatch_pincode =this.invoicedetailsview.invoiceDispatchShiptoDetails.dispatch_pincode
      this.dispatch_address1 =this.invoicedetailsview.invoiceDispatchShiptoDetails.dispatch_address1
      this.dispatch_address2 =this.invoicedetailsview.invoiceDispatchShiptoDetails.dispatch_address2
      this.shippingto_gstin = this.invoicedetailsview.invoiceDispatchShiptoDetails.shippingto_gstin
      this.shippingto_legal_name = this.invoicedetailsview.invoiceDispatchShiptoDetails.shippingto_legal_name
      this.shippingto_trade_name = this.invoicedetailsview.invoiceDispatchShiptoDetails.shippingto_trade_name
      this.shippingto_location = this.invoicedetailsview.invoiceDispatchShiptoDetails.shippingto_location
      this.shippingto_pincode = this.invoicedetailsview.invoiceDispatchShiptoDetails.shippingto_pincode
      this.shippingto_address1 = this.invoicedetailsview.invoiceDispatchShiptoDetails.shippingto_address1
      this.shippingto_address2 = this.invoicedetailsview.invoiceDispatchShiptoDetails.shippingto_address2
    })
  }

}
