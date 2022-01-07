import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getcustomerinvoicelistdetails } from 'src/app/components/customer/invoicelist/Selectors/invoice.selector';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  invoicedetails: any;
  invoicedetailsview: any;
  payee_name: any;
  payee_financial_account: any;
  modeofpayment: any;
  credit_transfer: any;
  payment_due: any;
  creditdays: any;
  paid_amount: any;
  payment_instruction: any;
  payment_terms: any;

  constructor(public store:Store) { }

  ngOnInit(): void {
    this.store.select(getcustomerinvoicelistdetails).subscribe(data=>{
      this.invoicedetails=data.invoicelist.results
      this.invoicedetailsview=this.invoicedetails
      this.payee_name =this.invoicedetailsview.invoiceSellerPaymentDetails.payee_name
      this.payee_financial_account =this.invoicedetailsview.invoiceSellerPaymentDetails.payee_financial_account
      this.modeofpayment =this.invoicedetailsview.invoiceSellerPaymentDetails.modeofpayment
      this.credit_transfer =this.invoicedetailsview.invoiceSellerPaymentDetails.credit_transfer
      this.creditdays =this.invoicedetailsview.invoiceSellerPaymentDetails.creditdays
      this.payment_due =this.invoicedetailsview.invoiceSellerPaymentDetails.payment_due
      this.paid_amount =this.invoicedetailsview.invoiceSellerPaymentDetails.paid_amount
      this.payment_terms =this.invoicedetailsview.invoiceSellerPaymentDetails.payment_terms
      this.payment_instruction =this.invoicedetailsview.invoiceSellerPaymentDetails.payment_instruction
    })
  }

}
