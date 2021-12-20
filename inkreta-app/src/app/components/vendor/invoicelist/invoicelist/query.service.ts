import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getQueryList } from '../Actions/querylist.action';
import { QueryList } from '../models/query.model';


@Injectable({
  providedIn: 'root'
})
export class QueryService {
//  private url = 'http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/query';
//private url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/invoicequeries/findbydocument_ref_id/I210331000491"
private url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/invoicequeries/gettreebydocument_ref_id/I210331000491"  
//private url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServicesNew/api/invoicequeries/gettreebydocument_ref_id/I210331000491"
constructor(private store:Store,private http: HttpClient) { }
  getAllQueries():Observable<ReadonlyArray<QueryList>> {
  //  this.store.dispatch(getQueryList())
  return this.http.get<ReadonlyArray<QueryList>>(this.url).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError(error);
    })
  );

}
getAllQuery(){
 return this.http.get(this.url)
}
}
