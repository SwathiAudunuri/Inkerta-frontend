import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Pipe, SimpleChanges, ViewChild } from '@angular/core';
import { saveAs } from 'file-saver';
import { SimpleChange } from '@angular/core';
import { base64 } from '../invoice-details-sidenav/base64';
import { Store } from '@ngrx/store';
import { InvoiceAttachmentPopupComponent } from '../invoice-attachment-popup/invoice-attachment-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/constants/constants';
import { getvendorInvoiceListDetailsPdf, InvoiceListDetailsPdfInitialvalues } from '../../../Actions/invoicelistdetailsPdf.action';


import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { getvenderpdfinvoice } from '../../../Selectors/invoice.selector';
import { InvoiceDocumentPopupComponentComponent } from '../invoice-document-popup-component/invoice-document-popup-component.component';
import { BehaviorSubject } from 'rxjs';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

// @Pipe({ name: 'safe' })
@Component({
  selector: 'app-invoice-inline',
  templateUrl: './invoice-inline.component.html',
  styleUrls: ['./invoice-inline.component.css']
})

export class InvoiceInlineComponent implements OnInit {
  @Output() blob = new EventEmitter()
  @ViewChild('viwer') viwerRef:any

  // public pdfsrc:any='../../../../../../../assets/invoice/invoice-1.pdf'
  // public pdfsrc1:any = "../../../../../../../assets/invoice2.pdf"
  public pdfsrc:any 
  // @Input() public base64:any ;
  // @Input() public base642:any ;
  // @Input() public details:any;
  public pdf_view:any=true
  pdfZoom = 1.0;
  pdfOriginalSize = false;
  pdfShowAll = true;
  pdfContent: any;
  cmp_name: any="";
  invoicelist: any;
  base64pdfdata: any;
  database64: any;
  status!: boolean;
  can_close: boolean=true;
  // "http://www.pdf995.com/samples/pdf.pdf"
data:any="../../../../../../../assets/newpdf1.pdf"
  pdfbrowser:any=true;
  isLoaded: boolean=false;
  totalPages: any=null;
  page:any=1;
  url!: SafeResourceUrl;
  public rootFolder = location.href;
  loadpdf= new BehaviorSubject<boolean>(false)
  @Input() index:any

