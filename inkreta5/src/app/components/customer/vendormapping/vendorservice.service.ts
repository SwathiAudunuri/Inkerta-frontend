import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constants } from 'src/app/constants/constants';
// import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/switchMap';
// import { debounceTime } from 'rxjs/internal/operators/debounceTime';
// import {distinctUntilChanged} from 'rxjs/internal/operators/distinctUntilChanged'
// import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendorserviceService {
  constructor(private httpclient: HttpClient) { }
  getDetails1():Observable<any> {
      return this.httpclient.get(Constants.VENDORS_API_END_URL);
    }
  submitVendorDetails1(val:any):Observable<any>{
    return this.httpclient.post<any>(Constants.NEW_VENDOR_MAPPING,val).pipe(
      catchError((error: HttpErrorResponse)=>{
        ////console.log(error);
        return throwError(error)
      })
    )
    }
     getVendorDetails1():Observable<any> {
      return this.httpclient.get(Constants.ALLVENDORS_API_END_URL);
    }
    updateVendor1(data:any,mappingId:any):Observable<any>{
      //  const Url="http://localhost:8080/api/newVendorMapping"+"/"+mappingId
       const Url = Constants.NEW_VENDOR_MAPPING +"/"+mappingId
      return this.httpclient.put<any>(Url,data).pipe(
        catchError((error: HttpErrorResponse)=>{
          ////console.log(error);
          return throwError(error)
        })
      )
    }
  
    deleteVendor1(mappingId:any):Observable<any>{
      
        // ////console.log(Url)
        ////console.log(mappingId)
      return this.httpclient.delete(Constants.VENDORDELETE_API_END_URL+"/"+mappingId);
      }

      changeStatusInactive1(mappingId:any):Observable<any>{
        const Url=Constants.VENDORINACTIVE_API_END_URL
        // ////console.log(Url)
        ////console.log(mappingId)
        return this.httpclient.put(Url+"/"+mappingId,{})
      }


      changeStatusActive1(mappingId: any):Observable<any>{
        const Url=Constants.VENDORACTIVE_API_END_URL
        // const Url=Constants.RECIPIENTACTIVE_API_END_URL+"/"+recipientId
        // ////console.log(Url)
        ////console.log(mappingId)
        return this.httpclient.put(Url+"/"+mappingId,{})
      }

  public getDetails() {
  //  const  URL="http://localhost:8080/api/"
    // return this.httpclient.get(URL+"mappedVendors")
    return this.httpclient.get(Constants.VENDORS_API_END_URL);
  }
  public getVendorDetails() {
    return this.httpclient.get(Constants.ALLVENDORS_API_END_URL);
  }
  public submitVendorDetails(val:any){
    return this.httpclient.post(Constants.NEW_VENDOR_MAPPING,val);
  }
 
 searchVendor(value:any){
  //  const Url="http://localhost:8080/api/vendorMapping/Search"
  //  ////console.log(Url)
   let accessTokenObj:any = localStorage.getItem("user");
  let  token:any= JSON.parse(accessTokenObj);
  ////console.log(token);
  ////console.log(token.results.partnerId);
  
   let obj={
     id:token.results.partnerId,
     searchString:value
   }
   ////console.log(obj);
   
   return this.httpclient.post(Constants.VENDORGSEARCH_API_END_URL,obj)
 }

updateVendor(mappingId:any,data:any){
  // const Url="http://localhost:8080/api/newVendorMapping"+"/"+mappingId
  const Url = Constants.NEW_VENDOR_MAPPING +"/"+mappingId
  ////console.log(Url)
  ////console.log(mappingId)
  this.httpclient.put<any>(Url,data).subscribe(async re=>{
    ////console.log(re)
  })
}
  deleteVendor(mappingId: any){
  //  const Url="http://localhost:8080/api/vendorMapping"
    // ////console.log(Url)
    ////console.log(mappingId)
    return this.httpclient.delete(Constants.VENDORDELETE_API_END_URL+"/"+mappingId)
  }

  changeStatusActive(mappingId: any){
    // const Url="http://localhost:8080/api/activeVendor"
    // const Url=Constants.RECIPIENTACTIVE_API_END_URL+"/"+recipientId
    // ////console.log(Url)
    ////console.log(mappingId)
    return this.httpclient.put(Constants.VENDORACTIVE_API_END_URL+"/"+mappingId,{})
  }

  changeStatusInactive(mappingId:any){
    // const Url="http://localhost:8080/api/inactiveVendor"
    // ////console.log(Url)
    ////console.log(mappingId)
    return this.httpclient.put(Constants.VENDORINACTIVE_API_END_URL+"/"+mappingId,{})
  }
  // public getDetailsAudit(mappingId :any) {
    //  const  URL="http://localhost:8080/api/mappedVendors"+"/"+mappingId
    //   // return this.httpclient.get(URL+"mappedVendors")
    //   return this.httpclient.get(URL);
    // }

    public getDetailsAudit(mappingId :any) {
      //  const  URL="http://localhost:8080/api/mappedVendors"+"/"+mappingId
        const URL = Constants.VENDORS_API_END_URL+"/"+mappingId
        return this.httpclient.get(URL);
      }

  getCurrentData(customerPartnerId:any){
    ////console.log(customerPartnerId)
    // return this.httpclient.get(Constants.)
  }
}
