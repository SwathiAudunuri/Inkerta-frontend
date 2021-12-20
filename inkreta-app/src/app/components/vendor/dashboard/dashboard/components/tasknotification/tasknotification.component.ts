import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasknotification',
  templateUrl: './tasknotification.component.html',
  styleUrls: ['./tasknotification.component.css']
})
export class TasknotificationComponent implements OnInit {

  constructor() { }
  @Input() feed:any
  ngOnInit(): void {
  }

}
