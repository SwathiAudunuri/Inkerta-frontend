import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paidanalysis',
  templateUrl: './paidanalysis.component.html',
  styleUrls: ['./paidanalysis.component.css']
})
export class PaidanalysisComponent implements OnInit {

  constructor() { }
  vendors:any
  ngOnInit(): void {
  }
  findByvendor(data:any){
    console.log(data.name)
    this.vendors=data.name
  }
}
