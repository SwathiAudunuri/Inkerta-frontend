import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HistoryComponent } from '../history/history.component';
import { QuerydialogComponent } from '../querydialog/querydialog.component';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { ViewChild } from '@angular/core';
import { saveAs } from 'file-saver';
import { InvoicedetailsComponent } from 'src/app/components/vendor/invoicedetails/invoicedetails/invoicedetails.component';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';
import { SendreminderComponent } from '../sendreminder/sendreminder.component';
import { InvoiceQrcodePopupComponent } from '../invoice-qrcode-popup/invoice-qrcode-popup.component';
import { InvoiceDiscardComponent } from '../invoice-discard/invoice-discard.component';
import { PartitalUpdateStatusComponent } from '../partital-update-status/partital-update-status.component';

@Component({
  selector: 'app-partital-paid-invoice-sidenav',
  templateUrl: './partital-paid-invoice-sidenav.component.html',
  styleUrls: ['./partital-paid-invoice-sidenav.component.css']
})
export class PartitalPaidInvoiceSidenavComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  arrow: any = true;
  blob: any = null;
  constructor(public dialog: MatDialog, public unpaid: UnpaidService) {

  }
  ngOnInit() { 
    this.unpaid.tab = 0;
    this.unpaid.changetab.next(0)
  }
  ondownload() {
    saveAs(this.blob, "invoice.pdf")
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
    const dialogRef = this.dialog.open(InvoicedetailsComponent);
  }
  openDialog(item: any) {
    if (item === 'Update status') {
      const dialogRef = this.dialog.open(PartitalUpdateStatusComponent, { panelClass: 'custom-dialog-container',disableClose: true,data:false });

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
      const dialogRef = this.dialog.open(SendreminderComponent, { panelClass: 'custom-dialog-container',disableClose: true ,data: { "external": false }});

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
      const dialogRef = this.dialog.open(InvoiceQrcodePopupComponent, { panelClass: 'custom-dialog-container',disableClose: true});

      dialogRef.afterClosed().subscribe(result => {
        // //console.log(`Dialog result: ${result}`);
      });
    }
    if (item === 'Dicard') {
      const dialogRef = this.dialog.open(InvoiceDiscardComponent, { panelClass: 'custom-dialog-container',disableClose: true });

    }
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
