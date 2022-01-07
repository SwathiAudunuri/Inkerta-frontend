import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getcustomerinvoicelistdetails } from 'src/app/components/customer/invoicelist/Selectors/invoice.selector';

@Component({
  selector: 'app-supplier-buyer',
  templateUrl: './supplier-buyer.component.html',
  styleUrls: ['./supplier-buyer.component.css']
})
export class SupplierBuyerComponent implements OnInit {
  invoicedetails: any;
  invoicedetailsview: any;
  supplier_location: any;
  supplier_gstin: any;
  supplier_legal_name: any;
  supplier_trading_name: any;
  supplier_pincode: any;
  supplier_address1: any;
  supplier_email: any;
  billing_gstin: any;
  billing_legal_name: any;
  billing_trade_name: any;
  billing_location: any;
  billing_pincode: any;
  billing_email: any;
  billing_address1: any;
  billing_address2: any;
  supplier_address2: any;

  constructor(public store:Store) { }

  ngOnInit(): void {
    this.store.select(getcustomerinvoicelistdetails).subscribe(data=>{
      this.invoicedetails=data.invoicelist.results
      this.invoicedetailsview=this.invoicedetails
      this.supplier_gstin =this.invoicedetailsview.invoiceSupplierBuyerDetails.supplier_gstin
      this.supplier_legal_name =this.invoicedetailsview.invoiceSupplierBuyerDetails.supplier_legal_name
      this.supplier_trading_name =this.invoicedetailsview.invoiceSupplierBuyerDetails.supplier_trading_name
      this.supplier_location =this.invoicedetailsview.invoiceSupplierBuyerDetails.supplier_location
      this.supplier_pincode =this.invoicedetailsview.invoiceSupplierBuyerDetails.supplier_pincode
      this.supplier_email =this.invoicedetailsview.invoiceSupplierBuyerDetails.supplier_email
      this.supplier_address1 =this.invoicedetailsview.invoiceSupplierBuyerDetails.supplier_address1
      this.supplier_address2 =this.invoicedetailsview.invoiceSupplierBuyerDetails.supplier_address2
      this.billing_gstin = this.invoicedetailsview.invoiceSupplierBuyerDetails.billing_gstin
      this.billing_legal_name = this.invoicedetailsview.invoiceSupplierBuyerDetails.billing_legal_name
      this.billing_trade_name = this.invoicedetailsview.invoiceSupplierBuyerDetails.billing_trade_name
      this.billing_location = this.invoicedetailsview.invoiceSupplierBuyerDetails.billing_location
      this.billing_pincode = this.invoicedetailsview.invoiceSupplierBuyerDetails.billing_pincode
      this.billing_email = this.invoicedetailsview.invoiceSupplierBuyerDetails.billing_email
      this.billing_address1 = this.invoicedetailsview.invoiceSupplierBuyerDetails.billing_address1
      this.billing_address2 = this.invoicedetailsview.invoiceSupplierBuyerDetails.billing_address2
    })
  }

}
