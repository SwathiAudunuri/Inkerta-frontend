import { I } from '@angular/cdk/keycodes';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabGroup } from '@angular/material/tabs';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Constants } from 'src/app/constants/constants';
import { getInvoiceListHistory } from '../../../Actions/invoicelisthistory.actions';
import { HistoryState } from '../../../Selectors/invoice.selector';
// import { getHistoryinvoicelist } from '../../../Selectors/invoice.selector';
import { InvoiceInlineComponent } from '../invoice-inline/invoice-inline.component';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
export interface PeriodicElement {
  status: string;
  date: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {status: 'PAID', date: '24-08-21', description: 'invoice was paid in full'},
  {status: 'OVERDUE', date: '20-08-21', description: 'A late payment reminder was sent to your client'},
  {status: 'PARTIAL', date: '18-08-21', description: 'A payment was received'},
  {status: 'VIEWED', date: '15-08-21', description: 'Your client viewed the invoicce'},
  {status: 'SENT', date: '10-08-21', description: 'invoice sent to your client'},
  {status: 'DRAFT', date: '09-08-21', description: 'invoice was created'},
];
@Component({
  selector: 'app-invoice-history',
  templateUrl: './invoice-history.component.html',
  styleUrls: ['./invoice-history.component.css']
})
export class InvoiceHistoryComponent implements OnInit {
  invoicelistdetails: any;
  loadhistory= new BehaviorSubject<boolean>(false)
  @ViewChild('print', {static: false}) tab!: InvoiceInlineComponent;
  @Input() index:any;
  status:any
  hisloading: any;
  service: any;
  service1: any;
  historydata: any=[];

  @Input() external:any;
  constructor(private store:Store,public unpaid:UnpaidService) { }

  ngOnInit(): void {
  this.service = this.unpaid.changetab.subscribe(()=>{
    if(this.unpaid.tab===this.index){

      if(this.external){
        //new
        var url = Constants.ExternalCustInvoiceServiceHistory + this.unpaid.ref
        this.store.dispatch(getInvoiceListHistory({url:url}))
      }
      else{
        var url = Constants.VenInvoiceServiceHistory + this.unpaid.ref
        this.store.dispatch(getInvoiceListHistory({url:url}))
      }

    }
  })
    this.getdata()
  }
  displayedColumns: string[] = ['Action', 'ActionDate','ActionBy', 'Comments'];
  private data = new BehaviorSubject<any[]>([]);
   dataSource:any;  
  getdata(){
    this.service1 = this.unpaid.loadhistory.subscribe((l)=>{
    if(this.unpaid.tab===this.index){
    // //console.warn(this.tab)
    this.dataSource=[]
    if(this.external){
      //new
      var url = Constants.ExternalCustInvoiceServiceHistory + this.unpaid.ref
      this.store.dispatch(getInvoiceListHistory({url:url}))
    }
    else{
      var url = Constants.VenInvoiceServiceHistory + this.unpaid.ref
      this.store.dispatch(getInvoiceListHistory({url:url}))
    }
    // this.store.dispatch(getInvoiceListHistory({doc_refid : l}))
    this.loadhistory.next(true)
    //console.warn(l)
    }
    })
    this.loadhistory.subscribe(()=>{
      // .select(getHistoryinvoicelist)
      this.store.select(HistoryState).subscribe((data:any)=>{
        // //console.log(data.length)

        this.hisloading = data.loading
        if(data?.history){
        if(data.history.results){
          // //console.log("zero")
          if(data.history.results.length === 0){
          this.status = false
          }
          else{
            
          this.status = true
          this.invoicelistdetails=data.history.results
          // //console.log(this.invoicelistdetails)
          // this.invoicelistdetails=this.invoicelistdetails.customerinvoicelisthistory.results
            this.historydata = this.invoicelistdetails
         this.data.next(this.invoicelistdetails)
              
         this.dataSource=this.alter()
         //this.dataSource = (this.invoicelistdetails);
         this.loadhistory.complete()
         //  this.data.complete()
         
          }
        }
      }
        
        
      })
    // this.store.subscribe((data:any)=>{
    //   // //console.log(data.length)
    //   if(data.customerinvoicelisthistory.results.length === 0){
    //     // //console.log("zero")
    //     this.status = false
    //   }
    //   else{
    //     this.status = true
    //     this.invoicelistdetails=data.customerinvoicelisthistory.results
    //     //console.log(this.invoicelistdetails)
    //     // this.invoicelistdetails=this.invoicelistdetails.customerinvoicelisthistory.results
     
    //    this.data.next(this.invoicelistdetails)
            
    //    this.dataSource=this.alter()
    //    //this.dataSource = (this.invoicelistdetails);
    //    this.loadhistory.complete()
    //  //  this.data.complete()
    //   }
      
      
    //   })
    })
  

  
  }
  alter(){
    return (this.data.asObservable())
  }
  ngOnDestroy(){
    this.service.unsubscribe()
    this.service1.unsubscribe()
  }

}
