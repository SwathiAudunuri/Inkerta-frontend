import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  securityToken: any;
  constructor(private http:HttpClient,private store:Store) { }
  getAllRecords(value:any) :Observable<any> {
    // //console.log(value)
    return this.http.get<any>(value.url)
    // .pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     console.error(error);
    //     return throwError(error);
    //   })
    // ); 
  }

  postAllRecords(value:any) :Observable<any> {
    return this.http.post<any>(value.url,value.data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    ); 
  }

  putAllRecords(value:any) :Observable<any> {
    return this.http.put<any>(value.url,value.data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    ); 
  }
}
