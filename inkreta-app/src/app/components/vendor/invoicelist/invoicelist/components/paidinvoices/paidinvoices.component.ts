
import { AfterViewInit, Component, OnInit,Output,EventEmitter, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

export interface PeriodicElement {
  InvoiceNo: number;
  Date:string;
  VendorName: string;
  Amount: number;
  DueDate: string;
  StatusOfInv:string;
  Action:Array<any>;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {InvoiceNo : 1, Date: '12-1-21', VendorName: 'DRL', Amount: 50000,DueDate :'10-2-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 2, Date: '1-11-21', VendorName: 'Attra', Amount: 20000,DueDate :'10-12-21',StatusOfInv:'Paid', Action:["Update status","Raise Query"]},
  {InvoiceNo : 3, Date: '12-10-21', VendorName: 'Capgemini', Amount: 30000,DueDate :'10-11-21',StatusOfInv:'Paid',Action:["Raise Query"] },
  {InvoiceNo : 4, Date: '12-9-21', VendorName: 'DRL', Amount: 150000,DueDate :'10-10-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 5, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 6, Date: '1-11-21', VendorName: 'DRL', Amount: 5000,DueDate :'10-12-21',StatusOfInv:'Paid', Action:["Update status","Raise Query"]},
  {InvoiceNo : 7, Date: '12-10-21', VendorName: 'tecnics', Amount: 70000,DueDate :'10-11-21',StatusOfInv:'Paid',Action:["Raise Query"] },
  {InvoiceNo : 8, Date: '12-9-21', VendorName: 'mahindra', Amount: 60000,DueDate :'10-10-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 19, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 14, Date: '12-9-21', VendorName: 'DRL', Amount: 150000,DueDate :'10-10-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 15, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 16, Date: '1-11-21', VendorName: 'DRL', Amount: 5000,DueDate :'10-12-21',StatusOfInv:'Paid', Action:["Update status","Raise Query"]},
  {InvoiceNo : 17, Date: '12-10-21', VendorName: 'tecnics', Amount: 70000,DueDate :'10-11-21',StatusOfInv:'Paid',Action:["Raise Query"] },
  {InvoiceNo : 18, Date: '12-9-21', VendorName: 'mahindra', Amount: 60000,DueDate :'10-10-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 19, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 24, Date: '12-9-21', VendorName: 'DRL', Amount: 150000,DueDate :'10-10-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 25, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 26, Date: '1-11-21', VendorName: 'DRL', Amount: 5000,DueDate :'10-12-21',StatusOfInv:'Paid', Action:["Update status","Raise Query"]},
  {InvoiceNo : 27, Date: '12-10-21', VendorName: 'tecnics', Amount: 70000,DueDate :'10-11-21',StatusOfInv:'Paid',Action:["Raise Query"] },
  {InvoiceNo : 28, Date: '12-9-21', VendorName: 'mahindra', Amount: 60000,DueDate :'10-10-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},
  {InvoiceNo : 29, Date: '12-8-21', VendorName: 'DRL', Amount: 35000,DueDate :'10-9-21',StatusOfInv:'Paid',Action:["Update status","Raise Query"]},

];
@Component({
  selector: 'app-paidinvoices',
  templateUrl: './paidinvoices.component.html',
  styleUrls: ['./paidinvoices.component.css']
})
export class PaidinvoicesComponent implements AfterViewInit {
  constructor(private _router: Router) { }
  row:any
  id:any
  by:any
  querydescription:any
  raisedon:any
  searchKey:string=""
  @Input() noofrows:any;
  @Input() tablewidth:any;
  @Output() respond :EventEmitter<any>=new EventEmitter()
  @Output() response :EventEmitter<any>=new EventEmitter()
  @ViewChild(MatPaginator, {static: false}) paginator:any;
  @ViewChild(MatSort) sort:any
  @Input() filterbyVendor:any;

  ngAfterViewInit() {
    this.dataSource.paginator=this.paginator
    this.dataSource.sort = this.sort;

   // this.dataSource.filter= this.searchKey.trim().toLowerCase()

  }

  
  displayedColumns: string[] = ['InvoiceNo', 'Date', 'VendorName', 'Amount','DueDate','StatusOfInv'];
 // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  

  


  invoicedetails(row:PeriodicElement){
    this.row=row
    console.log(this.row.InvoiceNo)
    this._router.navigate(['/app/vendor_manager/invoicedetails',row.InvoiceNo])

    console.log(row)
    
  }

  applyFilter(){
    console.log(this.searchKey)
    this.dataSource.filter= this.searchKey.trim().toLowerCase()

    }
    ngOnChanges()	{
      console.log(this.filterbyVendor)
        if(this.filterbyVendor!=undefined ){
      this.dataSource.filter= this.filterbyVendor.trim().toLowerCase()
    }
  }
}
