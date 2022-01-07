import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InvoiceList } from '../models/invoicelist.model';
import { InvoiceListHistory } from '../models/invoicelisthistory.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerInvoiceService {
  securityToken: any;

  constructor(private http:HttpClient,private store:Store) {}
  // private url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/vendorInvoiceList"
  // private url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/customerInvoiceList"
  getAllRecords(value:any) :Observable<any> {
    // return this.http.get<ReadonlyArray<InvoiceList>>(this.url).pipe(
    return this.http.get<ReadonlyArray<InvoiceList>>(value.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
     
   }
}

@Injectable({
  providedIn: 'root'
})
export class CustomerPaidInvoiceService {
  securityToken: any;

  constructor(private http:HttpClient,private store:Store) {}
  // private url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/vendorInvoiceList"
  private url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/customerInvoiceList"
  getAllRecords() :Observable<any> {
    return this.http.get<ReadonlyArray<InvoiceList>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
     
   }
}

@Injectable({
  providedIn: 'root'
})
export class CustomerInvoiceServiceHistory {

  constructor(private http:HttpClient) {}
  private url:any;

  getAllRecords(value:any) :Observable<any> {
    this.url ="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/invoicestatustracker/getinvoicestatusdetails/"+value.doc_refid
    return this.http.get<ReadonlyArray<InvoiceListHistory>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
     
   }
}
@Injectable({
  providedIn: 'root'
})
export class CustomerInvoiceServiceDetails {

  constructor(private http:HttpClient) {}
  private url:any;
  getAllRecords(value:any) :Observable<any> {
    // //console.log(value.doc_refid)
    this.url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/getInvoiceDetails/"+value.doc_refid
    return this.http.get<ReadonlyArray<InvoiceListHistory>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
     
   }
}