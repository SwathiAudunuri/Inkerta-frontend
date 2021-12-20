import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendormappingview',
  templateUrl: './vendormappingview.component.html',
  styleUrls: ['./vendormappingview.component.css']
})
export class VendormappingviewComponent implements OnInit {

  constructor() { }
  @Input() viewdetails:any;
  description : any =''
  status: any=''
  vendorPartnerId:any=''
  ngOnInit(): void {
  }
  ngDoCheck(){
    if(this.viewdetails!==null){
  console.log(this.viewdetails)
  this.description=this.viewdetails.description
  this.vendorPartnerId= this.viewdetails.vendorPartnerId
  this.status=this.viewdetails.status
    }
}
}
