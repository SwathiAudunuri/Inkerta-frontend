import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManaghementService {

  constructor(private store:Store) { }

  table_search=new BehaviorSubject<any>(null)
  userId=new BehaviorSubject<any>(null)
  showmaprole=new BehaviorSubject<any>(false)
  changetab=new BehaviorSubject<any>(false)
  tab:any=0
  message=new BehaviorSubject<any>("")

  partnerId=new BehaviorSubject<any>(null)
}