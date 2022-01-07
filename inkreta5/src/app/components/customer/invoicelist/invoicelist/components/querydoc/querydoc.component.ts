import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Constants } from '../../../../../../constants/constants';
import { QueryService } from '../../query.service';

@Component({
  selector: 'app-querydoc',
  templateUrl: './querydoc.component.html',
  styleUrls: ['./querydoc.component.css']
})
export class QuerydocComponent implements OnInit {

  constructor(private http:HttpClient,private queryservice:QueryService,public dialogRef: MatDialogRef<QuerydocComponent>) { }

  ngOnInit(): void {
    this.http.get(Constants.GetQueryDocument +this.queryservice.docId).subscribe((data:any)=>{
      if(data){
      //this.attachment_view=data.results.docPath
      //console.log(data.results.base64)
              this.base64_to_pdf("data:application/pdf;base64,"+data.results.base64)

      //console.log(data)
      }
    })
  }
  attachment_view:any=null;
  compnay_name:any;
  pdfZoom = 0.9;
  pdfOriginalSize = false;
  pdfShowAll = true;
  pdfContent: any;
  base64: any;
  docId: any;
  service1: any;
  loadsupportattachments= new BehaviorSubject<boolean>(false)
  // constructor(@Inject(MAT_DIALOG_DATA) data:any,public dialogRef: MatDialogRef<InvoiceAttachmentPopupComponent>,public store:Store,public loader:LoadingService,public unpaid:UnpaidService) { 
  //   this.compnay_name=data.compnay_name
  //   this.docId = data.docId
  // }
  // ngOnInit(): void {
  //   this.getdata()
  // }
 
  // getdata(){
  //   this.service1 = this.unpaid.loadsupportattachments.subscribe((docid)=>{

  //     this.store.dispatch(getSupportingDocument({doc_refid:docid}))
  //     this.loadsupportattachments.next(true)
  //   })
  //   this.loadsupportattachments.subscribe(()=>{
  //     this.store.select(getsupportAttachmentsinvoicelist).subscribe((data:any)=>{
  //       // //console.log(data)
  //       if(data){
  //         this.base64 = data.supportattachments.results.base64
  //         this.base64_to_pdf("data:application/pdf;base64,"+this.base64)
  //       }
  //     })
     
  //   })
  
  // }
  base64_to_pdf(base64:any) {
    fetch(base64)
    .then(res => res.blob())
    .then(blob => {
    const file = new File([blob], "invoice",{ type: "pdf" })
    if(blob){
      var reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload = (event:any)=>{
        this.attachment_view = event.target.result
      }
    }
   })
  }
  zoomin(){
    this.pdfZoom = this.pdfZoom+0.1
  }
  zoomout(){
    this.pdfZoom = this.pdfZoom-0.1
  }
  close(){
    this.dialogRef.close();
  }
  ngOnDestroy(){
//this.service1.unsubscribe()
  }
}
