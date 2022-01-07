import { Component, ElementRef, OnInit,Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee,faPaintRoller,fas,faPalette,faFileAlt,faFileInvoiceDollar,faHistory,faDraftingCompass,faFileContract} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
import { getMetrics, nullMetrics } from '../Actions/metrics.action';
import { getMetricsState } from '../Selectors/dashboard.selector';
import {data} from "./data"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data1: any;
  Late0130days: any=0;
  Late3190days: any=0;
  countLate0130days: any=0;
  countLate3190days: any=0;

  constructor( private spinner: NgxSpinnerService, private store:Store,private renderer: Renderer2,private router:Router) { }
  faFileAlt:any=faFileAlt
  faFileInvoiceDollar:any=faFileInvoiceDollar
  faHistory:any=faHistory
  faDraftingCompass:any=faDraftingCompass
  faFileContract:any =faFileContract
  data:any;
  OpenInvoices:any
  InvoicesOverdue:any
  countOpenInvoices:any=0;
  countInvoicesOverdue:any=0;
  Late3160days:any;
  countLate3160days:any=0
  Late6090days:any
  countLate6090days:any=0
  Late90days:any
  countLate90days:any=0
  loadmetric= new BehaviorSubject<boolean>(false)

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
this.store.dispatch(nullMetrics())
 this.store.dispatch(getMetrics())

this.getData()
this.data=data
// this.OpenInvoices=data["Open Invoices"]
// this.InvoicesOverdue=data["Invoices Overdue"]
// this.Late3160days=data["Late 31-60 days"]
//this.Late6090days=data["Late 60-90 days"]
//this.Late90days=data["Late > 90 days"]




// for(var x of this.Late6090days ){
//   //console.log(x.NoOfInvoices)
//   this.countLate6090days=this.countLate6090days + x.NoOfInvoices
// }
// for(var x of this.Late90days ){
//   //console.log(x.NoOfInvoices)
//   this.countLate90days=this.countLate90days + x.NoOfInvoices
// }
    // const body = document.querySelector('.main_body')
    // this.renderer.setStyle(body,'background-color','red')
  }
  getData(){
    this.store.select(getMetricsState).subscribe((data:any)=>{
      
      if(data.result){
      this.OpenInvoices=data.result.results.unpaidtotals[0]  
      
      this.InvoicesOverdue=data.result.results.overduetotals[0]
      this.Late0130days=data.result.results.overduelate01to30daystotals[0]
           this.Late3190days=data.result.results.overduelate31to90daystotals[0]
        this.Late90days=data.result.results.overdueover90daystotals[0]          
        
      }

    })
    // this.loadmetric.subscribe((data:any)=>{
    //   if(data){
    //   //console.warn(this.data1)
    //   }
    // }) 
  
  }
  @ViewChild('unpaid') span:any;
  ngAfterViewInit(){
    const x:ElementRef=this.span
    //console.log(this.span)
    //this.span.nativeElement.setAttribute('display', 'none');
  } 

active:any=true
c:any=10
b:any
vendors:any;
faCoffee:any = faCoffee;
// faSlidersH:any=faSlidersH;
faPaintRoller:any=faPaintRoller
faPalette:any=faPalette


routenew(){

  this.router.navigate(['app/customer_user/invoicedetails/:id'])
}
findByvendor(data:any){
//console.log(data)
  this.vendors=data.series
}

fetch(data:any){
  //console.log(data)
}
}