  @Input() external:any
  loading$:any =true
  prevbase64: any;
  errormess: any;
  refId: any;
  service: any;
  service1: any;
  constructor(private store:Store,public dialog: MatDialog,public _http:HttpClient,private sanitizer: DomSanitizer,public unpaid:UnpaidService) { 

    // pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }
  ngOnInit(){
    this.service = this.unpaid.changetab.subscribe(()=>{
      

      //console.log(this.unpaid.tab)
      //console.log(this.index)
      if(this.unpaid.tab===this.index){
        this.store.dispatch(InvoiceListDetailsPdfInitialvalues())

        if(this.external){
          //new
          var url = Constants.ExternalInvoicePdf+this.unpaid.ref
          this.store.dispatch(getvendorInvoiceListDetailsPdf({url : url}))
        }
        else{
          var url = Constants.InvoicePdf+this.unpaid.ref
          this.store.dispatch(getvendorInvoiceListDetailsPdf({url : url}))
        }
      this.loadpdf.next(true)
      }
  
    })
    this.getdata()
  }
  getdata(){
    this.service1 = this.unpaid.loadpdf.subscribe((l)=>{
      // //console.log(this.unpaid.tab)
      // //console.log(this.index)
    if(this.unpaid.tab===this.index){
      this.store.dispatch(InvoiceListDetailsPdfInitialvalues())

      if(this.external){
        //new
        var url = Constants.ExternalInvoicePdf+this.unpaid.ref
        this.store.dispatch(getvendorInvoiceListDetailsPdf({url : url}))
      }
      else{
        var url = Constants.InvoicePdf+this.unpaid.ref
        this.store.dispatch(getvendorInvoiceListDetailsPdf({url : url}))
      }
      //console.warn(l)
    }
    })
    this.loadpdf.subscribe(()=>{
      if(this.unpaid.tab===this.index)
      // .select(getcustomerpdfinvoice)
      this.store.select(getvenderpdfinvoice).subscribe((data:any)=>{
        // this.pdfsrc = null
        // testing
        this.pdfsrc = null
        this.base64pdfdata = null
        
        // ...
        //console.log(data.invoicepdf.errors)
        if(data.invoicepdf.hasError === true){
          //console.log("else")
          this.hide()
          this.status = true
          this.errormess = data.invoicepdf.errors.errorMessage
        }
        else if(data.invoicepdf.hasError === false){
            if(data.invoicepdf.results){
            //console.log("if")
            this.database64 = data.invoicepdf.results.base64 as string
            if(this.database64){
              this.show()
              this.cmp_name = data.invoicepdf.results.doc_name
              this.refId = data.invoicepdf.results.refId
              this.prevbase64 = data.invoicepdf.results.base64
              this.base64pdfdata = "data:application/pdf;base64,"+data.invoicepdf.results.base64
              
              this.base64_to_pdf(this.base64pdfdata)
              this.status = false
            }
            else{
              this.hide()
              this.status = true
              this.errormess = "Document are not found for this invoice (Doc_ref_id : "+this.unpaid.ref+")"
            }
          }
          else{
            //console.log("else")
            this.hide()
            this.status = true
            this.errormess = "Document are not found for this invoice (Doc_ref_id : "+this.unpaid.ref+")"
          }
        }
        // if(data){
        //   //console.log("if")
        //   this.database64 = data.base64 as string
        //   if(this.database64){
        //     this.show()
        //     // this.pdfsrc = null;
        //     this.cmp_name = data.doc_name
        //     this.prevbase64 = data.base64
        //     this.base64pdfdata = "data:application/pdf;base64,"+data.base64
            
        //     this.base64_to_pdf(this.base64pdfdata)
        //     this.status = false
        //   }
        //   else{
        //     this.hide()
        //     this.status = true
        //   }
        // }
        // else{
        //   //console.log("else")
        //   this.hide()
        //   this.status = true
        // }
      })
      // this.store.select(getcustomerpdfinvoice).subscribe((data:any)=>{

      
      //   // this.pdfsrc = null
  
      //   this.database64 = data.base64 as string
      //   if(this.database64){
          
      //     // this.pdfsrc = null;
  
      //     this.base64pdfdata = "data:application/pdf;base64,"+data.base64
          
      //     this.base64_to_pdf(this.base64pdfdata)
      //     this.status = false
      //   }
      //   else{
      //     this.status = true
      //   }
      // })

    // this.store.subscribe(data=>{
    //    this.invoicelistdetails=data
    //    this.invoicelistdetails=this.invoicelistdetails.customerinvoicelisthistory.results
    
    //   this.data.next(this.invoicelistdetails)
           
    //   this.dataSource=this.alter()
    //   //this.dataSource = (this.invoicelistdetails);
    //   this.loadpdf.complete()
    // //  this.data.complete()
      
    //   })
    })
  

  
  }
  
  
  ngAfterContentInit(){

    // this.store.subscribe((data:any)=>{

      
    //   // this.pdfsrc = null

    //   this.database64 = data.customerinvoicepdf.results.base64 as string
    //   if(this.database64){
        
    //     // this.pdfsrc = null;

    //     this.base64pdfdata = "data:application/pdf;base64,"+data.customerinvoicepdf.results.base64
        
    //     this.base64_to_pdf(this.base64pdfdata)
    //     this.status = false
    //   }
    //   else{
    //     this.status = true
    //   }
    // })
  }
  // clicked(){
  //   this._http.get<any>(Constants.InvoicePdf+"I210922000090")
  //   .subscribe(data => {
  //     this.base64pdfdata = "data:application/pdf;base64,"+data.results.base64
  //     this.base64_to_pdf(this.base64pdfdata)
  //   });
  // }
  // ngOnChanges(changes: SimpleChanges){
    // const newNumberChange : SimpleChange = changes.details;
    // //console.log(newNumberChange.currentValue.company_name)
    // if(this.details !== null){
    //   if(this.details.VendorName === 'Indian Insurance Company Pvt Ltd'){
    //     this.cmp_name = "Indian Insurance Company Pvt Ltd"
    //     this.base64_to_pdf(base64.dumy)
    //   }
    //   else if(this.details.VendorName === 'Dynamic Health Care Pvt Ltd'){
    //     this.cmp_name = "Dynamic Health Care Pvt Ltd"
    //     this.base64_to_pdf(base64.Dynamic_health)
    //   }
    //   else if(this.details.VendorName === 'KSR Solutions'){
    //     this.cmp_name = "KSR Solutions"
    //     this.base64_to_pdf(base64.ksr_solutions)
    //   }
    //   else if(this.details.VendorName === 'Sigma Solutions'){
    //     this.cmp_name = "Sigma Solutions"
    //     this.base64_to_pdf(base64.sigma_solution)
    //   }
    //   else if(newNumberChange.currentValue.company_name === 'Dynamic Health Care Pvt Ltd'){
    //     this.cmp_name = 'Dynamic Health Care Pvt Ltd'
    //     this.store.dispatch(getcustomerInvoiceListDetailsPdf({doc_refid : "I210922000083"}))
    //   }
    //   else if(newNumberChange.currentValue.company_name === 'Ashirvad Pipes Pvt Ltd'){
    //     this.cmp_name = 'Ashirvad Pipes Pvt Ltd'
    //   }
    //   else if(newNumberChange.currentValue.company_name === 'Indian Insurance Company Pvt Ltd'){
    //     this.cmp_name = 'Indian Insurance Company Pvt Ltd'
    //     this.base64_to_pdf(base64.sigma_solution)
    //   }
    //   else if(newNumberChange.currentValue.company_name === 'KSR Solutions'){
    //     this.cmp_name = 'KSR Solutions'
    //     this.base64_to_pdf(base64.ksr_solutions)
    //   }
    //   else{
    //     this.base64_to_pdf(base64.Query)
    //   }
    // }
  // }
  ngOnDestroy() {
    this.pdfsrc = null
    this.base64pdfdata = null
  
    this.service.unsubscribe()
    this.service1.unsubscribe()

    this.store.dispatch(InvoiceListDetailsPdfInitialvalues())
    
    // this.page.destroy()
    // this.pdfZoom
  }
  base64_to_pdf(base64:any) {
    fetch(base64)
    .then(res => res.blob())
    .then(blob => {
    const file = new File([blob], "invoice",{ type: "pdf" })
    this.blob.emit(blob)
    if(blob){
      var reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload = (event:any)=>{
        // //console.log(event.target)
        // this.pdfsrc= this.sanitizer.bypassSecurityTrustResourceUrl(event.target.result);  
        this.pdfsrc = event.target.result
      }
    }
  
   })
  }
  onProgress(e:any) {
    // //console.log("pdf processing")
    // this.show()
  }
  onPdfError(e:any){
    // //console.warn(e)
  }
  onError(e:any){
    // //console.log(e)
  }
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
    // //console.log("completed")
    this.hide()
  }
  pageRendered(e: CustomEvent) {
    // //console.log('(page-rendered)', e);
  }
  expand_pdf(){
    // const base64header = "data:"+item.mime_type+";base64,"
    const dialogRef = this.dialog.open(InvoiceDocumentPopupComponentComponent,{data:{compnay_name:this.cmp_name,pdf:"data:application/pdf;base64,"+this.database64}});
  }
  zoomin(){
    this.pdfZoom = this.pdfZoom+0.1
  }
  zoomout(){
    this.pdfZoom = this.pdfZoom-0.1   
  }

