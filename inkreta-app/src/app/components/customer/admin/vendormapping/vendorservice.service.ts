import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
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
  // baseUrl: string = 'http://localhost:8080/api/vendorMapping';
  // queryUrl: string = '?Search=';

  // search(terms: Observable<string>) {
  //   return terms.pipe(debounceTime(400),
  // distinctUntilChanged(),
  // switchMap(_ => interval(50),term => this.searchEntries(term)));
  // }

  // searchEntries(term: string) {
  //   return this.httpclient
  //       .get(this.baseUrl + this.queryUrl + term)
  //       .pipe(map(res => res));
  // }




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
  //  console.log(Url)
   let accessTokenObj:any = localStorage.getItem("appUser");
  let  token:any= JSON.parse(accessTokenObj);
  console.log(token);
  console.log(token.results.partnerId);
  
   let obj={
     id:token.results.partnerId,
     searchString:value
   }
   console.log(obj);
   
   return this.httpclient.post(Constants.VENDORGSEARCH_API_END_URL,obj)
 }


  deleteVendor(mappingId: any){
  //  const Url="http://localhost:8080/api/vendorMapping"
    // console.log(Url)
    console.log(mappingId)
    return this.httpclient.delete(Constants.VENDORDELETE_API_END_URL+"/"+mappingId)
  }

  changeStatusActive(mappingId: any){
    // const Url="http://localhost:8080/api/activeVendor"
    // const Url=Constants.RECIPIENTACTIVE_API_END_URL+"/"+recipientId
    // console.log(Url)
    console.log(mappingId)
    return this.httpclient.put(Constants.VENDORACTIVE_API_END_URL+"/"+mappingId,{})
  }

  changeStatusInactive(mappingId:any){
    // const Url="http://localhost:8080/api/inactiveVendor"
    // console.log(Url)
    console.log(mappingId)
    return this.httpclient.put(Constants.VENDORINACTIVE_API_END_URL+"/"+mappingId,{})
  }

  getCurrentData(customerPartnerId:any){
    console.log(customerPartnerId)
    // return this.httpclient.get(Constants.)
  }
}
