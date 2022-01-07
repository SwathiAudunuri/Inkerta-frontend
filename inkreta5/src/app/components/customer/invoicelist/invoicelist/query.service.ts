import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getcustomerQueryList } from '../Actions/querylist.action';
import { FileUploadService } from '../file-upload.service';
import { QueryList } from '../models/query.model';
import { QuerydialogComponent } from './components/querydialog/querydialog.component';
import { Constants } from "../../../../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  ref:any;
  reply:boolean=false;
  attachmentDetails:any;
  docId:any=null;
  flag= new BehaviorSubject<boolean>(false)

//  private url = 'http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/query';
//private url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/invoicequeries/findbydocument_ref_id/I210331000491"
//private queryurl="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/invoicequeries/gettreebydocument_ref_id/"  
//private queryurl="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServicesNew/api/invoicequeries/gettreebydocument_ref_id/I210331000491"
constructor(private store:Store,private http: HttpClient,private fileservice:FileUploadService) { }
  getAllQueries(ref:any):Observable<ReadonlyArray<QueryList>> {
 
  //  //console.log(ref[0]) 
  var temp=Constants.QUERYLIST+ref.ref
  //this.ref="I210324000356"

  return this.http.get<ReadonlyArray<QueryList>>(temp).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError(error);
    })
  );

}
// getAllQuery(){
//  return this.http.get(this.queryurl)
// }
SendResponse(data:any,ref:any){
  // //console.log(data)
  // //console.log(ref)
  // //console.log(this.ref)

  const formData = new FormData(); 
  var newobj        
  // Store form name as "file" with file data
  formData.append("file", this.fileservice.file);
  
 

  if(this.reply){
   newobj={
    "queryRefId":"",
    "subject":data.subject,
    "documentRefId":this.ref,
  //  "documentRefId":"I210323000346",

    "queryType":data.queryType,
    "queryText":data.queryText,
   "queryFrom":ref.queryFrom,
    "createdBy":ref.createdBy,
    "createdDate":ref.createdDate,
    "parentQueryRefId":ref.queryRefId,
    "attachmentDetails":this.attachmentDetails
 
  }

}
if(this.reply===false){
  // //console.log("in new")

newobj={
	"queryRefId":"",
	"documentRefId":this.ref,
	"queryType":data.queryType,
	"queryText":data.queryText,
  "queryFrom":"Vendor",
    "createdBy":"000012",
    "createdDate":"2020-07-17T00:00:00.000-05:00",
	"isDispatched":false,
	"dispatchMode":"mail",
	"dispatchedOn":"2020-07-17T00:00:00.000-05:00",
  "attachmentDetails":this.attachmentDetails,
	"parentQueryRefId":"",
    "subject": data.subject
	}


}
//  const url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/invoicequeries/save"
   //console.log(newobj)



this.http.post(Constants.QUERYSAVE,newobj).subscribe(data=>{
   //console.log(data)
})
}
getAttachment(data:any){
this.attachmentDetails=data
this.flag.next(true)
}
getDocId(data:any){
  this.docId=data
  }
}
