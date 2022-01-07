import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SupplierListInitialValue } from '../Actions/SupplierList.actions';
import { SupplierService } from './supplier-mapping.service';

@Component({
  selector: 'app-supplier-mapping',
  templateUrl: './supplier-mapping.component.html',
  styleUrls: ['./supplier-mapping.component.css']
})
export class SupplierMappingComponent implements OnInit {
  showsidenav = true;
  filterValue=""
  service: any;
  swtich: any;
  service1: any;
  constructor(private store:Store,public supplierservice:SupplierService) { }

  ngOnInit(){
    this.store.dispatch(SupplierListInitialValue())
    this.service = this.supplierservice.sidenav.subscribe(data=>{
      this.showsidenav = data
    })
    this.service1 = this.supplierservice.addview.subscribe(data=>{
      this.swtich = data
    })
  }
  add_supplier(){
    this.supplierservice.addview.next(true)
  }
  ngOnDestroy(){
    this.service.unsubscribe()
  }

}
