import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class OnboardService {

    verifydoc=new BehaviorSubject<any>(null)
    base64=new BehaviorSubject<any>(null)

  }