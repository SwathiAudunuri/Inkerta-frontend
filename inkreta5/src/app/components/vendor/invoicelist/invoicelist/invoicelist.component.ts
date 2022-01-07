import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { List } from 'immutable';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog } from '@angular/material/dialog';
import { QuerydialogComponent } from './components/querydialog/querydialog.component';
import { UpdatestatusComponent } from './components/updatestatus/updatestatus.component';
import { HistoryComponent } from './components/history/history.component';
import { getInvoiceListHistory, getInvoiceListHistorynull } from '../Actions/invoicelisthistory.actions';
import { getInvoiceListDetails, InvoiceListDetailsInitialvalues } from '../Actions/invoicelistdetails.actions';
import { getinvoicelist } from '../Selectors/invoice.selector';
import { Constants } from 'src/app/constants/constants';
import { getvendorPaidInvoiceList, getvendorPaidInvoiceListInitialvalues } from '../Actions/paidinvoicelist.action';
import { getvendorInvoiceListQrCode, getvendorInvoiceListQrCodenull } from '../Actions/invoicelistQrcode.actions';
import { getvendorInvoiceListDetailsPdf, InvoiceListDetailsPdfInitialvalues } from '../Actions/invoicelistdetailsPdf.action';
import { getVendorinvoiceAttachments, getVendorinvoiceAttachmentsnull } from '../Actions/invoicelistAttachments.action';
import { UploadInvoiceComponent } from './components/upload-invoice/upload-invoice.component';
import { UnpaidService } from './components/unpaidinvoices/unpaid.service';
import { InvoiceUploadFormComponent } from './components/invoice-upload-form/invoice-upload-form.component';
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
export interface PeriodicElement {
  InvoiceNo: number;
  Date:string;
  VendorName: string;
  Amount: number;
  DueDate: string;
  StatusOfInv:string;
  Action:Array<any>;
  complete:boolean
}
const ELEMENT_DATA: PeriodicElement[] = [
  {InvoiceNo : 1, Date: '12-1-21', VendorName: 'DRL', Amount: 50000,DueDate :'10-2-21',StatusOfInv:'New',Action:["Update status","Raise Query","History"],complete:false},
  {InvoiceNo : 2, Date: '1-11-21', VendorName: 'DRL', Amount: 20000,DueDate :'10-12-21',StatusOfInv:'Onhold', Action:["Update status","Raise Query","History"],complete:false},
  {InvoiceNo : 3, Date: '12-10-21', VendorName: 'DRL', Amount: 30000,DueDate :'10-11-21',StatusOfInv:'New',Action:["Raise Query"],complete:false },
  {InvoiceNo : 4, Date: '12-9-21', VendorName: 'DRL', Amount: 150000,DueDate :'10-10-21',StatusOfInv:'Query',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 5, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'New',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 6, Date: '1-11-21', VendorName: 'DRL', Amount: 5000,DueDate :'10-12-21',StatusOfInv:'Onhold', Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 7, Date: '12-10-21', VendorName: 'DRL', Amount: 70000,DueDate :'10-11-21',StatusOfInv:'Onhold',Action:["Raise Query"] ,complete:false},
  {InvoiceNo : 8, Date: '12-9-21', VendorName: 'DRL', Amount: 60000,DueDate :'10-10-21',StatusOfInv:'Query',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 9, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'New',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 1, Date: '12-1-21', VendorName: 'DRL', Amount: 50000,DueDate :'10-2-21',StatusOfInv:'New',Action:["Update status","Raise Query","History"],complete:false},
  {InvoiceNo : 2, Date: '1-11-21', VendorName: 'DRL', Amount: 20000,DueDate :'10-12-21',StatusOfInv:'Onhold', Action:["Update status","Raise Query","History"],complete:false},
  {InvoiceNo : 3, Date: '12-10-21', VendorName: 'DRL', Amount: 30000,DueDate :'10-11-21',StatusOfInv:'New',Action:["Raise Query"] ,complete:false},
  {InvoiceNo : 4, Date: '12-9-21', VendorName: 'DRL', Amount: 150000,DueDate :'10-10-21',StatusOfInv:'Query',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 5, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'New',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 6, Date: '1-11-21', VendorName: 'DRL', Amount: 5000,DueDate :'10-12-21',StatusOfInv:'Onhold', Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 7, Date: '12-10-21', VendorName: 'DRL', Amount: 70000,DueDate :'10-11-21',StatusOfInv:'Onhold',Action:["Raise Query"],complete:false },
  {InvoiceNo : 8, Date: '12-9-21', VendorName: 'DRL', Amount: 60000,DueDate :'10-10-21',StatusOfInv:'Query',Action:["Update status","Raise Query"],complete:false},
  {InvoiceNo : 9, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'New',Action:["Update status","Raise Query"],complete:false},

];
@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.scss']
})
export class InvoicelistComponent implements AfterViewInit {

