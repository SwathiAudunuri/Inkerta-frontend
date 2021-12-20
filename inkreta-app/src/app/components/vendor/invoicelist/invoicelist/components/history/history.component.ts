import { AfterViewInit, Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  Action: string;
  SlNo: number;
  Date: string;
  Status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {SlNo: 1, Action: 'Created', Date: '12-12-2020', Status: 'New'},
  {SlNo: 2, Action: 'Delivered', Date: '13-12-2020', Status: 'Submitted'},
  {SlNo: 3, Action: 'Status Update', Date: '14-12-2020', Status: 'OnHold'},
  {SlNo: 4, Action: 'Query Raised', Date: '15-12-2020', Status: 'Query'},
 
  
  
];
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements AfterViewInit{

  constructor(public dialogRef: MatDialogRef<HistoryComponent>) { }

  btn_enable=false
  row:any
  id:any
  Status:any
  Action:any
  Date:any
  @Output() respond :EventEmitter<any>=new EventEmitter()
  @Output() response :EventEmitter<any>=new EventEmitter()
  @ViewChild(MatPaginator, {static: false}) paginator:any;

  ngAfterViewInit() {
    this.dataSource.paginator=this.paginator

  }

  displayedColumns: string[] = ['SlNo', 'Action', 'Date', 'Status'];
 // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);


  querydetails(row:any){
    console.log(row)
    this.row=row
    this.id=this.row.SlNo
    this.Status=this.row.Status
    this.Action=this.row.Action
    this.Date=this.row.Date
    console.log(this.Action)
  }
  sendData(row:any){
    console.log(row)
    this.btn_enable=true
    this.respond.emit(row)
    this.row=row
    this.id=this.row.SlNo
    this.Status=this.row.Status
    this.Action=this.row.Action
    this.Date=this.row.Date

  }
  btn_response(){
    this.response.emit()
  }
  close(){
    this.dialogRef.close();
    
  }
}
