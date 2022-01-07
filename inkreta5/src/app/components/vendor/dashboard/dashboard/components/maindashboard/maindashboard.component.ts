import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css'],
  animations:[
    trigger('carouselAnimation',[
      transition('void=>*',[
        style({opacity:0}),
        animate('2s')

      ])
    ])
  ]

})
export class MaindashboardComponent implements OnInit {

  @Output()  findByvendor:EventEmitter<any>=new EventEmitter(); 
  @Input() vendors:any
  constructor() { }
  OpenInvoices:String ="Open Invoices" 
  ngOnInit(): void {
  }

  findByVendor(data:any){
    //console.log(data)
    this.findByvendor.emit(data)
    
  }
  onLinkClick(event: MatTabChangeEvent) {

    //console log all the data that the event returns
    //console.warn('event => ', event);
    //console.warn('index => ', event.index);
    //console.warn('tab => ', event.tab);
    if(event.index==0){
      event.index=1
    }
  
    //replace the string here with the data returned by the last //console.log
    // if(event.tab == "your selected tab") {
    //    // this.loadCards(true); 
    // }
}
}
