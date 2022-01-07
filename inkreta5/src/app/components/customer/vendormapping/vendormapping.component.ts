import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { addVendorList, getVendorDetailsList, getVendorList } from './Actions/vendormap.action';
import { VendorselectiondialogComponent } from './components/vendorselectiondialog/vendorselectiondialog.component';
import { getsupplier } from './Selectors/vendormap.selector';
import { VendorserviceService } from './vendorservice.service';
@Component({
  selector: 'app-vendormapping',
  templateUrl: './vendormapping.component.html',
  styleUrls: ['./vendormapping.component.css']
})
export class VendormappingComponent implements OnInit {
  getdiv:boolean =false;
  statusopen1:any = false
  statusopen:boolean = true
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private http: VendorserviceService,private store :Store) { }
  vendorForm!: FormGroup
  submitted = false;

  accessTokenObj: any = localStorage.getItem("user");
  token: any = JSON.parse(this.accessTokenObj);
  public fruit: any = { description: ''};
  maxChars =250;

  ngOnInit(): void {
    // this.store.select(getsupplier).subscribe(data=>{
    //   ////console.log(data)
      
    // })
    this.store.dispatch(getVendorList())
    this.store.dispatch(getVendorDetailsList())
    this.vendorForm = this.formBuilder.group({
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
  PartnerCode: string = "";
  companyName: string = '';
  openDialog() {
    const dialogRef = this.dialog.open(VendorselectiondialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.PartnerCode = result.PartnerCode;
      this.companyName = result.CompanyName;

    });
  }
  onReset() {
    this.submitted = false;
    this.vendorForm.reset();
}
showMe(){
  this.getdiv=!this.getdiv
}
closesidenav(){
  this.statusopen1 = false;
}
submitDetails1() {
 
  this.vendorForm.value.vendorPartnerId = this.PartnerCode
  var supplier = this.vendorForm.value
  //console.log(supplier)
  this.store.dispatch(addVendorList(supplier))
  // this.http.submitVendorDetails(this.vendorForm.value).subscribe(res => {
    // ////console.log(res);
  // })
}

submitDetails() {
  this.vendorForm.value.vendorPartnerId = this.PartnerCode
  this.http.submitVendorDetails(this.vendorForm.value).subscribe(res => {
    ////console.log(res);
  })
}
 
}
