import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExternalInvoiceDetails, ExternalInvoiceDetailsInitialvalues } from '../../../Actions/externalinvoicelistdetails.actions';
import { externalinvoicedeatilsState } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

@Component({
  selector: 'app-external-invoice-details',
  templateUrl: './external-invoice-details.component.html',
  styleUrls: ['./external-invoice-details.component.css']
})
export class ExternalInvoiceDetailsComponent implements OnInit {
  @Input() index: any;
  detailsloading: any;
  service4: any;
  service: any;
  service1: any;
  invoicedata: any;
  duedate: any;
  constructor(private store:Store,public unpaid:UnpaidService) { }

  ngOnInit(){
    this.store.dispatch(ExternalInvoiceDetailsInitialvalues())
    //console.log("in external init")
    this.service4 = this.store.select(externalinvoicedeatilsState).subscribe((data)=>{
      this.detailsloading = data.loading
      //console.log(data)
      if(data.invoicelist){
        if(data.invoicelist?.hasError){
    
        }
        else{
          //console.log("working")
          this.invoicedata = data.invoicelist?.results
           this.duedate = this.add_daete(parseInt(this.invoicedata?.creditdays), this.invoicedata?.invoicedate)
        }
      }
    })
    this.service = this.unpaid.changetab.subscribe((value)=>{
      if(value === 0){
        
      if(this.unpaid.tab===this.index )
      {
        //console.log("Hi changetab")
        this.store.dispatch(ExternalInvoiceDetails({doc_refid : this.unpaid.ref}))
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
  getdata(){
    this.service1 = this.unpaid.externalinvoicedetails.subscribe((l)=>{
      if(l){
        //console.log(this.unpaid.tab)
        //console.log(this.index)
        if(this.unpaid.tab===this.index){
          //console.log("Hi normal")
        this.store.dispatch(ExternalInvoiceDetails({doc_refid : l}))
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
