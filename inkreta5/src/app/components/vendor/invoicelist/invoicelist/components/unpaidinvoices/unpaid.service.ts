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
  invoicelistdetails:any
  ref:any
  loadhistory=new BehaviorSubject<any>(null)
  loadattachments=new BehaviorSubject<any>(null)
  loadpdf=new BehaviorSubject<any>(null)
  loadquery=new BehaviorSubject<any>(null)
  loadqrcode = new BehaviorSubject<any>(null)
  loadcomments=new BehaviorSubject<any>(null)

  myinbox=new BehaviorSubject<any>(null)

  external=new BehaviorSubject<any>(null)

  loadsupportattachments=new BehaviorSubject<any>(null)

  detailstab = new FormControl(0);
  tab:number=0
  changetab=new BehaviorSubject<any>(null)

  invoicedetails=new BehaviorSubject<any>(null)

  arrow= new BehaviorSubject<boolean>(true)

  status=new BehaviorSubject<any>(null)
 


  //external sidenav
  externalinvoicedetails=new BehaviorSubject<any>(null)


  sendemail=new BehaviorSubject<any>(null)
  sendrecepient=new BehaviorSubject<any>(null)

  previous_doc_ref_id = new BehaviorSubject<any>(null)
}
