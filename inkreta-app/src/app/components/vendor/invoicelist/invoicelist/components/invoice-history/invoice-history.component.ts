import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  status: string;
  date: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {status: 'PAID', date: '24-08-21', description: 'invoice was paid in full'},
  {status: 'OVERDUE', date: '20-08-21', description: 'A late payment reminder was sent to your client'},
  {status: 'PARTIAL', date: '18-08-21', description: 'A payment was received'},
  {status: 'VIEWED', date: '15-08-21', description: 'Your client viewed the invoicce'},
  {status: 'SENT', date: '10-08-21', description: 'invoice sent to your client'},
  {status: 'DRAFT', date: '09-08-21', description: 'invoice was created'},
];
@Component({
  selector: 'app-invoice-history',
  templateUrl: './invoice-history.component.html',
  styleUrls: ['./invoice-history.component.css']
})
export class InvoiceHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['Status', 'Date', 'Description'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

}
