import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomactionService {

  constructor(private http:HttpClient) { }

  loadactionssidenav= new BehaviorSubject<string>('done')
  newaction= new BehaviorSubject<boolean>(false)
  arrow= new BehaviorSubject<boolean>(true)
  error = new BehaviorSubject<any>(null)

  postrecords(data:any,url:any):Observable<any>{
    return this.http.post<any>(url,data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
    return of(null)
  }

}
