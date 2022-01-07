import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceAttachmentPopupComponent } from '../invoice-attachment-popup/invoice-attachment-popup.component';
import { base64 } from '../invoice-details-sidenav/base64';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/constants/constants';
import { Store } from '@ngrx/store';
import { getSupportingDocument } from '../../../Actions/invoicelistAttachmentssupportingdoc.action';
import { LoadingService } from 'src/app/loading/loading.service';
import { BehaviorSubject } from 'rxjs';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { getCustomerinvoiceAttachments, getCustomerinvoiceAttachmentsSuccess } from '../../../Actions/invoicelistAttachments.action';
import { getAttachmentsinvoicelist, getsupportAttachmentsinvoicelist } from '../../../Selectors/invoice.selector';
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
  loadattachments= new BehaviorSubject<boolean>(false)
  private data = new BehaviorSubject<any[]>([]);
  attloading: any;
  service: any;
  service1: any;
  loadsupportattachments= new BehaviorSubject<boolean>(false)
  detach= new BehaviorSubject<boolean>(false)

  mime_type2: any;
  service3: any;
  value: any;
  previewsDoc_ref_id: any;

  @Input() external:any
  constructor(public dialog: MatDialog,private http:HttpClient,private store:Store,public loader: LoadingService,public unpaid:UnpaidService) { }
  ngOnInit(): void {
    
    // this.http.get<any>(Constants.InvoiceAttachments+"I210927000100").subscribe((data:any)=>{
    // this.store.subscribe((data:any)=>{
    //   // //console.log(data.customerAttachments.results)
    //   this.dataSource = data.customerAttachments.results;
    // })
 
    this.service = this.unpaid.changetab.subscribe((value)=>{
      // if(this.previewsDoc_ref_id !== this.unpaid.ref){
      if(value){
        if(this.unpaid.tab===this.index){


          if(this.external){
            //new
            var url = Constants.ExternalAttachmentsSupportingDoc + this.unpaid.ref
            this.store.dispatch(getCustomerinvoiceAttachments({url:url}))
          }
          else{
            var url = Constants.InvoiceAttachmentsSupportingDoc + this.unpaid.ref
            this.store.dispatch(getCustomerinvoiceAttachments({url:url}))
          }

        // this.store.dispatch(getCustomerinvoiceAttachments({doc_refid :this.unpaid.ref }))
        }
      // }
    }
    })
    this.getdata()
  }
  getdata(){
    this.service1 = this.unpaid.loadattachments.subscribe((l)=>{
      if(l){
        if(this.unpaid.tab===this.index){
        this.dataSource=[]
        if(this.external){
          //new
          var url = Constants.ExternalInvoiceAttachments + this.unpaid.ref
          this.store.dispatch(getCustomerinvoiceAttachments({url:url}))
        }
        else{
          var url = Constants.InvoiceAttachments + this.unpaid.ref
          this.store.dispatch(getCustomerinvoiceAttachments({url:url}))
        }
        this.loadattachments.next(true)
        //console.warn(l)
        }
      }
    })
    this.loadattachments.subscribe(()=>{
      // .select(getAttachmentsinvoicelist).
      this.store.select(getAttachmentsinvoicelist).subscribe((data:any)=>{

        this.attloading = data.loading
        this.previewsDoc_ref_id = data.doc_refid
        if(data?.attachments){
        if(data.attachments?.results){
          if(data.attachments?.results?.length === 0){
            this.status = false
          }
          else{
            this.status = true
            this.dataSource = data.attachments?.results
          }
        }
        }
        
      })

    // this.store.subscribe(data=>{
    //    this.invoicelistdetails=data
    //    this.invoicelistdetails=this.invoicelistdetails.customerinvoicelisthistory.results
    
    //   this.data.next(this.invoicelistdetails)
           
    //   this.dataSource=this.alter()
    //   //this.dataSource = (this.invoicelistdetails);
    //   this.loadattachments.complete()
    // //  this.data.complete()
      
    //   })
    })
  

  
  }
  alter(){
    return (this.data.asObservable())
  }
  
  openDialog(item:any) {
    this.unpaid.loadsupportattachments.next(item.docId)
    // this.store.dispatch(getSupportingDocument({doc_refid:item.docId}))
    // this.loader.show()
    // setTimeout(()=>{
        if(item.mime_type === "application/pdf"){
          //console.log("in pdf")
        // this.store.subscribe((data:any)=>{
        //   this.base64 = data.customerAttachmentsSupporting.results.base64
        //   //console.log(this.base64)
        // })
        const base64header = "data:"+item.mime_type+";base64,"
        // this.unpaid.loadsupportattachments.next(item.docId)
        const dialogRef = this.dialog.open(InvoiceAttachmentPopupComponent,{data:{external:this.external,compnay_name:item.doc_name,docId:item.docId}});
      }
      else{
        this.wordbase64 = null
        this.service1 = this.unpaid.loadsupportattachments.subscribe((docid)=>{
      
          if(this.external){
            //new
            var url = Constants.ExternalInvoiceAttachments + docid
            this.store.dispatch(getSupportingDocument({url:url}))
          }
          else{
            var url = Constants.InvoiceAttachments + docid
            this.store.dispatch(getSupportingDocument({url:url}))
          }

          // this.store.dispatch(getSupportingDocument({doc_refid:item.docId}))
          this.loadsupportattachments.next(true)
        })
        this.service3 = this.loadsupportattachments.subscribe(()=>{
          this.store.select(getsupportAttachmentsinvoicelist).subscribe((data:any)=>{
            this.wordbase64 = data.supportattachments.results.base64
            this.mime_type2 = data.supportattachments.results.mime_type
            if(this.wordbase64){
              //console.log(item.mime_type)
              if(this.mime_type2 !== "application/pdf"){
              const base64header = "data:"+item.mime_type+";base64,"
              this.download_file(base64header+this.wordbase64,item.doc_name)
              }
            }
          })
          // this.store.subscribe((data:any)=>{
          //   this.wordbase64 = data.customerAttachmentsSupporting.results.base64
          //   this.mime_type2 = data.customerAttachmentsSupporting.results.mime_type
          //   if(this.wordbase64){
          //     //console.log(item.mime_type)
          //     if(this.mime_type2 !== "application/pdf"){
          //     const base64header = "data:"+item.mime_type+";base64,"
          //     this.download_file(base64header+this.wordbase64,item.doc_name)
          //     }

          //   }
          // })

        })
        this.detach.subscribe(()=>{
          this.service3.unsubscribe()

        })
        

        // if(this.wordbase64){
        //   //console.log(item.mime_type)
        //   if(this.mime_type2 !== "application/pdf"){
        //   const base64header = "data:"+item.mime_type+";base64,"
        //   this.download_file(base64header+this.wordbase64,item.doc_name)
        //   }
        //  }
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
    // this.store.unsubscribe()
   })
  }
  detached(){
    //console.log("in detach")
    this.service3.unsubscribe()

  }
  ngOnDestroy(){
    //console.log("in destry")
    this.service.unsubscribe()
    this.service1.unsubscribe()

    // this.service3.unsubscribe()
  }
}