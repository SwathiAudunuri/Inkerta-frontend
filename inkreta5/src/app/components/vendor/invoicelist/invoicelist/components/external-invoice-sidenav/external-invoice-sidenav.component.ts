import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { ViewChild } from '@angular/core';
import { saveAs } from 'file-saver';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { ExternalInvoiceStatusComponent } from './components/external-invoice-status/external-invoice-status.component';
import { SendreminderComponent } from '../sendreminder/sendreminder.component';
import { PartitalUpdateStatusComponent } from '../partital-update-status/partital-update-status.component';

@Component({
  selector: 'app-external-invoice-sidenav',
  templateUrl: './external-invoice-sidenav.component.html',
  styleUrls: ['./external-invoice-sidenav.component.css']
})
export class ExternalInvoiceSidenavComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  arrow: any = true;
  blob: any = null;
  invstatus: any;
  constructor(public dialog: MatDialog, public unpaid: UnpaidService) {

  }
  ngOnInit() { 
    this.unpaid.tab = 0;
    this.unpaid.changetab.next(0)
    this.unpaid.status.subscribe((status)=>{
      //console.log(status)
      this.invstatus = status
      // this.cdref.detectChanges();
    })
  }
  ondownload() {
    // saveAs(this.blob, "invoice.pdf")
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
    // const dialogRef = this.dialog.open(InvoicedetailsComponent);
  }
  openDialog(item: any) {
    if (item === 'Update status') {

      if( this.invstatus === 'Partially Paid' ){
        const dialogRef = this.dialog.open(PartitalUpdateStatusComponent, { panelClass: 'custom-dialog-container',disableClose: true,data:true });
      }
      else{
        const dialogRef = this.dialog.open(ExternalInvoiceStatusComponent, { panelClass: 'custom-dialog-container',disableClose: true });
      }

    };

    if (item === 'Send Reminder') {
      const dialogRef = this.dialog.open(SendreminderComponent, { panelClass: 'custom-dialog-container',disableClose: true,data: { "external": true } });

      dialogRef.afterClosed().subscribe(result => {
      });
    }


    // }
    // if (item === 'History') {
    //   const dialogRef = this.dialog.open(HistoryComponent, { panelClass: 'custom-dialog-container',disableClose: true });

    //   dialogRef.afterClosed().subscribe(result => {
    //     // //console.log(`Dialog result: ${result}`);
    //   });
    // }
    // if (item === 'QR Code') {
    //   const dialogRef = this.dialog.open(InvoiceQrcodePopupComponent, { panelClass: 'custom-dialog-container',disableClose: true});

    //   dialogRef.afterClosed().subscribe(result => {
    //     // //console.log(`Dialog result: ${result}`);
    //   });
    // }
    // if (item === 'Dicard') {
    //   const dialogRef = this.dialog.open(InvoiceDiscardComponent, { panelClass: 'custom-dialog-container',disableClose: true });

    // }
  }
  selectedIndexBinding(event: any) {
    this.unpaid.tab = event.index
    this.unpaid.changetab.next(event.index
    )
  }
  ngOnDestroy() {
    this.unpaid.tab = 0
  }
}
