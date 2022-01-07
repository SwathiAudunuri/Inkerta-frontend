import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
    providedIn: 'root'
  })
  export class onboardverificationService {
  
    constructor() { }
    status= new BehaviorSubject<any>(null)
    patnerId= new BehaviorSubject<any>(null)
    docId= new BehaviorSubject<any>(null)
    search = new BehaviorSubject<any>(null)
  }