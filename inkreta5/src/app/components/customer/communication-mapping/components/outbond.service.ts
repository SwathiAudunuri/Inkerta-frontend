import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class outboundSerice {

  constructor(private store:Store) { }
  
  Title:any; 
  deliver:any
  emailAddress: any;
  description:any;
  gstins: any;
  url:any;
  userPassword: any;
  userName :any;
  emailAddressquery : any;
  deliverquery : any;
  deliveryst:any
  usersta:any;
  userquery:any;
  passwordquery:any;
  urlquery:any;
  passwordsta:any;
  urlsta:any;
emailst:any;
  index:any;
  indexse :any;

  error = new BehaviorSubject<any>(null)


//   loadunpaid= new BehaviorSubject<boolean>(false)


//   loadsupportattachments=new BehaviorSubject<any>(null)

//   detailstab = new FormControl(0);
//   tab:any
//   tabs:any=[]
//   changetab=new BehaviorSubject<any>(null)

//   invoicedetails=new BehaviorSubject<any>(null)

//   status=new BehaviorSubject<any>(null)

//   arrow= new BehaviorSubject<boolean>(true)

}
