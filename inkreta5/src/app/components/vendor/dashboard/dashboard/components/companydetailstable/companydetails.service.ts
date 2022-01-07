import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanydetailsService {

  constructor() { }
  length=new BehaviorSubject<any>(0)
  
}
