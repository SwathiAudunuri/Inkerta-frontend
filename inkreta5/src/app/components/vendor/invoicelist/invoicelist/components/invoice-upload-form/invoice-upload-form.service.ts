import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
    providedIn: 'root'
  })
  export class InvoiceUploadService {
  
    constructor() { }
    email= new BehaviorSubject<any>(null)
    recepient= new BehaviorSubject<any>(null)
    existmail = new BehaviorSubject<any>(null)
  }