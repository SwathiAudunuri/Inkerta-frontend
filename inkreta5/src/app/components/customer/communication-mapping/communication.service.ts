import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Constants } from 'src/app/constants/constants';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { outboundSerice } from './components/outbond.service';
@Injectable({
  providedIn: 'root'
})
export class RecService {

  constructor(private _http:HttpClient,public outservice :outboundSerice) { }

  public getRec():Observable<any>{
    const Url ="http://localhost:8089/eInvoiceServices/api/outboundconnectors/fetchConnectors"
    return this._http.get(Url);
  }
  // getrecgstins1():Observable<any>{
  //   // const Url="http://localhost:8080/api/recgstin"
  //   const Url="http://localhost:8081/eInvoiceServices/api/recgstin"
  //   return this._http.get(Url)
  // }
  // postAllRecords(value:any) :Observable<any> {
  //   return this.http.post<any>(value.url,value.data).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error(error);
  //       return throwError(error);
  //     })
  //   ); 
  // } 
  
  postRec1(data:any):Observable<any>{
    const Url="http://localhost:8089/eInvoiceServices/api/outboundconnectors/connectorSave"
   return this._http.post<any>(Url,data).pipe(
     catchError((error:HttpErrorResponse)=>{
       console.error(error);
       return throwError(error)
     }))
   }

   getdatabyid1(id:any):Observable<any>{
    const Url="http://localhost:8089/eInvoiceServices/api/outboundconnectors/fetchConnector"
    return this._http.get<any>(Url+"/"+id).pipe(
      catchError((error:HttpErrorResponse)=>{
        //console.log(error);
        return throwError(error)
      })
    )
   }
   updateRec1(data :any,id :any):Observable<any>{
    // const URL=Constants.RECIPIENT_API_END_URL+"/"+recipientId
    return this._http.put<any>(Constants.RECIPIENT_API_END_URL+"/"+id,data).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.error(error);
        return throwError(error)
      })
    )}

    changeStatusInactive1(id:any){
      // const Url="http://localhost:8080/api/inactiveReciepent"
      // const Url=Constants.RECIPIENTINACTIVE_API_END_URL+"/"+recipientId
      return this._http.put<any>(Constants.RECIPIENTINACTIVE_API_END_URL+"/"+id,{}).pipe(
        catchError((error:HttpErrorResponse)=>{
          console.error(error);
          return throwError(error)
  
    })
        )}


        deleteRec1(recipientId: any):Observable<any>{
          // const Url="http://localhost:8080/api/reciepientMapping"
          const Url=Constants.RECIPIENT_API_END_URL+"/"+recipientId
          //console.log(Url)
          //console.log(recipientId)
          return this._http.delete(Url+"/"+recipientId)
          // return this._http.delete(Constants.RECIPIENT_API_END_URL+"/"+recipientId)
        }
  postRec(data:any){
    this._http.post(Constants.RECIPIENT_API_END_URL,data).subscribe(async res=>{
      //console.log(res)
   })
   // const Url="http://localhost:8080/api/reciepientMapping"
 //   this._http.post(Url,data).subscribe(async res=>{
    //  //console.log(res)
 //   })
  }
 
public getid(){
 return this._http.get(Constants.RECIPIENTID_API_END_URL)
}

public getGstin(){
  return this._http.get(Constants.GSTIN_MAPPING)

}
getCurrentData(recipientId: any){
  //console.log(recipientId)
  return this._http.get(Constants.RECIPIENT_API_END_URL+"/"+recipientId)
}

updateRec(recipientId: any, data :any){
  const URL=Constants.RECIPIENT_API_END_URL+"/"+recipientId
  //console.log(recipientId)
  //console.log(URL)
this._http.put<any>(URL,data).subscribe( async re=>{
    //console.log(re)
  })
}

deleteRec(recipientId: any){
  // const Url="http://localhost:8080/api/reciepientMapping"
  const Url=Constants.RECIPIENT_API_END_URL+"/"+recipientId
  //console.log(Url)
  //console.log(recipientId)
  return this._http.delete(Url+"/"+recipientId)
  // return this._http.delete(Constants.RECIPIENT_API_END_URL+"/"+recipientId)
}
changeStatusActive(recipientId: any){
  const Url=Constants.RECIPIENTACTIVE_API_END_URL+"/"+recipientId
  //console.log(Url)
  //console.log(recipientId)
  return this._http.put(Constants.RECIPIENTACTIVE_API_END_URL+"/"+recipientId,{})
}

changeStatusInactive(recipientId:any){
  // const Url="http://localhost:8080/api/inactiveReciepent"
  const Url=Constants.RECIPIENTINACTIVE_API_END_URL+"/"+recipientId
  //console.log(Url)
  //console.log(recipientId)
  return this._http.put(Constants.RECIPIENTINACTIVE_API_END_URL+"/"+recipientId,{})
}

// getrecgstins(){
//   const Url="http://localhost:8080/api/recgstin"
//   return this._http.get(Url)
// }

getdatabyid(id:any){
  const Url="http://localhost:8089/eInvoiceServices/api/outboundconnectors/fetchConnector"+"/"+this.outservice.indexse
  //console.log(Url)
  //console.log(id)
  //console.log(this.outservice.indexse)
  return this._http.get(Url)
 }
}







