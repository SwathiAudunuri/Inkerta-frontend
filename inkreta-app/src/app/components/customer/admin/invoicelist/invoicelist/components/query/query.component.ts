import { AfterViewInit, Component, OnInit,Output,EventEmitter, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularEditorConfig } from '@kolkov/angular-editor';

export interface PeriodicElement {
  querydescription: string;
  queryid: number;
  raisedon: string;
  by: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {queryid: 1, querydescription: 'Invoice amount mismatch1', raisedon: '12-12-2020', by: 'Vendor'},
  {queryid: 2, querydescription: 'Invoice amount mismatch2', raisedon: '13-12-2020', by: 'Vendor'},
  {queryid: 3, querydescription: 'Invoice amount mismatch3', raisedon: '14-12-2020', by: 'Vendor'},
  {queryid: 4, querydescription: 'Invoice amount mismatch', raisedon: '15-12-2020', by: 'Vendor'},
  {queryid: 5, querydescription: 'Invoice amount mismatch', raisedon: '16-12-2020', by: 'Vendor'},
  {queryid: 6, querydescription: 'Invoice amount mismatch', raisedon: '12-12-2020', by: 'Vendor'},
  {queryid: 7, querydescription: 'Invoice amount mismatch', raisedon: '13-12-2020', by: 'Vendor'},
  {queryid: 8, querydescription: 'Invoice amount mismatch', raisedon: '14-12-2020', by: 'Vendor'},
  {queryid: 9, querydescription: 'Invoice amount mismatch', raisedon: '15-12-2020', by: 'Vendor'},
  {queryid: 10, querydescription: 'Invoice amount mismatch', raisedon: '16-12-2020', by: 'Vendor'},
  {queryid: 11, querydescription: 'Invoice amount mismatch', raisedon: '14-12-2020', by: 'Vendor'},
  {queryid: 12, querydescription: 'Invoice amount mismatch', raisedon: '15-12-2020', by: 'Vendor'},
  {queryid: 13, querydescription: 'Invoice amount mismatch', raisedon: '16-12-2020', by: 'Vendor'},

  
];
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements AfterViewInit{

  constructor() { }
  @Input() noofrows:any;
  btn_enable=false
  row:any
  id:any
  by:any
  querydescription:any
  raisedon:any
  @Output() respond :EventEmitter<any>=new EventEmitter()
  @Output() response :EventEmitter<any>=new EventEmitter()
  @ViewChild(MatPaginator, {static: false}) paginator:any;

  ngAfterViewInit() {
    this.dataSource.paginator=this.paginator
  }

  displayedColumns: string[] = ['queryid', 'querydescription', 'raisedon', 'by'];
 // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);


  querydetails(row:any){
    console.log(row)
    this.row=row
    this.id=this.row.queryid
    this.by=this.row.by
    this.querydescription=this.row.querydescription
    this.raisedon=this.row.raisedon
    console.log(this.querydescription)
  }
  sendData(row:any){
    console.log(row)
    this.btn_enable=true
    this.respond.emit(row)
    this.row=row
    this.id=this.row.queryid
    this.by=this.row.by
    this.querydescription=this.row.querydescription
    this.raisedon=this.row.raisedon

  }
  btn_response(){
    this.response.emit()
  }
  
}
