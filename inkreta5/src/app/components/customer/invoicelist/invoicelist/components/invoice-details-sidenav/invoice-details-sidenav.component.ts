import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UnpaidService } from '../unpaidinvoices/unpaid.service';

@Component({
  selector: 'app-invoice-details-sidenav',
  templateUrl: './invoice-details-sidenav.component.html',
  styleUrls: ['./invoice-details-sidenav.component.css']
})
export class InvoiceDetailsSidenavComponent implements OnInit {
  public status:any;
  external: any;
  
  constructor(private unpaid:UnpaidService,private cdref: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.unpaid.status.subscribe((status)=>{
      //console.log(status)
      this.status = status
      this.cdref.detectChanges();
    })
    this.unpaid.external.subscribe((data)=>{
      this.external = data
      this.cdref.detectChanges();
    })
  }
}
