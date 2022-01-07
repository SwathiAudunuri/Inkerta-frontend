import { Component, Input, OnInit } from '@angular/core';
const ELEMENT_DATA: any = [
  {actionOn:'Aug 24, 2021 11:25:23',actionBy:'Admin',action:'Delivery mode updated'},
  {actionOn:'Aug 20, 2021 11:25:23',actionBy:'Admin',action:'RecipientTag changed'},
  {actionOn:'Aug 19, 2021 11:25:25',actionBy:'Admin',action:'Address changed'},
  {actionOn:'Aug 17, 2021 11:25:25',actionBy:'Admin',action:'Delivery Mechanism updated'}
]
@Component({
  selector: 'app-recaudit',
  templateUrl: './recaudit.component.html',
  styleUrls: ['./recaudit.component.css']
})
export class RecauditComponent implements OnInit {
  @Input() recipientTag:any;
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['actionOn','actionBy','action'];
  dataSource=ELEMENT_DATA;
}
