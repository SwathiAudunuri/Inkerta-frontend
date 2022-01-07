import { AfterViewInit, Component, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { List } from 'immutable';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog } from '@angular/material/dialog';
import { getinvoicelist } from '../Selectors/invoice.selector';
import { LoadingService } from 'src/app/loading/loading.service';
import { FormControl } from '@angular/forms';
import { UnpaidService } from '../invoicelist/components/unpaidinvoices/unpaid.service';
import { LayoutService } from 'src/app/layout/layout.service';
import { vendorcommentsnull } from '../Actions/comments.action';
import { ExternalInvoiceDetailsInitialvalues } from '../Actions/externalinvoicelistdetails.actions';
import { postExternalInvoiceInitialvalues } from '../Actions/externalInvoiceUpload.actions';
import { getInvoiceListInitialValue } from '../Actions/invoicelist.action';
import { postInvoiceInitialvalues } from '../Actions/invoiceUpload';
import { getPatnerInitialValue } from '../Actions/patnerdetails.actions';
import { getvendorQueriesInvoiceListInitialvalues } from '../Actions/queriesinvoicelist.action';
import { SendRemindernull } from '../Actions/sendreminder.actions';
import { getvendorSupportingDocumentnull } from '../Actions/invoicelistAttachmentssupportingdoc.action';
import { updateStatusnull } from '../Actions/updatestatus.action';
import { PostUpdateStatusnull } from '../Actions/postUpdateStatus.actions';
import { InvoiceListDetailsInitialvalues } from '../Actions/invoicelistdetails.actions';
import { InvoiceListDetailsPdfInitialvalues } from '../Actions/invoicelistdetailsPdf.action';
import { getvendorPaidInvoiceListInitialvalues } from '../Actions/paidinvoicelist.action';
import { getVendorinvoiceAttachmentsnull } from '../Actions/invoicelistAttachments.action';
import { getvendorInvoiceListQrCodenull } from '../Actions/invoicelistQrcode.actions';
import { getInvoiceListHistorynull } from '../Actions/invoicelisthistory.actions';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  tabs!: any[];
  // tab=["Details","Attachments","Invoice Document","Invoice History"]
   tab ={
     "unpaid":["Details","Attachments","Invoice Document","Invoice History"],
     "exception":["Details","Attachments","Invoice Document","Invoice History","NEW"]

   }

  loading$ = this.loader.loading$;
  selected = new FormControl(0);
  invoicelist: unknown;
  constructor(private layout:LayoutService,private unpaid:UnpaidService,public dialog: MatDialog,private config: NgbModalConfig,private modalService: NgbModal,private _router: Router, private store:Store,public loader: LoadingService) { 
    config.backdrop = 'static';
    config.keyboard = true;
    config.centered= true
    config.backdrop=false
    config.modalDialogClass='model_content'
  }
  index:any;
  sidenav:boolean=true;
  sidenav1:boolean=true;
  details:any=[];
  closeResult = '';
  // dataSource:any =''
  row:any=''
  active = 1;
  htmlContent:any = '';
  searchKey:string="";
  tablesize={"width":"100%"}
  read_row:any=false;
  paid:any=false;
  search:any;
  invoicesidenav:any;
  ngAfterViewInit() {
    this.layout.href.next("#/app/vendor_manager/receivables")
    this.layout.link.next("Current Invoices")
  }
  ngOnInit(): void {



    this.unpaid.arrow.subscribe((l)=>{
      //console.log(l)
      this.sidenav=l
    })

    this.store.select(getinvoicelist).subscribe(data =>{
      this.invoicelist=data
    })
  }
  tabs_data(){
  //  this.tab.push("NEW")
  }
  open(Raisequery:any,Updatestatus:any,item:any) {
    if(item==='Update status'){
    this.modalService.open(Updatestatus).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }
    if(item==='Raise Query'){
      this.modalService.open(Raisequery,{ size: 'xl' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // ngOnChanges(changes: SimpleChanges){
  //   const newNumberChange : SimpleChange = changes.tabs;
  //   //console.log(this.tabs)
  // }
  left_sidenav_full(){
    this.sidenav1 = false
  }
  left_sidenav_half(){
    this.sidenav1 = true
  }
  setTabs(status:any){
    this.unpaid.myinbox =status
  }
  ngOnDestroy(){

    document.getElementById('historical')?.remove()
//    this.draggableElement.nativeElement.remove(); 
this.layout.link.next("")
this.store.dispatch(vendorcommentsnull())
    this.store.dispatch(ExternalInvoiceDetailsInitialvalues())
    this.store.dispatch(postExternalInvoiceInitialvalues())
    this.store.dispatch(getInvoiceListInitialValue())
    this.store.dispatch(InvoiceListDetailsInitialvalues())
    this.store.dispatch(InvoiceListDetailsPdfInitialvalues())
    this.store.dispatch(postInvoiceInitialvalues())
    this.store.dispatch(getvendorPaidInvoiceListInitialvalues())
    this.store.dispatch(getPatnerInitialValue())
    this.store.dispatch(getvendorQueriesInvoiceListInitialvalues())
    this.store.dispatch(SendRemindernull())

    this.store.dispatch(getVendorinvoiceAttachmentsnull())
    this.store.dispatch(getvendorSupportingDocumentnull())
    this.store.dispatch(getInvoiceListHistorynull())
    this.store.dispatch(getvendorInvoiceListQrCodenull())
    this.store.dispatch(updateStatusnull())
    this.store.dispatch(PostUpdateStatusnull())
  }
}


