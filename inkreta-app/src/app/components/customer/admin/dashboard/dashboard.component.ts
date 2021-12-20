import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
active:any=true
c:any=10
b:any
errordata(){
  const a=null;

  this.b=this.c/0
  this.c =this.b/0

}

}
