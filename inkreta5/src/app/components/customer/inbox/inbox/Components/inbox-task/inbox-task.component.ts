import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-task',
  templateUrl: './inbox-task.component.html',
  styleUrls: ['./inbox-task.component.css']
})
export class InboxTaskComponent implements OnInit {
  @Input() data:any; 
  constructor() { }

  ngOnInit(): void {
  }

}