  @ViewChild(MatPaginator, {static: false}) paginator:any;
  invoicelist: unknown;
  sidenav1:boolean=true;

  constructor(private layout:LayoutService,public unpaid:UnpaidService,public dialog: MatDialog,private config: NgbModalConfig,private modalService: NgbModal,private _router: Router, private store:Store) { 
    config.backdrop = 'static';
    config.keyboard = true;
    config.centered= true
    config.backdrop=false
    config.modalDialogClass='model_content'
  }
  index:any;
  sidenav:boolean=true;
  details:any=[];
  closeResult = '';
  dataSource:any =''
  row:any=''
  active = 1;
  htmlContent:any = '';
  searchKey:string="";
  tablesize={"width":"100%"}
  read_row:any=false;
  paid:any=false;
  search:any;
  invoicesidenav:any;
  sidenav123:any;
  ngAfterViewInit() {
  // this.dataSource.paginator=this.paginator
  this.layout.href.next("#/app/vendor_manager/historical_invoices")
    this.layout.link.next("Historical Invoices")
  }
  ngOnInit(): void {
    

    this.unpaid.arrow.subscribe((l)=>{
      //console.log(l)
      this.sidenav=l
    })
    // this.store.dispatch(getInvoiceList({url : Constants.VenderUpaidInvoiceList}))
    // this.store.dispatch(getvendorPaidInvoiceList({url:Constants.VenderPaidInvoiceList}))
    // this.store.dispatch(getcustomerInvoiceListHistory({doc_refid : "I210915000030"}))
    // this.store.dispatch(getcustomerInvoiceListDetails({doc_refid : "I210915000030"}))
    this.store.select(getinvoicelist).subscribe((data:any) =>{
      //console.log(data)
      this.invoicelist=data
      if(this.invoicelist){
          // this.defaultdetails = data[0].document_ref_id
          // //console.log(data[0].document_ref_id )
          // this.store.dispatch(getInvoiceListHistory({doc_refid : data[0].document_ref_id}))
          // this.store.dispatch(getInvoiceListDetails({doc_refid : data[0].document_ref_id}))
          // this.store.dispatch(getvendorInvoiceListDetailsPdf({doc_refid : "I210922000090"}))
          // this.store.dispatch(getvendorInvoiceListQrCode({doc_refid : "I210924000086"}))
          // this.store.dispatch(getVendorinvoiceAttachments({doc_refid:"I210927000100"}))
      }
    })

  } 
  ngDoCheck(){
    // if(this.read_row === true){
    //   ELEMENT_DATA[this.index].complete = true
    // }
    // //console.log("search")
    // this.applyFilter()
  }
  displayedColumns: string[] = ['select','InvoiceNo', 'Date', 'VendorName', 'Amount','DueDate','StatusOfInv','Action'];
  getAllRec(){
    // this.store.dispatch(getInvoiceList({url : Constants.VenderUpaidInvoiceList}))
  // this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  // //console.log(this.dataSource)
    ////console.log(this.paginator)
  //this.dataSource.paginator=this.paginator
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

  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;

  }

  left_sidenav_full(){
    this.sidenav1 = false
  }
  left_sidenav_half(){
    this.sidenav1 = true
  }
  upload_invoice(){
    // ,{data:this.details}
    const dialogRef = this.dialog.open(UploadInvoiceComponent,{disableClose: true});
  }
  upload_invoice_form(){
    const dialogRef = this.dialog.open(InvoiceUploadFormComponent,{disableClose: true});
  }
  ngOnDestroy(){

    document.getElementById('historical')?.remove()
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
    // this.store.dispatch(getQueryListnull())
    // this.store.dispatch(updateStatusnull())
  }
}

