import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }

  getStatus(ref:any) :Observable<any>{
    const url=Constants.Updatestatus
  //  const  url="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/invoicestatus/getstatusbydocument_ref_id/"
    const updatestatusurl=url+ref
    //console.log(updatestatusurl)
    return this.http.get(updatestatusurl)
   }
  //  postStatus(data:any) :Observable<any>{
  //    //console.log(data)
  //    const updateurl="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/invoicestatustracker/statussave"
     
  //    return this.http.post(updateurl,{data})


  //  }
  postStatus(data:any) {
    //console.log(data)
    const temp= {
      "documentRefId": "I210324000369",
          "actionType": "STATUS CHANGE",
          "action": "Approved",
          "actionComments": "The Invoice is approved and will be paid soon 1",
          "actionBy": "000012",           
          "source": "Customer"
}
    // const updateurl="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/invoicestatustracker/statussave"
    const updateurl=Constants.UpdateStatusSave
    //console.log("--------------------------")
    //console.log(updateurl)
    this.http.post(updateurl,data).subscribe(data=>{
      //console.log(data)
    })


  }
}
