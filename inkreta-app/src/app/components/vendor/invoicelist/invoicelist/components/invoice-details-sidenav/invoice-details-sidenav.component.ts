import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HistoryComponent } from '../history/history.component';
import { QuerydialogComponent } from '../querydialog/querydialog.component';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-invoice-details-sidenav',
  templateUrl: './invoice-details-sidenav.component.html',
  styleUrls: ['./invoice-details-sidenav.component.css']
})
export class InvoiceDetailsSidenavComponent implements OnInit {
  @Output() public childEvent = new EventEmitter()
  @Input() public details:any;
  @Input() public backarrow:any;
  InvoiceNo:any="";
  Date:any="";
  VendorName:any="";
  Status:any="";
  DueDate:any="";
  Amount:any="";
  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  constructor(private _router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    console.log(this.details)
    if(this.details !== null){
      this.InvoiceNo = this.details.InvoiceNo
      this.Date = this.details.Date
      this.VendorName = this.details.VendorName
      this.Status = this.details.StatusOfInv
      this.DueDate = this.details.DueDate
      this.Amount = this.details.Amount
    }
  }
  closesidenav(){
    this.childEvent.emit(false)
  }
  viewmore(){
    this._router.navigate(['app/vendor_manager/invoicedetails',this.InvoiceNo])
  }
  openDialog(item:any) {
    if(item==='Update status'){
      const dialogRef = this.dialog.open(UpdatestatusComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    })
  };

    if(item==='Raise Query'){
    const dialogRef = this.dialog.open(QuerydialogComponent,{panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
    
  
  }
  if(item==='History'){
    const dialogRef = this.dialog.open(HistoryComponent,{panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  if(item === 'Mark_As_Complete'){
    
  }
}

}
