import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {

  @Output()  findByvendor:EventEmitter<any>=new EventEmitter(); 
  @Input() vendors:any
  constructor() { }
  OpenInvoices:String ="Open Invoices" 
  ngOnInit(): void {
  }

  findByVendor(data:any){
    console.log(data)
    this.findByvendor.emit(data)
    
  }
}
