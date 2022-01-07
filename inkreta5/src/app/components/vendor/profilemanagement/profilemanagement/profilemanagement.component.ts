import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { externalValidators } from './externalvaldators';

@Component({
  selector: 'app-profilemanagement',
  templateUrl: './profilemanagement.component.html',
  styleUrls: ['./profilemanagement.component.css']
})
export class ProfilemanagementComponent implements OnInit {
  active = 1;
  public edit_btn :any = true
  // public imgurl:any="../../../assets/avatar.jpg";
  public imgurl:any="./assets/avatar.jpg";
  ONBOARDING_MASTER_DROPDOWN: any;
  Element: any=[];
  constructor(public _http:HttpClient , public _myFB :FormBuilder,private router:Router ) { }

  ngOnInit() {
    const url="https://164.52.217.12:8443/onboarding/additional/details"
    this._http.get<any>(url).subscribe((data:any)=>{
      //console.log(data.results)
      this.ONBOARDING_MASTER_DROPDOWN = data.results
    })

  }
  ngDoCheck(){
    // //console.log("main",this.imgurl)
    if(this.edit_btn){
       this.Additional_Details.disable();
    }
    else{
      this.Additional_Details.enable();
    }
    // //console.log(this.active)
  }
  Additional_Details = this._myFB.group({
    lineOfBusiness: ['',[Validators.required]],
    gstin: ['',[Validators.required,externalValidators(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)]],
    captcha:[''],  
    
    registrationDate:['07/07/2017'],
      
    gstSuccessMessage: ['GST Number Verified Successfully. Please click on Next to Proceed.'],
    companyName:[''],
    firmType:[''],
    statecode:[''],
    pincode:[''],
    natureOfBusiness:[''],
    address:[''],
    partnerType: ['supplier'],
    firstName:['Ashok',[Validators.required]],
    lastName:['Grandhi',[Validators.required]],
    email: ['ashok_grandhi@tecnics.com',[Validators.required,externalValidators(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
    mobileNumber:['1234567890',[Validators.required,externalValidators(/^[0-9\b]+$/)]],
   
    canEnableContactNext: [true],
    verifiedMail:[false],
    verifiedPhone:[false],
  
  
    incorporationYear : ['',[Validators.required]],
    annualTurnover: ['',[Validators.required]], 
    companySize : ['',[Validators.required]],
    companyDetail : ['',[Validators.required]],
    keyProductCategories:['',[Validators.required]],
    industriesServiced:[[null],[Validators.required]],
    industriesServicedAddmore:[''],
    standardPaymentTerms:['',[Validators.required]],
    reportingCurrency:['',[Validators.required]],
    companyWebsite:[''],
    msmeRegistered:['',[Validators.required]],
    msmeCategories:['',[Validators.required]],
    averageDailyInvoices:['',[Validators.required]],
    salesEnquiryEmailId:['',[Validators.required]],
    becomeInkreta:[false,[Validators.required]],
    gstCertificate: [''],
    gstCertificateName: [''],
    gstinCertificateMimeType: [''],
    canEnableAdditionalDetailsNext: [false],
    isValidWebsite: [false],
    validPurchaseemail: [false],
    tradeName: [""],
    ctjCd: [null],
    cxdt: [""],
    ctj: [""],
    status: [""],
    lastUpdateOn:[ null],
    dty: [""],
    stj: [""],
    stjCd: [""],
    frequencyType: [""],
    ctb: [""],
    location: [""],
    blockName: [""],
    district: [""],
    buildingNumber: [""],
    lg: [null],
    lt: [null],
    street: [""],
    city: [""],
    floorNumber: [""],
    inkretaUserName:[''],
    userName:['',[Validators.required,externalValidators(/^[a-zA-Z0-9_]+$/)]],
    Password:['',[Validators.required,externalValidators(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/)]],
    masterDropdownValues:[''],

    gstinotherstates:[[]],
    historysaved:[[]],
    query_pre:[true],
    task_pre:[true],
    invoice_pre:[false],
    vender_pre:[false],
    email_pre:[true],
    sms_pre:[true],
    seoundaryContactinfo:[[]],
    profile_image:['']
    } 
  )
  
  onSubmit(){
    //console.log(this.Additional_Details)
    this.edit_btn = true
    const date=new Date()
    this.Element.push({SlNo: this.Element.length+1, Action: 'Edit', Date: date.toDateString(), Status: 'Saved'})
    this.Additional_Details.patchValue({
      'historysaved':this.Element
    })
  }
  onedit(){
    this.edit_btn = false
  }
  cancel_btn(){
    this.router.navigate(['app/vendor_manager/dashboard/default'])
  }
}
