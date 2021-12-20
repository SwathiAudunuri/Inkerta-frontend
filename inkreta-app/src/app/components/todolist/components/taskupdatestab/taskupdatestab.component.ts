import { Component, OnInit } from '@angular/core';
const ELEMENT_DATA: any = [
  {actionOn:'Aug 24, 2021 11:25:23',actionBy:'Admin',comments:'Task updated'},
  {actionOn:'Aug 20, 2021 11:25:23',actionBy:'Admin',comments:'Task commented'},
  {actionOn:'Aug 19, 2021 11:25:25',actionBy:'Admin',comments:'Task inprogress'},
  {actionOn:'Aug 17, 2021 11:25:25',actionBy:'Admin',comments:'Task changed'}
]
@Component({
  selector: 'app-taskupdatestab',
  templateUrl: './taskupdatestab.component.html',
  styleUrls: ['./taskupdatestab.component.css']
})
export class TaskupdatestabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['actionOn','comments'];
  dataSource=ELEMENT_DATA;
}
