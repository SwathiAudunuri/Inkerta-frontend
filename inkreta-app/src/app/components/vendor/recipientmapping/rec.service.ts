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

  
  todoList:any
  todo(data:any){
    var jsonArray1 = data
    // var jsonArray2 = {
    //   createdBy:'000012','flag': true,'status': 'Inprogress','action':'','comments':'','dueDate':'2021-06-10'}

    // var merged = Object.assign(jsonArray1, jsonArray2);
    // console.log(merged)
    this._http.post(Constants.RECIPIENT_API_END_URL,jsonArray1).subscribe(async res=>{
      console.log(res)

    })
  }
 
public getid(){
 return this._http.get(Constants.RECIPIENTID_API_END_URL)
}

public getGstin(){
  return this._http.get(Constants.GSTIN_MAPPING)

}
getCurrentData(recipientId: any){
  console.log(recipientId)
  return this._http.get(Constants.RECIPIENT_API_END_URL+"/"+recipientId)
}

updateRec(recipientId: any, data :any){
  const URL=Constants.RECIPIENT_API_END_URL+"/"+recipientId
  console.log(recipientId)
  console.log(URL)
this._http.put<any>(URL,data).subscribe( async re=>{
    console.log(re)
  })
}

deleteRec(recipientId: any){
  const Url=Constants.RECIPIENT_API_END_URL+"/"+recipientId
  console.log(Url)
  console.log(recipientId)
  return this._http.delete(Constants.RECIPIENT_API_END_URL+"/"+recipientId)
}
changeStatusActive(recipientId: any){
  const Url=Constants.RECIPIENTACTIVE_API_END_URL+"/"+recipientId
  console.log(Url)
  console.log(recipientId)
  return this._http.put(Constants.RECIPIENTACTIVE_API_END_URL+"/"+recipientId,{})
}

changeStatusInactive(recipientId:any){
  const Url=Constants.RECIPIENTINACTIVE_API_END_URL+"/"+recipientId
  console.log(Url)
  console.log(recipientId)
  return this._http.put(Constants.RECIPIENTINACTIVE_API_END_URL+"/"+recipientId,{})
}

}







