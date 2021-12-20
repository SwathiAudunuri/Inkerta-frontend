import { Component, Input, OnInit } from '@angular/core';
const ELEMENT_DATA: any = [
  {actionOn:'Aug 24, 2021 11:25:23',actionBy:'Admin',action:'Task updated'},
  {actionOn:'Aug 20, 2021 11:25:23',actionBy:'Admin',action:'Task commented'},
  {actionOn:'Aug 19, 2021 11:25:25',actionBy:'Admin',action:'Task inprogress'},
  {actionOn:'Aug 17, 2021 11:25:25',actionBy:'Admin',action:'Task changed'}
]
@Component({
  selector: 'app-audittodo',
  templateUrl: './audittodo.component.html',
  styleUrls: ['./audittodo.component.css']
})
export class AudittodoComponent implements OnInit {
  @Input() title:any;
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['actionOn','actionBy','action'];
  dataSource=ELEMENT_DATA;
}
