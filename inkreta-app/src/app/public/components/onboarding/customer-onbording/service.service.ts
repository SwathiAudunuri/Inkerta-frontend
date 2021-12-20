import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http : HttpClient , private _store : Store) { }
  public url =""
  invokeApi(props:any):Observable<any>{
    console.log(props.gstin.gstin)
    this.url = "http://183.83.219.159:7001/onboarding/gstn/verified/" + props.gstin.gstin;
    return this._http.get<any>(this.url)
    .pipe(catchError(this.errorHandler2))
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "invalid")
  }
  emailinvoke(props:any):Observable<any>{
      this.url = "http://183.83.219.159:7001/onboarding/notification/send/email/otp ";
      return this._http.post<any>(this.url,props.data)
  }
  errorHandler1(error:HttpErrorResponse){
    return throwError(error.message || "invalid")
  }
  emailotpinvoke(props:any):Observable<any>{
      console.log("email service")
      console.log(props.data1)
      this.url = "http://183.83.219.159:7001/onboarding/notification/verify/email/otp";
      return this._http.post<any>(this.url,props.data1)
      .pipe(catchError(this.errorHandler2))
  }
  errorHandler2(error:HttpErrorResponse){
    return throwError(error.message || "invalid")
  }
  saveonbordinginvoke(data:any):Observable<any>{
  
      console.log("email service ------")
      console.log(data.save)
      const object=data.save
      // this.url = "http://183.83.219.159:7001/onboarding/gstn/add/gst/details";
      this.url="http://183.83.219.159:7001/onboarding/gstn/add/gst/details"
      
      return this._http.post<any>("http://183.83.219.159:7001/onboarding/gstn/add/gst/details",object)
      // .pipe(catchError(this.errorHandler3))
  }
  errorHandler3(error:HttpErrorResponse){
    return throwError(error.message || "invalid")
  }
}
