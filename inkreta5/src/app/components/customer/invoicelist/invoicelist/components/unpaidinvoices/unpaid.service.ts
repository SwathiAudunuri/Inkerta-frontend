import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnpaidService {

  constructor(private store:Store) { }
  loading:any=false
  loadunpaid= new BehaviorSubject<boolean>(false)
  loadqrcode= new BehaviorSubject<boolean>(false)
  loaderp= new BehaviorSubject<boolean>(false)
  invoicelistdetails:any
  ref:any
  loadhistory=new BehaviorSubject<any>(null)
  loadattachments=new BehaviorSubject<any>(null)
  loadpdf=new BehaviorSubject<any>(null)
  loadquery=new BehaviorSubject<any>(null)
  selectedIndex=new BehaviorSubject<any>(0)
fetchforinvoice=new BehaviorSubject<any>(null)
  // loadqrcode = new BehaviorSubject<string>("data")

  loadsupportattachments=new BehaviorSubject<any>(null)
 loadcomments=new BehaviorSubject<any>(null)

  detailstab = new FormControl(0);
  tab:any=null
  tabs:any=[]
  changetab=new BehaviorSubject<any>(null)

  invoicedetails=new BehaviorSubject<any>(null)

  status=new BehaviorSubject<any>(null)

  arrow= new BehaviorSubject<boolean>(true)

  myinbox:any= false
  customactionname=new BehaviorSubject<any>(null)
  forwarduserid=new BehaviorSubject<any>(null)
  // selected = new FormControl(1);
  // Loaded(){
  //   this.store.subscribe(data=>{
  //     //console.log("----------------")
  //     this.invoicelistdetails=data
     
  //       this.invoicelistdetails=this.invoicelistdetails.customerinvoicedetails.results

      
  //    // //console.log(this.invoicelistdetails.invoicedetails.results)
  //      //this.invoicelistdetails=this.invoicelistdetails.invoicelistdetails.results

  //     // //console.log(this.invoicelistdetails)
       
     
  //   })

  
 // }
 //external sidenav
  externalinvoicedetails=new BehaviorSubject<any>(null)
  external=new BehaviorSubject<any>(null)


  sendemail=new BehaviorSubject<any>(null)
  sendrecepient=new BehaviorSubject<any>(null)
}
