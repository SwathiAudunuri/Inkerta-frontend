import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-invoice',
  templateUrl: './inbox-invoice.component.html',
  styleUrls: ['./inbox-invoice.component.css']
})
export class InboxInvoiceComponent implements OnInit {
  @Input() data:any;
  @Input() id:any;
  constructor() { }

  ngOnInit(): void {
  }

}
