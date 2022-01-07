import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store,private http:HttpClient,) { }
  // BASE_URL  = "http://172.16.6.25:8080/eInvoiceServices/api/"
  //BASE_URL="http://183.83.219.159:7001/eInvoiceServices/api/"
 BASE_URL="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/"
//  BASE_URL = "http://localhost:8080/api/"

  TODO = this.BASE_URL + "todo"
  todoList:any
  user:any
  todo(data:any):Observable<any>{
    
    this.store.subscribe(res=>{
      this.user=res;
      this.user=this.user.loginReducer.user.user
      //console.log(this.user)
    })
    var jsonArray3={"createdBy":this.user}
    var jsonArray1 = data
    var jsonArray2 = {'status': 'Inprogress','action':'','comments':'',flag:true,
  	"taskActivities": [
      {
        "action": " Creating new Task",
        "comments": "",
        "action_on":''
      }
    ]
    }
    var merged = Object.assign(jsonArray1, jsonArray2,jsonArray3);
    //console.log(merged)
    return ( this.http.post<any>(this.TODO,merged).pipe(map(async res=>{
    //  await console.log(res)
     return res
    })))
    }
  
  getTodoList(){
  
    const URL=this.TODO +"/status/"+"Inprogress"
    return this.http.get(URL)
  }
  updateTodo(data:any,taskRefId:any){
    // var jsonArray1=data;
    // var merge=Object.assign(jsonArray1, jsonArray2)
    // //console.log(merge)
    // const URL = "http://localhost:8080/api/todo"+"/"+taskRefId
    const URL=this.TODO +"/"+taskRefId
   //console.log(taskRefId)
   //console.log(URL)
     this.http.put<any>(URL,data).subscribe(res=>{
      //console.log(res)
    })
  }
  delete(data:any,taskRefId:any){
     // const URL=this.TODO +"/"+"status"

    const URL=this.TODO 
    //const URL=this.TODO +"/"+"flag"
    const data1=data
    data1.status="Deleted"
    //console.log(data1)
    //console.log(URL)

    this.http.post<any>(URL,data1).subscribe(res=>{
      //console.log(res)
    })
  }

getCompletedList(){
  const URL=this.TODO +"/status/"+"Completed"
  return this.http.get(URL)
}
getDeletedList(){
  const URL=this.TODO +"/status/"+"Deleted"
  return this.http.get(URL)
}
getStarredList(){
  const URL=this.TODO +"/flag/"+"true"
  return this.http.get(URL)
}
getPriorityList(){
  const URL=this.TODO +"/priority/"+"medium"
  return this.http.get(URL)
}

getAlltodoComments(taskRefId:any){
  // const Url="http://localhost:8080/api/todo/comments"+"/"+319
  //console.log("service",taskRefId)
  // const Url="http://localhost:8080/api/todo/comments"+"/"+taskRefId
  const Url = Constants.TODO_COMMENTS +"/"+taskRefId
  //console.log(Url)
  return this.http.get(Url)
}

changeStatusComplete(taskRefId:any)
{
  // const Url="http://localhost:8080/api/todo/status_change"+"/"+taskRefId +"/completed"
 const Url=  Constants.TODO_STATUS_COMPLETE +"/"+taskRefId +"/completed"
  //console.log(Url)
  //console.log(taskRefId)
  return this.http.put(Url,{})
}

changeStatusDelete(taskRefId:any)
{
  // const Url="http://localhost:8080/api/todo/status_change"+"/"+taskRefId +"/deleted"
  const Url= Constants.TODO_STATUS_DELETE+"/"+taskRefId +"/deleted"
  //console.log(Url)
  //console.log(taskRefId)
  return this.http.put(Url,{})
}
}
