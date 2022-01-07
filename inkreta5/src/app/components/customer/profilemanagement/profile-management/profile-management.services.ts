import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileManagementService {

  constructor(private store:Store) { }

  newdata=new BehaviorSubject<any>(null)
  message=new BehaviorSubject<any>(null)
}