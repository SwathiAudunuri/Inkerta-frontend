import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { InvoiceListState } from '../../invoicelist/Reducers/invoicelist.reducers';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { getcustomerinvoicelistdetails } from '../../invoicelist/Selectors/invoice.selector';

@Component({
  selector: 'app-invoicedetails',
  templateUrl: './invoicedetails.component.html',
  styleUrls: ['./invoicedetails.component.css']
})
export class InvoicedetailsComponent implements OnInit {
  invoicedetails: any;
  invoicedetailsview: any;
  invoicenum: any;
  irn: any;
  invoice_type_code: any;
  invoicedate: any;
  invoice_currency_code: any;

  constructor(private store:Store,private route: ActivatedRoute,public dialogRef: MatDialogRef<InvoicedetailsComponent>) { }
  // invoicelist=this.store.select('customerinvoicelist')
  id:any=''
  data:any=[]
  active=1
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // //console.log(this.id)

   this.store.select(getcustomerinvoicelistdetails).subscribe(data=>{
    
    this.invoicedetails=data.invoicelist.results
    
    this.invoicedetailsview=this.invoicedetails
    this.invoicenum =this.invoicedetailsview.invoiceDetails.invoicenum
    this.irn = this.invoicedetailsview.invoiceDetails.irn
    this.invoice_type_code=this.invoicedetailsview.invoiceDetails.invoice_type_code
    this.invoicedate = this.invoicedetailsview.invoiceDetails.invoicedate
    this.invoice_currency_code =this.invoicedetailsview.invoiceDetails.invoice_currency_code
    // //console.log(this.invoicedetailsview)
   })
  }
  close(){
    this.dialogRef.close();
  }
  

}
