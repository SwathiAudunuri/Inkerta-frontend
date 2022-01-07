import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aginganalysis',
  templateUrl: './aginganalysis.component.html',
  styleUrls: ['./aginganalysis.component.css']
})
export class AginganalysisComponent implements OnInit {

  constructor() { }
  vendor:any

  ngOnInit(): void {
  }
  filterByVendor(data:any){
    //console.log(data)
    this.vendor=data.name
  }

}
