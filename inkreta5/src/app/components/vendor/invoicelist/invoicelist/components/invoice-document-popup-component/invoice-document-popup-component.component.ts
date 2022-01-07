import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { LoadingService } from 'src/app/loading/loading.service';

@Component({
  selector: 'app-invoice-document-popup-component',
  templateUrl: './invoice-document-popup-component.component.html',
  styleUrls: ['./invoice-document-popup-component.component.css']
})
export class InvoiceDocumentPopupComponentComponent implements OnInit {
  compnay_name: any;
  base64: any;
  attachment_view: any;
  pdfZoom = 0.9;
  pdfOriginalSize = false;
  pdfShowAll = true;
  pdfContent: any;

  constructor(@Inject(MAT_DIALOG_DATA) data:any,public dialogRef: MatDialogRef<InvoiceDocumentPopupComponentComponent>,public store:Store,public loader:LoadingService) { 
    // //console.log(data.compnay_name)
    this.compnay_name=data.compnay_name
    this.base64_to_pdf(data.pdf)
    // loader.show()
    // this.base64_to_pdf(data.pdf)
    // setTimeout(()=>{
    //   this.store.subscribe((data:any)=>{
    //     this.base64 = data.customerAttachmentsSupporting.results.base64
    //     // //console.log(this.base64)
    //     this.base64_to_pdf(this.base64)  
    //   })
    // },2000)
    
  }
  ngOnInit(): void {
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
