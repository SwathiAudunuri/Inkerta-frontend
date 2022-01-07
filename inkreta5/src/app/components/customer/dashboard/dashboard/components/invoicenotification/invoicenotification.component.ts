import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoicenotification',
  templateUrl: './invoicenotification.component.html',
  styleUrls: ['./invoicenotification.component.css']
})
export class InvoicenotificationComponent implements OnInit {

  constructor() { }
  @Input() feed:any;

  ngOnInit(): void {
    //console.log(this.feed)
  }

}
