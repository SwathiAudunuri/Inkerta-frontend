import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { VendorselectiondialogComponent } from './components/vendorselectiondialog/vendorselectiondialog.component';
import { VendorserviceService } from './vendorservice.service';
@Component({
  selector: 'app-vendormapping',
  templateUrl: './vendormapping.component.html',
  styleUrls: ['./vendormapping.component.css']
})
export class VendormappingComponent implements OnInit {
  getdiv:boolean =false;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private http: VendorserviceService) { }
  vendorForm!: FormGroup
  submitted = false;

  accessTokenObj: any = localStorage.getItem("appUser");
  token: any = JSON.parse(this.accessTokenObj);
  public fruit: any = { description: ''};
  maxChars =250;

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
showMe(){
  this.getdiv=!this.getdiv
}
submitDetails() {
  this.vendorForm.value.vendorPartnerId = this.PartnerCode
  this.http.submitVendorDetails(this.vendorForm.value).subscribe(res => {
    console.log(res);
  })
}
 
}
