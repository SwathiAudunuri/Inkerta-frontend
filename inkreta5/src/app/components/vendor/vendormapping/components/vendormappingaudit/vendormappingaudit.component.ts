import { Component, OnInit } from '@angular/core';
const ELEMENT_DATA: any = [
  {actionOn:'Aug 24, 2021 11:25:23',actionBy:'Admin',action:'Vendor updated'},
  {actionOn:'Aug 20, 2021 11:25:23',actionBy:'Admin',action:'Vendor details updated'},
  {actionOn:'Aug 19, 2021 11:25:25',actionBy:'Admin',action:'Vendor added'},
  {actionOn:'Aug 17, 2021 11:25:25',actionBy:'Admin',action:'Vendor changed'}
]
@Component({
  selector: 'app-vendormappingaudit',
  templateUrl: './vendormappingaudit.component.html',
  styleUrls: ['./vendormappingaudit.component.css']
})
export class VendormappingauditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['actionOn','actionBy','action'];
  dataSource=ELEMENT_DATA;
}
