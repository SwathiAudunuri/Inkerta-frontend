import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { Additional_Details, Additional_DetailsInitialValue } from '../Actions/Additonal_details.actions';
import { AddGstinInitialValue } from '../Actions/Add_gstin.actions';
import { getProfileDetails, getProfileDetailsInitialValue } from '../Actions/GetProfileDetails.actions';
import { SaveProfile, SaveProfilenull } from '../Actions/saveprofiledetails.actions';
import { AddGstinState, GatProfileState, SaveProfileState } from '../Selectors/profilemanagement.selectors';
import { SnackbarComponent } from './Components/snackbar/snackbar.component';
import { externalValidators } from './externalvaldators';
import { ProfileManagementService } from './profile-management.services';
@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {
  active = 1;
  public edit_btn: any = true
  // public imgurl:any="../../../assets/avatar.jpg";
  public imgurl: any = "./assets/avatar.jpg";
  ONBOARDING_MASTER_DROPDOWN: any = [];
  Element: any = [];
  service: any;
  loading: any;
  saveprofile: any;
  newdata: any;
  service4: any;
  service5: any;
  profile_info: any;
  contact_info: any;
  service6: any;
  loading1: any;
  durationInSeconds: number=5;
  service7: any;
  constructor(public _http: HttpClient, public _myFB: FormBuilder, private router: Router,public _snackBar:MatSnackBar, public store: Store,public profileservice:ProfileManagementService) { }

  ngOnInit() {
    // this.store.dispatch(AddGstinInitialValue())
    // this.store.dispatch(Additional_DetailsInitialValue())
    // this.store.dispatch(getProfileDetailsInitialValue())
    // this.store.dispatch(SaveProfilenull())
    
    this.store.dispatch(getProfileDetails({ url: Constants.GetProfile }))
    this.store.dispatch(Additional_Details({ url: Constants.AdditionalDetails }))
    this.service4 = this.store.select(GatProfileState).subscribe((data)=>{
      if(data.details){
        if(data.details.hasError){
          //console.log("error in profilemanagement")
        }
        else{
          this.profile_info = data.details.results
          this.Profile_Details.patchValue({
            partnerId : data.details.results.partnerDetails.partnerId,
            companyName: data.details.results.partnerDetails.companyName,
            country: data.details.results.partnerDetails.country,
            ecmFolderId: data.details.results.partnerDetails.ecmFolderId,
            exposeToAllVendors: data.details.results.partnerDetails.exposeToAllVendors,
            firmType: data.details.results.partnerDetails.firmType,
            industry: data.details.results.partnerDetails.industry,
            keyProductCategories: data.details.results.partnerDetails.keyProductCategories,
            natureOfBusiness: data.details.results.partnerDetails.natureOfBusiness,
            noOfBusinessPartners: data.details.results.partnerDetails.noOfBusinessPartners,
            noOfInvoicesExpected: data.details.results.partnerDetails.noOfInvoicesExpected,
            noOfPortalUsersAllowed: data.details.results.partnerDetails.noOfPortalUsersAllowed,
            offeredServices: data.details.results.partnerDetails.offeredServices,
            panNo: data.details.results.partnerDetails.panNo,
            partnerType: data.details.results.partnerDetails.partnerType,
            paymentTerms: data.details.results.partnerDetails.paymentTerms,
            reportingCurrency: data.details.results.partnerDetails.reportingCurrency,
            salesEnquiryEmailId: data.details.results.partnerDetails.salesEnquiryEmailId,
            status: data.details.results.partnerDetails.status,
            typeOfInvoices: data.details.results.partnerDetails.typeOfInvoices,
            annualturnover: data.details.results.partnerDetails.annualturnover,
            website: data.details.results.partnerDetails.website,
          })
          this.contact_info = data.details.results
          for(var i=0;i<this.contact_info.partnerContactDetails.length;i++){

            if(this.contact_info.partnerContactDetails[i].typeOfContact === "Primary"){
              this.Profile_Details.patchValue({
                firstName:this.contact_info.partnerContactDetails[i].firstName,
                lastName:this.contact_info.partnerContactDetails[i].lastName,
                email:this.contact_info.partnerContactDetails[i].email,
                mobileNumber:this.contact_info.partnerContactDetails[i].primaryPhoneNumber
              })
            }
          }
        }
      }
    })
    this.service5 = this.profileservice.newdata.subscribe((data)=>{
      // //console.log(data)
      this.newdata = data
    })
    this.service6 = this.store.select(SaveProfileState).subscribe((data)=>{
      this.loading1 =  data.loading
      if(data.result){
        if(data.result.hasError){
          //console.log("error")
        }
        else{
          this.openSnackBar("Data Saved Successfully !!!")
          //console.log("success")
        }
      }
    })
    this.service7 = this.store.select(AddGstinState).subscribe((data)=>{
      //console.log(data)
      if(data.details){
        if(data.details.hasError){
        }
        else{
          this.openSnackBar("GSTIN Sucessfully Added !!!")
        }
      }
    })


  }
  Profile_Details = this._myFB.group({
    partnerId:[''],
    companyName: [''],
    country:[''],
    ecmFolderId:[''],
    exposeToAllVendors:[false],
    firmType: [''],
    industry:[''],
    keyProductCategories: ['', [Validators.required]],
    natureOfBusiness: [''],
    noOfBusinessPartners:[''],
    noOfInvoicesExpected:[''],
    noOfPortalUsersAllowed:[0],
    offeredServices:[''],
    panNo:[''],
    partnerType: [''],
    paymentTerms:[''],
    reportingCurrency: [''],
    salesEnquiryEmailId: [''],
    status: [""],
    typeOfInvoices:[''],
    annualTurnover: [''],
    website:[''],

    // lineOfBusiness: ['', [Validators.required]],
    incorporationYear: ['', [Validators.required]],
    companySize: ['', [Validators.required]],
    companyDetail: ['', [Validators.required]],
    industriesServiced: [[null], [Validators.required]],
    industriesServicedAddmore: [''],
    // standardPaymentTerms: ['', [Validators.required]],
    // companyWebsite: [''],
    msmeRegistered: ['', [Validators.required]],
    msmeCategories: ['', [Validators.required]],
    // averageDailyInvoices: ['', [Validators.required]],

    gstin: [''],
    
    firstName: ['Ashok', [Validators.required]],
    lastName: ['Grandhi', [Validators.required]],
    email: ['ashok_grandhi@tecnics.com', [Validators.required, externalValidators(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
    mobileNumber: ['1234567890', [Validators.required, externalValidators(/^[0-9\b]+$/)]],

    
    profile_image: ['']
  }
  )
  save_object() {
    this.saveprofile = {
      "partnerDetails": {
        "partnerId": this.Profile_Details.value.partnerId,
        "companyName": this.Profile_Details.value.companyName,
        "country": this.Profile_Details.value.country,
        "ecmFolderId": this.Profile_Details.value.ecmFolderId,
        "exposeToAllVendors": this.Profile_Details.value.exposeToAllVendors,
        "firmType": this.Profile_Details.value.firmType,
        "industry": this.Profile_Details.value.industry,
        "keyProductCategories": this.Profile_Details.value.keyProductCategories,
        "natureOfBusiness": this.Profile_Details.value.natureOfBusiness,
        "noOfBusinessPartners": this.Profile_Details.value.noOfBusinessPartners,
        "noOfInvoicesExpected": this.Profile_Details.value.noOfInvoicesExpected,
        "noOfPortalUsersAllowed": this.Profile_Details.value.noOfPortalUsersAllowed,
        "offeredServices": this.Profile_Details.value.offeredServices,
        "panNo": this.Profile_Details.value.panNo,
        "partnerType": this.Profile_Details.value.partnerType,
        "paymentTerms": this.Profile_Details.value.paymentTerms,
        "reportingCurrency": this.Profile_Details.value.reportingCurrency,
        "salesEnquiryEmailId": this.Profile_Details.value.salesEnquiryEmailId,
        "status": this.Profile_Details.value.status,
        "typeOfInvoices": this.Profile_Details.value.typeOfInvoices,
        "annualturnover": this.Profile_Details.value.annualturnover,
        "website": this.Profile_Details.value.website
      },
      "partnerContactDetails": []
    }
    // var primaryobj = {
    //   "firstName": this.Profile_Details.value.firstName,
    //   "lastName": this.Profile_Details.value.lastName,
    //   "title": "MR",
    //   "primaryPhoneNumber": this.Profile_Details.value.mobileNumber,
    //   "secondaryPhoneNumber": "",
    //   "email": this.Profile_Details.value.email,
    //   "typeOfContact": "Primary"
    // }
    // this.newdata.push(primaryobj)
    this.saveprofile.partnerContactDetails = this.newdata
    // //console.log(this.saveprofile)
    this.store.dispatch(SaveProfile({url:Constants.SaveProfile,data:this.saveprofile}))
  }
  onSubmit() {
    //console.log(this.Profile_Details)
    this.edit_btn = true
    this.save_object()
  }
  onedit() {
    this.edit_btn = false
  }
  cancel_btn() {
    this.router.navigate(['app/vendor_manager/dashboard/default'])
  }
  openSnackBar(mess:any) {
    this.profileservice.message.next(mess)
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ['blue-snackbar']
    });
  }
  ngOnDestroy() {
    this.service4.unsubscribe()
    this.service5.unsubscribe()
    this.service6.unsubscribe()
    this.service7.unsubscribe()
    this.store.dispatch(AddGstinInitialValue())
    this.store.dispatch(Additional_DetailsInitialValue())
    this.store.dispatch(getProfileDetailsInitialValue())
    this.store.dispatch(SaveProfilenull())
  }
}
