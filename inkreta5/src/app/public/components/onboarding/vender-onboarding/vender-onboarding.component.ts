import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { externalValidators } from './externalvaldators';
import { passwordValidator } from './passwordvalidation';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { VenderOnboardingService } from './venderOnboardingService';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VenderCancelDialogComponent } from './Compopnents/vender-cancel-dialog/vender-cancel-dialog.component';
// import { IdentificationComponent } from './Components/Identification.component';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/constants/constants';
import { SaveDataState, SubmitState, VerifyGstInState, VerifyMailState, VerifyMobileState } from './Selectors/OnboardSelector.selector';
import { VerifyGstInInitialvalue } from './Actions/verifyGstin.actions';
import { SaveData, SaveDataValuenull } from './Actions/Savedata.actions';
import { Submitnull } from './Actions/Submit.actions';
import { VerifyMailInitislValuenull } from './Actions/VerifyMail.actions';
import { VerifyMobileInitislValuenull } from './Actions/VerifyMobile.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OnboardService } from './Onboard.service';
import { AdditionalDetailsInitialValues } from './Actions/AddtionalDetails.actions';
import { AttachmentTypeInitialValues } from './Actions/AttachmentsType.actions';
import { GetCaptchanull } from './Actions/onboardCaptcha.actions';
import { SendOtpMailInitialValues } from '../customer-onboarding/Actions/SendMail.actions';
import { SendOtpMobileInitialValues } from '../customer-onboarding/Actions/SendMobile.actions';

