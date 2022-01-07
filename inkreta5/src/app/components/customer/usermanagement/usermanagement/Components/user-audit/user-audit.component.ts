import { Component, Input, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any = [
  {when:'Aug 17, 2021 11:25:23',who:'Admin',operation:'User data changed',details:'role Admin added'},
  {when:'Aug 17, 2021 11:25:23',who:'Admin',operation:'User data changed',details:'role Admin removed'},
  {when:'Aug 17, 2021 11:25:25',who:'Admin',operation:'User data changed',details:'role Manager added'},
  {when:'Aug 17, 2021 11:25:25',who:'Admin',operation:'User data changed',details:'role Manager removed'}
]
@Component({
  selector: 'app-user-audit',
  templateUrl: './user-audit.component.html',
  styleUrls: ['./user-audit.component.css']
})
export class UserAuditComponent implements OnInit {
  audit:any="logins";
  @Input() Fullname:any;
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['when','details'];
  displayedColumns1: string[] = ['when', 'who', 'Operation', 'details'];
  displayedColumns2: string[] = ['when', 'target', 'Operation', 'details'];
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA;
}
