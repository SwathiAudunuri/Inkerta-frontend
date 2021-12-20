import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  Action: string;
  SlNo: number;
  Date: string;
  Status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {SlNo: 1, Action: 'Edit', Date: '12-12-2020', Status: 'Saved'},
  {SlNo: 2, Action: 'Edit', Date: '13-12-2020', Status: 'Saved'},
  {SlNo: 3, Action: 'Edit', Date: '14-12-2020', Status: 'Saved'},
  {SlNo: 4, Action: 'Edit', Date: '15-12-2020', Status: 'Saved'},
 
  
  
];
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['../profilemanagement.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { 
  }
  @Input() Additional_Details:any;
  dataSource:any;
  ngOnInit(): void {
  }
  ngDoCheck(){
    this.dataSource = new MatTableDataSource<any>(this.Additional_Details.value.historysaved);
    // console.log(this.Additional_Details)
  }
  displayedColumns: string[] = ['SlNo', 'Action', 'Date', 'Status'];
  // dataSource = ELEMENT_DATA;
  //  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  

}
