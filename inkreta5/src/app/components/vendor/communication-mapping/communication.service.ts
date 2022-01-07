import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Constants } from 'src/app/constants/constants';
@Injectable({
  providedIn: 'root'
})
export class RecService {

  constructor(private _http:HttpClient) { }

  public getRec(){
    return this._http.get(Constants.RECIPIENT_API_END_URL);
  }


  postRec(data:any){
   // const Url="http://localhost:8080/api/reciepientMapping"
 //   this._http.post(Url,data).subscribe(async res=>{
    //  //console.log(res)
 //   })
     this._http.post(Constants.RECIPIENT_API_END_URL,data).subscribe(async res=>{
       //console.log(res)
    })
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

}







