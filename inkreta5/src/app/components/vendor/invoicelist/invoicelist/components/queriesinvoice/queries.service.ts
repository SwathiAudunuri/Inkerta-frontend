import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor(private store:Store) { }
  loading:any=false
  loadqueries= new BehaviorSubject<boolean>(false)
  invoicelistdetails:any
}