  show(){
    this.loading$=true
  }
  hide(){
    this.loading$=false
  }
  
 
  // pdfView(){
  //   WebViewer({
  //     path:'../../../../../../../assets/lib',
  //     // initialDoc:'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf''../../../../../../../assets/invoice/invoice-1.pdf'
  //     initialDoc:'../../../../../../../assets/invoice/invoice-1.pdf'
  //   },this.viwerRef.nativeElement).then(instance => {
  //     var FitMode = instance.UI.FitMode;
  //     instance.UI.setFitMode(FitMode.FitWidth);
  //     // instance.UI.setZoomLevel('109%');
  //     // instance.UI.setAnnotationReadState({ isRead: true, annotationId: 'test-annotation-id' });
  //     instance.UI.disableElements(['header']);
  //     instance.UI.disableElements(['HeaderItems']);
  //     // instance.UI.disableElements(['ribbons']);
  //     // instance.UI.disableElements(['toolsHeader']);

  //     // E:\Angular\inkerta-app1\src\assets\lib\ui\style.css in this part we have add this css in style.css    .HeaderToolsContainer{height: 0px !important;}
  //     // .HeaderToolsContainer .closed{display: none !important;}

  //     // instance.UI.disableElements(['searchButton']);
  //     // instance.UI.disableElements(['menuButton']);
  //     // instance.UI.disableElements(['pageNavOverlay']);
  //     // instance.UI.disableElements(['highlightToolGroupButton']);
  //     // instance.UI.disableElements(['underlineToolGroupButton']);
  //     // instance.UI.disableElements(['strikeoutToolGroupButton']);
  //     // instance.UI.disableElements(['squigglyToolGroupButton']);
  //     // instance.UI.disableElements(['stickyToolGroupButton']);
  //     // instance.UI.disableElements(['freeTextToolGroupButton']);
  //     // instance.UI.disableElements(['shapeToolGroupButton']);
  //     // instance.UI.disableElements(['freeHandToolGroupButton']);
  //     // instance.UI.disableElements(['eraserToolButton']);
  //     // instance.UI.disableElements(['printButton']);
  //     // instance.UI.disableElements(['downloadButton']);
  //     // instance.UI.disableFeatures([instance.UI.Feature.TextSelection])
    
  //    })
  // }      
}