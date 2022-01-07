import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-query-sidenav',
  templateUrl: './query-sidenav.component.html',
  styleUrls: ['./query-sidenav.component.css']
})
export class QuerySidenavComponent implements OnInit {
  @Input() details:any;
  @Output() childEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  closesidenav(){
    this.childEvent.emit(false)
  }

}
