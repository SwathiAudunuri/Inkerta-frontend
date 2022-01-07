import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { AddSupplier } from '../../../Actions/Add_Supplier.actions';
import { SelectListState } from '../../../Selectors/Supplier.selectors';
import { SupplierService } from '../../supplier-mapping.service';
import { SupplierSelectComponent } from '../supplier-select/supplier-select.component';

@Component({
  selector: 'app-new-supplier',
  templateUrl: './new-supplier.component.html',
  styleUrls: ['./new-supplier.component.css']
})
export class NewSupplierComponent implements OnInit {
  SupplierForm: any;
  accessTokenObj: any = localStorage.getItem("user");
  token: any = JSON.parse(this.accessTokenObj);
  companyName: string = '';
  PartnerCode:string=""
  service: any;
  constructor(public supplierservice:SupplierService,private store:Store,private formBuilder: FormBuilder,public dialog:MatDialog) { }

  ngOnInit() {
    this.SupplierForm = this.formBuilder.group({
      customerPartnerId: this.token.results.partnerId,
      vendorPartnerId: '',
      description: [''],
      vendorMappingActivities: this.formBuilder.array([
        {
          actionComments: 'posting',
          actionTaken: 'user'
        }
      ])
    })
    
  }
  close_add(){
    this.supplierservice.addview.next(false)
  }
  submitDetails(){
    this.SupplierForm.value.vendorPartnerId = this.PartnerCode
    //console.log(this.SupplierForm.value)
    this.store.dispatch(AddSupplier({url:Constants.NEW_VENDOR_MAPPING,data:this.SupplierForm.value}))
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(SupplierSelectComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.PartnerCode = result.PartnerCode;
      this.companyName = result.CompanyName;

    });
  }
}
