import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-query',
  templateUrl: './inbox-query.component.html',
  styleUrls: ['./inbox-query.component.css']
})
export class InboxQueryComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
