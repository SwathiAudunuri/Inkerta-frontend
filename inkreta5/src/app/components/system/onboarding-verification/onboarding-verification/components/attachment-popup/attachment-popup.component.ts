import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Constants } from 'src/app/constants/constants';
import { getDocument, getDocumentInitialvalues } from '../../../Actions/GetDocument.action';
import { onboardverificationService } from '../../../onboarding-verification.service';
import { GetDocumentState } from '../../../Selectors/onboarding-verification.selectors';

@Component({
  selector: 'app-attachment-popup',
  templateUrl: './attachment-popup.component.html',
  styleUrls: ['./attachment-popup.component.css']
})
export class AttachmentPopupComponent implements OnInit {
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
  docid: any;
  patnerId: any;
  service2: any;
  service3: any;
  loading: any;
  filename: any="";
  constructor(@Inject(MAT_DIALOG_DATA) data:any,public dialogRef: MatDialogRef<AttachmentPopupComponent>,public store:Store,private service:onboardverificationService) { 
    // this.compnay_name=data.compnay_name
    // this.docId = data.docId
  }
  ngOnInit() {
    this.store.dispatch(getDocumentInitialvalues())
    this.service2 = this.service.docId.subscribe((data)=>{
      if(data){
        this.docid = data
      }
    })
    this.service3 = this.service.patnerId.subscribe((data)=>{
      if(data){
        this.patnerId=data
      }
    })
    const url= Constants.GetDocument+this.patnerId+"/"+this.docid
    //console.log(url)
    this.store.dispatch(getDocument({url:url}))
    this.getdata()
  }
  getdata(){
    // this.service1 = this.unpaid.loadsupportattachments.subscribe((docid)=>{

    //   this.store.dispatch(getSupportingDocument({doc_refid:docid}))
    //   this.loadsupportattachments.next(true)
    // })
    // this.loadsupportattachments.subscribe(()=>{
    //   this.store.select(getsupportAttachmentsinvoicelist).subscribe((data:any)=>{
    //     // //console.log(data)
    //     if(data){
    //       this.base64 = data.supportattachments.results.base64
    //       this.base64_to_pdf("data:application/pdf;base64,"+this.base64)
    //     }
    //   })
     
    // })
    this.store.select(GetDocumentState).subscribe((data:any)=>{
      this.loading = data.loading
      //console.log(data)
      if(data.doc){
        if(data.doc.hasError){
          //console.log("error")
        }
        else{
          this.base64 = data.doc.results.base64
          //console.log(this.base64)
          this.base64_to_pdf("data:application/pdf;base64,"+this.base64)
          this.filename = data.doc.results.doc_name
        }
      }
    })
  
  }
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
    this.service2.unsubscribe()
    this.service3.unsubscribe()
  }
}
