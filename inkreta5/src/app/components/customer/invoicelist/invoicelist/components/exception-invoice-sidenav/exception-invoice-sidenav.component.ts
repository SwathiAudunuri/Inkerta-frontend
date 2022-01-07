import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HistoryComponent } from '../history/history.component';
import { QuerydialogComponent } from '../querydialog/querydialog.component';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { ViewChild } from '@angular/core';
import { saveAs } from 'file-saver';
import { InvoicedetailsComponent } from 'src/app/components/customer/invoicedetails/invoicedetails/invoicedetails.component';
import { Store } from '@ngrx/store';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { SendreminderComponent } from 'src/app/components/customer/invoicelist/invoicelist/components/sendreminder/sendreminder.component';
import { InvoiceQrcodePopupComponent } from '../invoice-qrcode-popup/invoice-qrcode-popup.component';
import { FormControl } from '@angular/forms';
import { LoadingService } from 'src/app/loading/loading.service';
import { PostIntoErpComponent } from '../post-into-erp/post-into-erp.component';
import { ForwardpopupComponent } from '../forwardpopup/forwardpopup.component';
import { CommentsComponent } from '../comments/comments.component';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { fetchforinvoice } from '../../../Actions/FetchForInvoice.action';
import { fetchforinvoices } from '../../../Selectors/invoice.selector';
import { BehaviorSubject } from 'rxjs';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
@Component({
  selector: 'app-exception-invoice-sidenav',
  templateUrl: './exception-invoice-sidenav.component.html',
  styleUrls: ['./exception-invoice-sidenav.component.css']
})
export class ExceptionInvoiceSidenavComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup:any;
  faNetworkWired:any=faNetworkWired
 // @Input() selected:any;
  // this.unpaid.ref
  selected = new FormControl(0);
  // @Input() public tabs:any;
  // @Output() public childEvent = new EventEmitter()
  // @Input() public details: any;
  // @Input() public backarrow: any;
  // InvoiceNo: any = "";
  Date: any = "";
  VendorName: any = "";
  Status: any = "";
  DueDate: any = "";
  Amount: any = "";
  Action: any;
  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;  

  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  arrow: any = true;
  blob: any = null;
  // invoicelist: any = [];
  document_ref_id: any;
  // invoicelistdetails: any;
  buyuyerName: any;
  loading: any = false
  date: any = new Date()
  // status1: any;
  // @Input() invoicesidenav: any;
  dtab: string | undefined;
  fetchforinvoices:any
  
// @Input() tabs:any;
laodforinvoices=new BehaviorSubject<boolean>(false)
  constructor(private cdref: ChangeDetectorRef,private componentFactoryResolver: ComponentFactoryResolver,private _router: Router, public dialog: MatDialog, private store: Store, public unpaid: UnpaidService, private cdr: ChangeDetectorRef, public loader: LoadingService) {
  }
  
  loading$ = this.loader.loading$;

  ngAfterViewInit(){

  }
  ngOnInit() {  
    this.unpaid.fetchforinvoice.subscribe(data=>{
      this.store.dispatch(fetchforinvoice({doc_refid: this.unpaid.ref}))
      this.laodforinvoices.next(true)

    })
    this.laodforinvoices.subscribe(data=>{
      this.store.select(fetchforinvoices).subscribe(data=>{
        if(data.result){
        this.fetchforinvoices=data.result.res.results
        //console.log(data)
        }
      })
    })
  }
  
  ondownload() {
    saveAs(this.blob, "invoice.pdf")
  }
  openCustomDialog(item:any){
    this.unpaid.customactionname.next(item)
    const dialogRef = this.dialog.open(CustomDialogComponent, { panelClass: 'custom-update-dialog-container',disableClose: true });
  }
  closesidenav() {
    this.arrow = false
    this.unpaid.arrow.next(false)
  }
  closesidenav1() {
    this.arrow = true
    this.unpaid.arrow.next(true)
  }
  viewmore() {
    // this._router.navigate(['app/vendor_manager/invoicedetails',this.InvoiceNo])
    const dialogRef = this.dialog.open(InvoicedetailsComponent);
  }
  forward(){
    const dialogRef = this.dialog.open(ForwardpopupComponent,{panelClass: 'custom-update-dialog-container',disableClose: true,data: { "external": false } });
  }
  comment(){
    const DialogConfig = new MatDialogConfig();
    DialogConfig.position={  top:'150px',left: '1030px' }
    DialogConfig.panelClass='custom-update-dialog-container'
    DialogConfig.backdropClass='bdrop'
    // const dialogRef = this.dialog.open(CommentsComponent,{panelClass: 'custom-update-dialog-container'});
    const dialogRef = this.dialog.open(CommentsComponent, DialogConfig);
  }
  openDialog(item: any) {
    if (item === 'Update status') {
      // const dialogRef = this.dialog.open(UpdatestatusComponent,{data:this.details});
      const dialogRef = this.dialog.open(UpdatestatusComponent, { panelClass: 'custom-update-dialog-container',disableClose: true });
      dialogRef.afterClosed().subscribe(result => {
        // //console.log(`Dialog result: ${result}`);
      })
    };

    if (item === 'Raise Query') {
      const dialogRef = this.dialog.open(QuerydialogComponent, { panelClass: 'custom-dialog-container',disableClose: true });

      dialogRef.afterClosed().subscribe(result => {
      });


    }
    if (item === 'Send Reminder') {
      const dialogRef = this.dialog.open(SendreminderComponent, { panelClass: 'custom-dialog-container',disableClose: true,data: { "external": false } });

      dialogRef.afterClosed().subscribe(result => {
      });


    }
    if (item === 'History') {
      const dialogRef = this.dialog.open(HistoryComponent, { panelClass: 'custom-dialog-container',disableClose: true });

      dialogRef.afterClosed().subscribe(result => {
        // //console.log(`Dialog result: ${result}`);
      });
    }
    if (item === 'QR Code') {
      const dialogRef = this.dialog.open(InvoiceQrcodePopupComponent, { panelClass: 'custom-dialog-container',disableClose: true });

      dialogRef.afterClosed().subscribe(result => {
        // //console.log(`Dialog result: ${result}`);
      });

    }
    if(item==='ERP'){
      const dialogRef = this.dialog.open(PostIntoErpComponent,{panelClass: 'custom-dialog-container',disableClose: true });
    }
    if(item==='Forward'){
      const dialogRef = this.dialog.open(ForwardpopupComponent,{panelClass: 'custom-update-dialog-container',disableClose: true });
    }
  }
  selectedIndexBinding(event: any) {
    this.unpaid.tab = event.index
    this.unpaid.changetab.next(event.index
    )
  }
  ngOnDestroy() {
    this.unpaid.tab = 0
    // this.unpaid.tab = null
    // this.unpaid.changetab.next(0)
    // this.container.remove();
    // this.service.unsubscribe()
    // this.service1.unsubscribe()
  }


}
