import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceAttachmentPopupComponent } from '../invoice-attachment-popup/invoice-attachment-popup.component';
import { base64 } from '../invoice-details-sidenav/base64';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/constants/constants';
import { Store } from '@ngrx/store';
import { getvendorSupportingDocument } from '../../../Actions/invoicelistAttachmentssupportingdoc.action';
import { LoadingService } from 'src/app/loading/loading.service';
import { BehaviorSubject } from 'rxjs';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { getVendorinvoiceAttachments, getVendorinvoiceAttachmentsSuccess } from '../../../Actions/invoicelistAttachments.action';
import { getAttachmentsinvoicelist, getsupportAttachmentsinvoicelist } from '../../../Selectors/invoice.selector';
import { I } from '@angular/cdk/keycodes';
// import { getAttachmentsinvoicelist } from '../../../Selectors/invoice.selector';
const ELEMENT_DATA: any = [
  {id:1,Document_Name: "KSR Solutions", Date: '15-09-21', path: base64.ksr_solutions,itemtype:"pdf"},
  {id:2,Document_Name: "Dynamic Health Care", Date: '17-09-21', path: base64.Dynamic_health,itemtype:"pdf"},
  {id:3,Document_Name: "Sigma Solutions", Date: '20-09-21', path: base64.sigma_solution,itemtype:"pdf"},
  {id:4,Document_Name: "KSR Solutions", Date: '20-09-21', path: base64.ksr_solutions,itemtype:"pdf"},
  {id:5,Document_Name: "Indian Insurance Company Pvt Ltd",Date:"25-09-21",path: base64.indian_cmpy,itemtype:"excel"}
];

@Component({
  selector: 'app-invoice-attachment',
  templateUrl: './invoice-attachment.component.html',
  styleUrls: ['./invoice-attachment.component.css']
})
export class InvoiceAttachmentComponent implements OnInit {
  file: any;
  displayedColumns: string[] = ['Document Name', 'Created ON','Created By','Mime Type'];
  dataSource: any;
  base64: any;
  wordbase64: any;
  status: boolean = true;
  doc_name: any;
@Input() index:any;
@Input() external:any
  loadattachments= new BehaviorSubject<boolean>(false)
  private data = new BehaviorSubject<any[]>([]);
  attloading: any;
  service: any=null;
  service1: any=null;
  mime_type2: any;
  service3: any;
  loadsupportattachments= new BehaviorSubject<boolean>(false)
  detach= new BehaviorSubject<boolean>(false)
  constructor(public dialog: MatDialog,private http:HttpClient,private store:Store,public loader: LoadingService,public unpaid:UnpaidService) { }
  ngOnInit(): void {
    if(this.service !== null){
      this.service.unsubscribe()
    }
    if(this.service1 !== null){
      this.service1.unsubscribe()
    }
    this.service = this.unpaid.changetab.subscribe((data)=>{
      if(data === 2){
        //console.log("changetab")
      if(this.unpaid.tab===this.index){
        if(this.external){
          var url =Constants.ExternalInvoiceAttachments+this.unpaid.ref
          this.store.dispatch(getVendorinvoiceAttachments({url:url}))
        }
        else{
          var url =Constants.InvoiceAttachments+this.unpaid.ref
          this.store.dispatch(getVendorinvoiceAttachments({url:url}))
        }
      }
    }
    })
    this.getdata()
  }
  getdata(){
    this.service1 = this.unpaid.loadattachments.subscribe((l)=>{
      if(l){
        //console.log("normaltab")
    if(this.unpaid.tab===this.index){
    this.dataSource=[]
    if(this.external){
      var url =Constants.ExternalInvoiceAttachments+this.unpaid.ref
      this.store.dispatch(getVendorinvoiceAttachments({url:url}))
    }
    else{
      var url =Constants.InvoiceAttachments+this.unpaid.ref
      this.store.dispatch(getVendorinvoiceAttachments({url:url}))
    }
    this.loadattachments.next(true)
    //console.warn(l)
    }
    }
    })
    this.loadattachments.subscribe(()=>{
      this.store.select(getAttachmentsinvoicelist).subscribe((data:any)=>{

        this.attloading = data.loading
        if(data?.attachments){
        if(data.attachments.results){
          if(data.attachments.results.length === 0){
            this.status = false
          }
          else{
            this.status = true
            this.dataSource = data.attachments.results
          }
        }
        }
      })
    })
  }
  alter(){
    return (this.data.asObservable())
  }
  
  openDialog(item:any) {
    this.unpaid.loadsupportattachments.next(item.docId)
        if(item.mime_type === "application/pdf"){
        const base64header = "data:"+item.mime_type+";base64,"
        const dialogRef = this.dialog.open(InvoiceAttachmentPopupComponent,{data:{external:this.external,compnay_name:item.doc_name,docId:item.docId}});
      }
      else{
        this.wordbase64 = null
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
        this.service3 = this.loadsupportattachments.subscribe(()=>{
          this.store.select(getsupportAttachmentsinvoicelist).subscribe((data:any)=>{
            if(data?.supportattachments){
              if(data?.supportattachments.hasError){

              }
              else{
                this.wordbase64 = data.supportattachments.results.base64
                this.mime_type2 = data.supportattachments.results.mime_type
                if(this.wordbase64){
                  //console.log(item.mime_type)
                  if(this.mime_type2 !== "application/pdf"){
                  const base64header = "data:"+item.mime_type+";base64,"
                  this.download_file(base64header+this.wordbase64,item.doc_name)
                  }
                }
              }
            }
          })
        })
        this.detach.subscribe(()=>{
          this.service3.unsubscribe()
        })
      }
  }
  download_file(base64:any,filename:any) {
    fetch(base64)
    .then(res => res.blob())
    .then(blob => {
      this.file = new File([blob], "invoice")
      saveAs(this.file, filename)
      this.detach.next(true)
      this.detached()
   })
  }
  detached(){
    //console.log("in detach")
    this.service3.unsubscribe()

  }
  ngOnDestroy(){
    this.service.unsubscribe()
    this.service1.unsubscribe()
    this.unpaid.loadattachments.next(null)
  }
}