import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor() { }
  message=new BehaviorSubject<any>(null)
}