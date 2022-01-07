import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constants } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CustomerOnboardingService {

  constructor(private _http : HttpClient , private _store : Store) { }
  updateddate= new BehaviorSubject<any>(null)

  public url =""
  invokeApi(props:any):Observable<any>{
    //console.log(props.gstin.gstin)
    // this.url = "http://183.83.219.159:7001/onboarding/gstn/verified/" + props.gstin.gstin;
    // this.url = "https://164.52.217.12:8443/onboarding/gstn/verified/" + props.gstin.gstin;
    this.url = Constants.GSTIN_DETAILS_SERVICE1 + props.gstin.gstin;
    return this._http.get<any>(this.url)
    .pipe(catchError(this.errorHandler2))
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "invalid")
  }
  emailinvoke(props:any):Observable<any>{
      // this.url = "https://164.52.217.12:8443/onboarding/notification/send/email/otp ";
      this.url = Constants.SEND_EMAIL_OTP1
      return this._http.post<any>(this.url,props.data)
  }
  errorHandler1(error:HttpErrorResponse){
    return throwError(error.message || "invalid")
  }
  emailotpinvoke(props:any):Observable<any>{
      //console.log("email service")
      //console.log(props.data1)
      // this.url = "https://164.52.217.12:8443/onboarding/notification/verify/email/otp";
      this.url = Constants.VERIFY_EMAIL_OTP1
      return this._http.post<any>(this.url,props.data1)
      .pipe(catchError(this.errorHandler2))
  }
  errorHandler2(error:HttpErrorResponse){
    return throwError(error.message || "invalid")
  }
  saveonbordinginvoke(data:any):Observable<any>{
  
      //console.log("email service ------")
      //console.log(data.save)
      const object=data.save
      // this.url = "http://183.83.219.159:7001/onboarding/gstn/add/gst/details";
      // this.url="https://164.52.217.12:8443/onboarding/gstn/add/gst/details"
      this.url = Constants.SAVE_ONBOARDING_DETAILS1
      return this._http.post<any>(this.url,object)
      // .pipe(catchError(this.errorHandler3))
  }
  errorHandler3(error:HttpErrorResponse){
    return throwError(error.message || "invalid")
  }
}
