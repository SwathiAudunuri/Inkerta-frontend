import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClosedinvfromcompanyService {

  constructor() { }
  length=new BehaviorSubject<any>(0)
}
