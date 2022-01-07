import { AuthService } from "./auth/auth.service";
import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Store  } from "@ngrx/store";
import { map,take,exhaustMap, catchError, finalize } from 'rxjs/operators';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import { getToken } from "./state/auth.selector"
import { LoadingService } from "./loading/loading.service";


  @Injectable({
    providedIn: 'root'
  })
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService,private store: Store,private http:HttpClient,private loader : LoadingService) {
   //   //console.log(this.auth.getToken())
  }
  data1:any
  user:any
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // Get the auth token from the service.
   // const authToken = this.auth.getToken();


    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.

    this.store.pipe(take(1),).subscribe(s => {
      this.data1=s
      // //console.log(s)
      if(s){
      this.user=(this.data1.loginReducer.user.tokens)
      }
    //this.user=(this.data1.user.user.tokens)
   //  //console.log(this.user)
   })
   if(!this.user){
    return next.handle(req)
//     this.loader.show();
// .pipe(
//       finalize(()=>{
//         this.loader.hide();
//       })
//     )
   }
  
  
   
    const authReq = req.clone({
     // headers: req.headers.set('Authorization', 'Bearer')

     headers: req.headers.set('Authorization', `Bearer ${this.user}`)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq)
    .pipe(catchError((error:HttpErrorResponse)=>{
      let errorMsg = '';

      if(error.error instanceof ErrorEvent){
        //console.log('this is client side error');
        errorMsg = `Error: ${error.error.message}`;

      }
      else{
        //console.log('this is server side error');
        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        if(error.status===401 || error.status===403){
          // //console.log(this.user)
         localStorage.clear()
         this.auth.logout()
         const params = {
          securityToken: this.user
        }
        const options = {
          headers: {
            "Content-Type": "application/json"
          }
        }

        // //console.log(params)
        // //console.log(options)
        this.auth.refresh(params,options) 
          //this.http.post("http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/refresh_token", params, options).subscribe((result)=>{
         // //console.log(result)
         // })
        
        }
      }
      // //console.log(errorMsg);
      return throwError(errorMsg);
    }));
  }
}

export const tokenInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
  ];