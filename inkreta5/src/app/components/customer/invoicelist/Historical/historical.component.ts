import { AfterViewInit, Component, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { List } from 'immutable';
import {NgbModal, ModalDismissReasons, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getcustomerInvoiceList, getcustomerInvoiceListInitialValue } from '../Actions/invoicelist.action';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog } from '@angular/material/dialog';
import { getcustomerInvoiceListHistory, getcustomerInvoiceListHistoryInitialValues } from '../Actions/invoicelisthistory.actions';
import { custInvoiceListDetailsInitialvalues, getcustomerInvoiceListDetails } from '../Actions/invoicelistdetails.actions';
import { getcustomerinvoicelist } from '../Selectors/invoice.selector';
import { getcustomerPaidInvoiceList } from '../Actions/paidinvoicelist.action';
import { Constants } from 'src/app/constants/constants';
import { getcustomerInvoiceListDetailsPdf, getcustomerInvoiceListDetailsPdfnull } from '../Actions/invoicelistdetailsPdf.actions';
import { getcustomerExceptionInvoiceList, getExceptionInvoiceListInitialValue } from '../Actions/Exceptioninvoicelist.action';
import { getCustomerinvoiceAttachments, getCustomerinvoiceAttachmentsnull } from '../Actions/invoicelistAttachments.action';
import { LoadingService } from 'src/app/loading/loading.service';
import { FormControl } from '@angular/forms';
import { UnpaidService } from '../invoicelist/components/unpaidinvoices/unpaid.service';
import { LayoutService } from 'src/app/layout/layout.service';
import { customercommentsnull } from '../Actions/comments.action';
import { ExecuteActionnull } from '../Actions/ExcuteAction.actions';
import { ExternalInvoiceDetailsInitialvalues } from '../Actions/externalinvoicelistdetails.actions';
import { postExternalInvoiceInitialvalues } from '../Actions/externalInvoiceUpload.actions';
import { ForwardDatanull } from '../Actions/Forward.action';
import { getUsersForwardnull } from '../Actions/GetUsersForForward.actions';
import { getcustomerMyinboxInitialValue } from '../Actions/Myinbox.action';
import { getPatnerInitialValue } from '../Actions/patnerdetails.actions';
import { getERPDatanull } from '../Actions/postERP.action';
import { getqueriesListInitialValue } from '../Actions/querieslist.action';
import { SendRemindernull } from '../Actions/sendreminder.actions';
import { TrackerInitialValues } from '../Actions/tracker.action';
import { fetchforinvoicenull } from '../Actions/FetchForInvoice.action';
import { getSupportingDocumentnull } from '../Actions/invoicelistAttachmentssupportingdoc.action';
import { getcustomerInvoiceListQrCodenull } from '../Actions/invoicelistQrcode.actions';
import { customerupdateStatusnull } from '../Actions/updatestatus.action';
import {getcusPaidInvoiceListInitialvalues} from '../Actions/paidinvoicelist.action'
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
    this.layout.href.next("#/app/customer_manager/payables")
    this.layout.link.next("Current Invoices")
  }
  ngOnInit(): void {
    // const body=document.querySelector(".breadcrumb");
    // var link=document.createElement('a')
    // link.setAttribute('id','historical')
    // link.setAttribute('href','#/app/customer_manager/payables')
    // link.setAttribute('style','position:absolute;right:220px;top:8px;line-height:1px;padding-top: 8px;')
    // body?.appendChild(link)
    // var newBaitText = document.createTextNode("current invoices");
    // link.appendChild(newBaitText);
    // body?.appendChild(link)
    // const body1=document.querySelector(".breadcrumb");

    this.unpaid.arrow.subscribe((l)=>{
      //console.log(l)
      this.sidenav=l
    })

    this.store.select(getcustomerinvoicelist).subscribe(data =>{
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

    // document.getElementById('historical')?.remove()
    this.layout.link.next("")

    this.store.dispatch(customercommentsnull())
    this.store.dispatch(getExceptionInvoiceListInitialValue())
    this.store.dispatch(ExecuteActionnull())
    this.store.dispatch(ExternalInvoiceDetailsInitialvalues())
    this.store.dispatch(postExternalInvoiceInitialvalues())
    this.store.dispatch(ForwardDatanull())
    this.store.dispatch(getUsersForwardnull())
    this.store.dispatch(getcustomerInvoiceListInitialValue())
    this.store.dispatch(custInvoiceListDetailsInitialvalues())
    this.store.dispatch(getcustomerInvoiceListDetailsPdfnull())
    this.store.dispatch(getcustomerInvoiceListHistoryInitialValues())
    this.store.dispatch(getcustomerMyinboxInitialValue())
    this.store.dispatch(getPatnerInitialValue())
    this.store.dispatch(getERPDatanull())
    this.store.dispatch(getqueriesListInitialValue())
    this.store.dispatch(SendRemindernull())
    this.store.dispatch(TrackerInitialValues())

    this.store.dispatch(fetchforinvoicenull())
    this.store.dispatch(getCustomerinvoiceAttachmentsnull())
    this.store.dispatch(getSupportingDocumentnull())
    this.store.dispatch(getcustomerInvoiceListQrCodenull())
    // this.store.dispatch(getcustomerQueryListnull())
    this.store.dispatch(customerupdateStatusnull())
    this.store.dispatch(getcusPaidInvoiceListInitialvalues())
  }
}


