import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaidService {

  constructor(private store:Store) { }
  loading:any=false
  loadpaid= new BehaviorSubject<boolean>(false)
  invoicelistdetails:any
}
