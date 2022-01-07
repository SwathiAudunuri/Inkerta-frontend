import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-querynotification',
  templateUrl: './querynotification.component.html',
  styleUrls: ['./querynotification.component.css']
})
export class QuerynotificationComponent implements OnInit {

  constructor() { }
@Input() feed:any
  ngOnInit(): void {
  }

}
