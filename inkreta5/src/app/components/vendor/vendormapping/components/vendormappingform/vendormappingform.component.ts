import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { VendorselectiondialogComponent } from '../vendorselectiondialog/vendorselectiondialog.component';
import { VendorserviceService } from '../../vendorservice.service';
@Component({
  selector: 'app-vendormappingform',
  templateUrl: './vendormappingform.component.html',
  styleUrls: ['./vendormappingform.component.css']
})
export class VendormappingformComponent implements OnInit {

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private http: VendorserviceService) {
  
   }
  vendorForm!: FormGroup
  submitted = false;
 
  
  accessTokenObj: any = localStorage.getItem("appUser");
  token: any = JSON.parse(this.accessTokenObj);
  public fruit: any = { description: ''};
  maxChars =250;
  // this.token.results.securityToken
  ngOnInit(): void {
    this.vendorForm = this.formBuilder.group({
      customerPartnerId: this.token.results.partnerId,
      vendorPartnerId: '',
      description: [''],
      vendorMappingActivities: this.formBuilder.array([
        {
          actionComments: null,
          actionTaken: null
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
  submitDetails() {
    this.vendorForm.value.vendorPartnerId = this.PartnerCode
    this.http.submitVendorDetails(this.vendorForm.value).subscribe(res => {
      //console.log(res);
    })
  }
}
