import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomrolesService {

  constructor() { }
  loadrolessidenav= new BehaviorSubject<any>(null)
  newrole= new BehaviorSubject<boolean>(false)
  arrow= new BehaviorSubject<boolean>(true)

  error = new BehaviorSubject<any>(null)

  table = new BehaviorSubject<any>(null)


}
