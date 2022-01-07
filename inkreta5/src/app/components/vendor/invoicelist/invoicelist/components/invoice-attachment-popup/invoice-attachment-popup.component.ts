import { Component, Inject, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Constants } from 'src/app/constants/constants';
import { LoadingService } from 'src/app/loading/loading.service';
import { getvendorSupportingDocument } from '../../../Actions/invoicelistAttachmentssupportingdoc.action';
import { getsupportAttachmentsinvoicelist } from '../../../Selectors/invoice.selector';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

@Component({
  selector: 'app-invoice-attachment-popup',
  templateUrl: './invoice-attachment-popup.component.html',
  styleUrls: ['./invoice-attachment-popup.component.css']
})
export class InvoiceAttachmentPopupComponent implements OnInit {
  attachment_view:any;
  compnay_name:any;
  pdfZoom = 0.9;
  pdfOriginalSize = false;
  pdfShowAll = true;
  pdfContent: any;
  base64: any;
  docId: any;
  service1: any;
  loadsupportattachments= new BehaviorSubject<boolean>(false)
  external: External;
  constructor(@Inject(MAT_DIALOG_DATA) data:any,public dialogRef: MatDialogRef<InvoiceAttachmentPopupComponent>,public store:Store,public loader:LoadingService,public unpaid:UnpaidService) { 
    this.compnay_name=data.compnay_name
    this.docId = data.docId

    this.external = data.external
  }
  ngOnInit(): void {
    this.getdata()
  }
  ngAfterContentInit(){
  }
  getdata(){
    this.service1 = this.unpaid.loadsupportattachments.subscribe((docid)=>{
      if(this.external){
        //new
        var url = Constants.ExternalAttachmentsSupportingDoc + docid
        this.store.dispatch(getvendorSupportingDocument({url:url}))
      }
      else{
        var url = Constants.InvoiceAttachmentsSupportingDoc + docid
        this.store.dispatch(getvendorSupportingDocument({url:url}))
      }

      this.loadsupportattachments.next(true)
    })
    this.loadsupportattachments.subscribe(()=>{
      this.store.select(getsupportAttachmentsinvoicelist).subscribe((data:any)=>{
        //console.log(data)
        if(data.supportattachments){
          if(data?.supportattachments?.hasError){
            // this.base64 = data.supportattachments.results.base64
            // if(this.base64){
            //   this.base64_to_pdf("data:application/pdf;base64,"+this.base64)
            // }
            
          }
          else{
            this.base64 = data.supportattachments.results.base64
            if(this.base64){
              this.base64_to_pdf("data:application/pdf;base64,"+this.base64)
            }
          }
          
        }
      })
     
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
}
