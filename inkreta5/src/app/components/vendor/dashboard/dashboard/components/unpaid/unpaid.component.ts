import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ModalDismissReasons, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { HistoryComponent } from 'src/app/components/customer/invoicelist/invoicelist/components/history/history.component';
import { QuerydialogComponent } from 'src/app/components/customer/invoicelist/invoicelist/components/querydialog/querydialog.component';
import { UpdatestatusComponent } from 'src/app/components/customer/invoicelist/invoicelist/components/updatestatus/updatestatus.component';
import { Constants } from 'src/app/constants/constants';
import { getInvoiceListaction } from 'src/app/components/vendor/invoicelist/Actions/invoicelist.action';
import { getinvoicelist } from 'src/app/components/vendor/invoicelist/Selectors/invoice.selector';
import { InvoiceHistoryComponent } from '../invoice-history/invoice-history.component';


export interface PeriodicElement {
  invoicenum: string;
  Date:string;
  company_name: string;
  total_invoice_value: number;
  invoiceduedate: string;
  StatusOfInv:string;
  Action:Array<any>;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {invoicenum : '15b81a05a5', Date: '12-1-2021', company_name: 'Doctor Reddys Laboratoraries', total_invoice_value: 50000,invoiceduedate :'10-2-2021',StatusOfInv:'New',Action:["Update status","Raise Query","History"]},
  {invoicenum : '15b81a05a6', Date: '1-11-2021', company_name: 'capgemini consultancy', total_invoice_value: 20000,invoiceduedate :'10-12-2021',StatusOfInv:'Onhold', Action:["Update status","Raise Query","History"]},
  {invoicenum : '15b81a05a7', Date: '12-10-2021', company_name: 'Attra Company', total_invoice_value: 30000,invoiceduedate :'10-11-2021',StatusOfInv:'New',Action:["Raise Query"] },
  {invoicenum : '15b81a05a8', Date: '12-9-2021', company_name: 'tecnics integratrion limited', total_invoice_value: 150000,invoiceduedate :'10-10-2021',StatusOfInv:'Query',Action:["Update status","Raise Query"]},
  {invoicenum : '15b81a05a9', Date: '12-8-2021', company_name: 'Doctor Reddys Laboratoraries', total_invoice_value: 35000,invoiceduedate :'10-9-2021',StatusOfInv:'New',Action:["Update status","Raise Query"]},
  {invoicenum : '15b81a05a10', Date: '1-11-2021', company_name: 'Doctor Reddys Laboratoraries', total_invoice_value: 5000,invoiceduedate :'10-12-2021',StatusOfInv:'Onhold', Action:["Update status","Raise Query"]},
  {invoicenum : '15b81a05a11', Date: '12-10-2021', company_name: 'Doctor Reddys Laboratoraries', total_invoice_value: 70000,invoiceduedate :'10-11-2021',StatusOfInv:'Onhold',Action:["Raise Query"] },
  {invoicenum : '15b81a05a12', Date: '12-9-2021', company_name: 'Doctor Reddys Laboratoraries', total_invoice_value: 60000,invoiceduedate :'10-10-2021',StatusOfInv:'Query',Action:["Update status","Raise Query"]},
  {invoicenum : '15b81a05a13', Date: '12-8-2021', company_name: 'Doctor Reddys Laboratoraries', total_invoice_value: 35000,invoiceduedate :'10-9-2021',StatusOfInv:'New',Action:["Update status","Raise Query"]},

];
@Component({
  selector: 'app-unpaid',
  templateUrl: './unpaid.component.html',
  styleUrls: ['./unpaid.component.css']
})
export class UnpaidComponent implements OnInit {

  InvoiceNo:any
  invoicenum:any
  row_index:any
  customerinvoicelist:any
    @ViewChild(MatPaginator, {static: false}) paginator:any;
    @ViewChild(MatSort) sort:MatSort[]=[];
    dataSource:any=[]
  service2: any;
    constructor(public dialog: MatDialog,private store:Store){}
    Action=["Update status","Raise Query","History","Send Reminder"]
  ngOnInit(){
    this.store.dispatch(getInvoiceListaction({url : Constants.VenderUpaidInvoiceList}))

    this.service2 = this.store.select(getinvoicelist).subscribe((data:any)=>{
      //console.log(data)
      if(data?.unpaid){
        //console.log(data)
          if(data?.unpaid?.invoices?.hasError){

          }
          else{
            this.dataSource= new MatTableDataSource<any>(data?.unpaid?.invoices?.results);
          this.dataSource.paginator=this.paginator
          this.dataSource.sort = this.sort;
          }
      }

    })
  } 
  ngAfterViewInit() {
   
 //   this.dataSource.sort = this.sort;
  }
    
  displayedColumns= ['invoicenum','company_name','total_invoice_value','invoiceduedate','invoice_status','Action'];
  //this.displayedColumns= ['select','invoicenum','company_name','total_invoice_value','invoiceduedate','invoice_status','Action'];
    openDialog(item:any,element:any) {
      if(item==='Update status'){
        //console.log(element)
        const dialogRef = this.dialog.open(UpdatestatusComponent,{panelClass: 'custom-update-dialog-container' ,data:element});
  
      // dialogRef.afterClosed().subscribe(result => {
      //   //console.log(`Dialog result: ${result}`);
      // })
    };
  
      if(item==='Raise Query'){
      const dialogRef = this.dialog.open(QuerydialogComponent,{data: element });
  
      // dialogRef.afterClosed().subscribe(result => {
      //   //console.log(`Dialog result: ${result}`);
      // });
      
    
    }
    if(item==='History'){
      const dialogRef = this.dialog.open(InvoiceHistoryComponent,{panelClass: 'custom-dialog-container',data: element });
  
      // dialogRef.afterClosed().subscribe(result => {
      //   //console.log(`Dialog result: ${result}`);
      // });
    }
  }


  tr_highlight(element:any){
    this.InvoiceNo=element.invoicenum 
    
  }
  ngOnDestroy() {
    this.service2.unsubscribe()
  }
}
