import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { externalValidators } from './externalvaldators';
import { passwordValidator } from './passwordvalidation';
import { getemailotpresult, getresult, getstatus, getstatus1, stepperState } from './store/States';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { saveonbord } from './store/Actions';
import { ServiceService } from './service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CanceldialogComponent } from './Components/canceldialog.component';
import { IdentificationComponent } from './Components/Identification.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-onbording',
  templateUrl: './customer-onbording.component.html',
  styleUrls: ['./customer-onbording.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class CustomerOnbordingComponent implements OnInit {
  public page= true
  complete2: boolean=false;
  firstName: any="";
  ONBOARDING_MASTER_DROPDOWN: any;
  

  constructor(private _store : Store<{stepper:stepperState,otp:stepperState}>,
    public _myFB : FormBuilder,
    public _stdService:ServiceService, 
    public dialog: MatDialog,
    public _http:HttpClient ) { }

    
  status:any=true;
  next:any = 1;
  page2:any=false;
  mess:any=""
  mess1:any;
  status1:any = true;
  complete:boolean=false;
  complete1:boolean=false;
  saveddata:any=null;
  activationstatus:any;
  ngOnInit() {
    this._store.select(getresult).subscribe(result =>{
      this.saveddata = result;
    })
    const url="http://183.83.219.159:7001/onboarding/additional/details"
    this._http.get<any>(url).subscribe((data:any)=>{
      // console.log(data.results)
      this.ONBOARDING_MASTER_DROPDOWN = data.results
    })
  }
  // ngAfterViewChecked(){
    // @ViewChild(IdentificationComponent) viewChild!: IdentificationComponent;
    // ngAfterViewChecked(){
    //   console.log("object")
    // }
    ngDoCheck(){
      console.log("ng" ,this.status)
      if(this.status1 == false)
      {
        this.Additional_Details.patchValue({
          verifiedMail:true
        })
      }
      // this._store.select(getstatus).subscribe(status =>{
      //   this.status = status;
      // })
      this._store.select(getemailotpresult).subscribe(mess =>{
        this.mess = mess;
      })
      if(this.status == false && this.Additional_Details.value.gstin_number !== ""){
        this.complete = true
      }
      // if(this.status1 == false){
      //   this.complete1 = true
      // }
      if(this.Additional_Details.value.verifiedMail === true){
        this.complete1 = true
      }
      if(this.next==3 && this.Additional_Details.value.canEnableAdditionalDetailsNext == true){
        this.complete2= true
       } 
      //  console.log(this.Additional_Details) 
  }
  
  
  nextpage(){
    this.next = this.next+1;
  }
 
  backpage(){
    this.next = this.next-1;
  }
  firstpage(){
    this.page = false;
    console.log(this.saveddata)
    console.log(this.Additional_Details.value.mobile)
    this.Additional_Details.patchValue({
      companyName:this.saveddata.results.companyName,
      firmType:this.saveddata.results.firmType,
      statecode:this.saveddata.results.stjCd,
      pincode:this.saveddata.results.pincode,
      natureOfBusiness:this.saveddata.results.natureOfBusiness,
      address:this.saveddata.results.address,
      buildingNumber:this.saveddata.results.buildingNumber ,
      location: this.saveddata.results.location,
      blockName: this.saveddata.results.blockName,
      street: this.saveddata.results.street,
      floorNumber:this.saveddata.results.floorNumber,
      firstName : this.saveddata.results.firstName,
      lastName: this.saveddata.results.lastName,
      email:this.saveddata.results.email,
      mobileNumber:this.saveddata.results.mobileNumber,

      lineOfBusiness: this.saveddata.results.lineOfBusiness,
      incorporationYear : this.saveddata.results.incorporationYear,
    annualTurnover: this.saveddata.results.annualTurnover,
    companySize : this.saveddata.results.companySize,
    companyDetail : this.saveddata.results.companyDetail,
    keyProductCategories:this.saveddata.results.keyProductCategories,
    industriesServiced:this.saveddata.results.industriesServiced,
    industriesServicedAddmore:this.saveddata.results.industriesServicedAddmore,
    standardPaymentTerms:this.saveddata.results.standardPaymentTerms,
    reportingCurrency:this.saveddata.results.reportingCurrency,
    companyWebsite:this.saveddata.results.companyWebsite,
    msmeRegistered:this.saveddata.results.msmeRegistered,
      msmeCategories:this.saveddata.results.msmeCategories,
      averageDailyInvoices:this.saveddata.results.averageDailyInvoices,
     salesEnquiryEmailId:this.saveddata.results.salesEnquiryEmailId,
      becomeInkreta:this.saveddata.results.becomeInkreta,
      verifiedMail:this.saveddata.results.verifiedMail



    })
    // this.Additional_Details.value.firstName = this.saveddata.results.firstName;
    console.log(this.saveddata.results.firstName)
    // this.firstName =this.saveddata.results.firstName
  }
  back(){
    this.page = true;
  }
  savedata(){
    this._store.dispatch(saveonbord(this.Additional_Details.value))
    console.log(this.Additional_Details.value)
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
  firstName:['',[Validators.required]],
  lastName:['',[Validators.required]],
  email: ['',[Validators.required,externalValidators(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
  mobileNumber:['',[Validators.required,externalValidators(/^[0-9\b]+$/)]],
 
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
 },{validators : passwordValidator}
  
)


submited(value:any){
  console.log(value)
}
get f(){
    return this.Additional_Details.controls
}



cancelbtn(): void {
  const dialogRef = this.dialog.open(CanceldialogComponent, {
    width: '400px',height:'180px',
    data: {"info":this.Additional_Details}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // this.animal = result;
    this.savedata()
  });

}

}
