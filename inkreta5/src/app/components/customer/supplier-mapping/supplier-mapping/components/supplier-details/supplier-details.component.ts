import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../supplier-mapping.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {
  error: any;

  constructor(public supplierservice:SupplierService) { }

  ngOnInit() {
    this.supplierservice.error.subscribe((data)=>
    {
      this.error = data
    })
  }
  closesidenav(){
    this.supplierservice.sidenav.next(false)
  }

}
