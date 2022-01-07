import { Component, Input, OnInit } from '@angular/core';
const ELEMENT_DATA: any = [
  {actionOn:'Aug 24, 2021 11:25:23',actionBy:'Swathi Adunuri',action:'Task updated'},
  {actionOn:'Aug 20, 2021 11:25:23',actionBy:'Swathi Adunuri',action:'Task commented'},
  {actionOn:'Aug 19, 2021 11:25:25',actionBy:'Swathi Adunuri',action:'Task inprogress'},
  {actionOn:'Aug 17, 2021 11:25:25',actionBy:'Swathi Adunuri',action:'Task changed'}
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
