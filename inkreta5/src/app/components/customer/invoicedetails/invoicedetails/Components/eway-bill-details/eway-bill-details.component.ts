import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getcustomerinvoicelistdetails } from 'src/app/components/customer/invoicelist/Selectors/invoice.selector';
@Component({
  selector: 'app-eway-bill-details',
  templateUrl: './eway-bill-details.component.html',
  styleUrls: ['./eway-bill-details.component.css']
})
export class EwayBillDetailsComponent implements OnInit {
  invoicedetailsview: any;
  invoicedetails: any;

  constructor(public store:Store) { }

  ngOnInit(): void {
    this.store.select(getcustomerinvoicelistdetails).subscribe(data=>{
      this.invoicedetails=data.invoicelist.results
      this.invoicedetailsview=this.invoicedetails
    })
  }

}