@Component({
  selector: 'app-vender-onboarding',
  templateUrl: './vender-onboarding.component.html',
  styleUrls: ['./vender-onboarding.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class VenderOnboardingComponent implements OnInit {
  public page = true
  complete2: boolean = false;
  firstName: any = "";
  ONBOARDING_MASTER_DROPDOWN: any;
  save_data:any
  data2: any;
  durationInSeconds = 10;
  service1: any;
  // service1: any;
  service2: any;
  service3: any;
  service4: any;
  service5: any;
  service6: any;
  enable: any;
  constructor(private _store: Store,
    private OnboardService:OnboardService,
    public _myFB: FormBuilder,
    public _stdService: VenderOnboardingService,
    public dialog: MatDialog,
    public _http: HttpClient,private _snackBar: MatSnackBar) { }


  status: any = true;
  next: any = 1;
  page2: any = false;
  mess: any = ""
  mess1: any;
  status1: any = true;
  complete: boolean = false;
  complete1: boolean = false;
  saveddata: any = null;
  activationstatus: any;
  ngOnInit() {
    // this._store.dispatch(AdditionalDetailsInitialValues())
    // this._store.dispatch(AttachmentTypeInitialValues())
    // this._store.dispatch(GetCaptchanull())
    // this._store.dispatch(SaveDataValuenull())
    // this._store.dispatch(SendOtpMailInitialValues())
    // this._store.dispatch(SendOtpMobileInitialValues())
    // this._store.dispatch(Submitnull())
    // this._store.dispatch(VerifyGstInInitialvalue())
    // this._store.dispatch(VerifyMailInitislValuenull())
    // this._store.dispatch(VerifyMobileInitislValuenull())


    // this._store.dispatch(Submitnull())
    this.service1 =this._store.select(VerifyGstInState).subscribe((data) => {
      if (data.results) {
        if (data.results.result.hasError) {
          //console.log("error")
        }
        else {
          this.saveddata = data.results.result.results
          //console.log(data.results.result.results)
          this.update_form(data.results.result.results)
          this.data2=data.results.result.results
          this.OnboardService.base64.next(null)
          this.OnboardService.verifydoc.next(null)
        }
      }
    })
    this.service2 =this._store.select(VerifyMailState).subscribe((data)=>{
      //console.log(data)
      if(data.result){
        if(data.result.hasError){
          //console.log("error")
        }
        else{
          this.update_form(data.result.results)
          this.data2 = data.result.results
        }
      }
    })
    this.service3 =this._store.select(VerifyMobileState).subscribe((data)=>{
      //console.log(data)
      if(data.result){
        if(data.result.hasError){
          //console.log("error")
        }
        else{
          this.data2 = data.result.results
          this.update_form(data.result.results)
        }
      }
    })
    this.service4 =this._store.select(SaveDataState).subscribe((data)=>{
      if(data.result){
        if(data.result.hasError){
          //console.log("error")
        }
        else{
          this.openSnackBar()
          //console.log("working fine")
          this.data2 = data.result.results
          this.update_form(data.result.results)
        }
      }
    })
    this.service5 =this._store.select(SubmitState).subscribe((data)=>{
      if(data.result){
        if(data.result.hasError){
          this.activationstatus=false
        }
        else{
          //console.log("working fine")
          this.data2 = data.result.results
          this.update_form(data.result.results)

          this.activationstatus=true
          this.OnboardService.base64.next(null)
          this.OnboardService.verifydoc.next(null)
        }
      }
    })
    this.service6= this.OnboardService.base64.subscribe((data)=>{
      if(data){
        if(data.length>=2){
          this.enable = true
        }
        else{
          this.enable = false
        }
      }
    })
  }
  update_form(saveddata:any){
    this._stdService.updateddate.next(saveddata)
    // //console.log(saveddata.canenablecontactnext)
    this.Additional_Details.patchValue({
      canEnableContactNext:saveddata.canenablecontactnext,
      companyName: saveddata.companyname,
      firmType: saveddata.ctb,
      statecode: saveddata.stjcd,
      pincode: saveddata.pincode,
      natureOfBusiness: saveddata.natureofbusiness,
      buildingNumber: saveddata.buildingnumber,
      location: saveddata.location,
      blockName: saveddata.blockname,
      street: saveddata.street,
      floorNumber: saveddata.floornumber,
      firstName: saveddata.firstname,
      lastName: saveddata.lastname,
      email: saveddata.email,
      mobileNumber: saveddata.mobilenumber,

      lineOfBusiness: saveddata.lineofbusiness,
      incorporationYear: saveddata.incorporationyear,
      annualTurnover: saveddata.annualturnover,
      companySize: saveddata.companysize,
      companyDetail: saveddata.companydetails,
      keyProductCategories: saveddata.keyproductcategories,
      // industriesServiced: saveddata.industriesServiced.split(','),
      // industriesServicedAddmore: saveddata.industriesserviced,
      standardPaymentTerms: saveddata.standardpaymentterms,
      reportingCurrency: saveddata.reportingcurrency,
      companyWebsite: saveddata.companywebsite,
      
      msmeCategories: saveddata.msmecategories,
      averageDailyInvoices: saveddata.averagedailyinvoices,
      salesEnquiryEmailId: saveddata.enquiryemailid,
      becomeInkreta: saveddata.becomeinkreta,
      verifiedMail: saveddata.verifiedmail,
      verifiedPhone: saveddata.verifiedphone,
      isbusinesspartner : saveddata.isbusinesspartner



    })
    if(saveddata.msmeregistered){
      this.Additional_Details.patchValue({
      msmeRegistered: saveddata.msmeregistered.toString()
      })
    }
    else{
      this.Additional_Details.patchValue({
        msmeRegistered: saveddata.msmeregistered
        })
    }
    if(saveddata.industriesserviced){
      
      //console.log(saveddata.industriesserviced)
    const test=saveddata.industriesserviced
    //console.log(test.split(','))
    this.Additional_Details.patchValue({
        industriesServiced: test.split(','),
      }
      )
    }
    else{
      this.Additional_Details.patchValue({
        industriesServiced: [],
      }
      )
      // //console.log("else")
    }
    
    // //console.log(this.Additional_Details)
  }
  save_object() {
    // //console.log(this.data2, "firstname")

    this.save_data = {
      "registrationid": this.data2.registrationid,
      "annualturnover": this.Additional_Details.value.annualTurnover,
      "averagedailyinvoices": this.Additional_Details.value.averageDailyInvoices,
      "becomeinkreta": this.Additional_Details.value.becomeInkreta,
      "blockname": this.Additional_Details.value.blockName,
      "buildingnumber": this.Additional_Details.value.buildingNumber,
      "canenableadditionaldetailsnext": this.Additional_Details.value.canEnableAdditionalDetailsNext,
      "canenablecontactnext": this.Additional_Details.value.canEnableContactNext,
      "city": this.Additional_Details.value.city,
      "companydetails": this.Additional_Details.value.companyDetail,
      "companyname":this.Additional_Details.value.companyName,
      "companysize": this.Additional_Details.value.companySize,
      "companywebsite": this.Additional_Details.value.companyWebsite,
      "ctb": this.Additional_Details.value.ctb,
      "ctj": this.Additional_Details.value.ctj,
      "ctjcd": this.Additional_Details.value.ctjCd,
      "cxdt": this.Additional_Details.value.cxdt,
      "district": this.Additional_Details.value.district,
      "dty": "",
      "email": this.Additional_Details.value.email,
      "enquiryemailid": this.Additional_Details.value.salesEnquiryEmailId,
      "firmtype": this.Additional_Details.value.firmType,
      "floornumber": this.Additional_Details.value.floorNumber,
      "frequencytype": this.Additional_Details.value.frequencyType,
      "gstcertificate": this.Additional_Details.value.gstCertificate,
      "gstcertificatename": this.Additional_Details.value.gstCertificateName,
      "gstin": this.Additional_Details.value.gstin,
      "gstincertificatemimetype": this.Additional_Details.value.gstinCertificateMimeType,
      "incorporationyear": this.Additional_Details.value.incorporationYear,
      "industriesserviced":this.Additional_Details.value.industriesServiced.toString(),
      "initiateddate":this.data2.initiateddate,
      "keyproductcategories": this.Additional_Details.value.keyProductCategories,
      "lastname": this.Additional_Details.value.lastName,
      "lastupdateon": this.Additional_Details.value.lastUpdateOn,
      "lg": this.Additional_Details.value.lg,
      "lineofbusiness": this.Additional_Details.value.lineOfBusiness,
      "location": this.Additional_Details.value.location,
      "lt": this.Additional_Details.value.lt,
      "mobilenumber": this.Additional_Details.value.mobileNumber,
      "msmecategories": this.Additional_Details.value.msmeCategories,
      "msmeregistered": this.Additional_Details.value.msmeRegistered,
      "msmeregistrationdate": this.data2.msmeregistrationdate,
      "natureofbusiness_arr": this.data2.natureofbusiness_arr,
      "natureofbusiness": this.Additional_Details.value.natureOfBusiness,
      "onboardingstatus": this.data2.onboardingstatus,
      "pincode": this.Additional_Details.value.pincode,
      "reportingcurrency": this.Additional_Details.value.reportingCurrency,
      "standardpaymentterms": this.Additional_Details.value.standardPaymentTerms,
      "statecode": this.Additional_Details.value.statecode,
      "stj": this.Additional_Details.value.stj,
      "stjcd": this.Additional_Details.value.stjCd,
      "street": this.Additional_Details.value.street,
      "tradename": this.Additional_Details.value.tradeName,
      "validenquiryemailid": this.Additional_Details.value.validPurchaseemail,
      "verifiedmail": this.Additional_Details.value.verifiedMail,
      "verifiedphone": this.Additional_Details.value.verifiedPhone,
      "rgdt": this.Additional_Details.value.registrationDate,
      "sts": this.Additional_Details.value.status,
      "lstupdt": this.data2.lstupdt,
      "pan": this.data2.pan,
      "firstname": this.Additional_Details.value.firstName,
      "partnertype": this.Additional_Details.value.partnerType,
      "isbusinesspartner": this.Additional_Details.value.isbusinesspartner,
      "adminusername": this.Additional_Details.value.userName,
      "adminpassword": this.Additional_Details.value.Password
    }
  }

save(){
  this.save_object();
  const save_url=Constants.SaveData+this.Additional_Details.value.gstin
  //console.log(save_url)
  this._store.dispatch(SaveData({url:save_url,data:this.save_data}))
}

  nextpage() {
    this.next = this.next + 1;
  }

  backpage() {
    this.next = this.next - 1;
  }
  firstpage() {
    this.page = false;
  }
  back() {
    this.page = true;
  }

  Additional_Details = this._myFB.group(
    {
    lineOfBusiness: ['', [Validators.required]],
    gstin: ['', [Validators.required, externalValidators(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)]],
    captcha: [''],

    registrationDate: ['07/07/2017'],

    gstSuccessMessage: ['GST Number Verified Successfully. Please click on Next to Proceed.'],
    companyName: [''],
    firmType: [''],
    statecode: [''],
    pincode: [''],
    natureOfBusiness: [''],
    address: [''],
    partnerType: ['Vendor'],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, externalValidators(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
    mobileNumber: ['', [Validators.required, externalValidators(/^[0-9\b]+$/)]],

    canEnableContactNext: [false],
    verifiedMail: [false],
    verifiedPhone: [false],


    incorporationYear: ['', [Validators.required]],
    annualTurnover: ['', [Validators.required]],
    companySize: ['', [Validators.required]],
    companyDetail: ['', [Validators.required]],
    keyProductCategories: ['', [Validators.required]],
    industriesServiced: [null, [Validators.required]],
    industriesServicedAddmore: [''],
    standardPaymentTerms: ['', [Validators.required]],
    reportingCurrency: ['', [Validators.required]],
    companyWebsite: [''],
    msmeRegistered: ['', [Validators.required]],
    msmeCategories: ['', [Validators.required]],
    averageDailyInvoices: ['', [Validators.required]],
    salesEnquiryEmailId: ['', [Validators.required]],
    becomeInkreta: [false, [Validators.required]],


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
    lastUpdateOn: [null],
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
    isbusinesspartner:[false],
    inkretaUserName: [''],
    userName: ['', [Validators.required, externalValidators(/^[a-zA-Z0-9_]+$/)]],
    Password: ['', [Validators.required, externalValidators(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/)]],
    masterDropdownValues: [''],
  }, { validators: passwordValidator }

  )


  submited(value: any) {
    //console.log(value)
  }
  get f() {
    return this.Additional_Details.controls
  }



  cancelbtn(): void {
    const dialogRef = this.dialog.open(VenderCancelDialogComponent, {
      width: '400px', height: '180px',
      data: { "info": this.Additional_Details }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      
    });

  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ['blue-snackbar']
    });
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
    this.service2.unsubscribe()
    this.service3.unsubscribe()
    this.service4.unsubscribe()
    this.service5.unsubscribe()
    this.service6.unsubscribe()

    this._store.dispatch(AdditionalDetailsInitialValues())
    this._store.dispatch(AttachmentTypeInitialValues())
    this._store.dispatch(GetCaptchanull())
    this._store.dispatch(SaveDataValuenull())
    this._store.dispatch(SendOtpMailInitialValues())
    this._store.dispatch(SendOtpMobileInitialValues())
    this._store.dispatch(Submitnull())
    this._store.dispatch(VerifyGstInInitialvalue())
    this._store.dispatch(VerifyMailInitislValuenull())
    this._store.dispatch(VerifyMobileInitislValuenull())
  }

}





@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
  <span class="example-pizza-party">
  Saving Your Progress....
</span>
`,
  styles: [
    `
    .example-pizza-party {
      color: #ffff ;
    }
    .blue-snackbar {
      background: #bae0ff !important;
      margin-bottom: 100px !important;
    }
  `,
  ],
})
export class PizzaPartyComponent {}