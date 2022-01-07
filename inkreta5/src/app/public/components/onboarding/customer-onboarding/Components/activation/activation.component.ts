import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { SubmitData } from '../../Actions/Submit.actions';
import { SubmitState } from '../../Selectors/OnboardSelector.selector';
import { CustomerOnboardingService } from '../../customerOnboardingService'; 
import {OnboardService} from '../../CustOnbardService'

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {
  @Input()
  public Additional_Details:any;
  @Input()
  public activationstatus:any;
  @Output() public childEvent = new EventEmitter();
  status: boolean = true;
  suggesteduserName: any=null;
  mess: any="";
  succstatus: any =false;
  data2: any;
  loading: any;
  service2: any;
  service1: any;
  attachmentsdetails: any;
  partnertype: any;
  constructor(private onboardservice:OnboardService,public _myFB:FormBuilder,private _store : Store,private _http : HttpClient,public _Service:CustomerOnboardingService ) { }
  image:string = "../images/11116.jpg"
  // activationstatus:any;
  
  ngOnInit(): void {
    this.service1=this._Service.updateddate.subscribe((data) => {
        //console.log(data)
      this.data2 = data
    })
    this.service2=this._store.select(SubmitState).subscribe((data)=>{
      this.loading = data.loading
      if(data.result){
        if(data.result.hasError){
          this.mess = data.result.errors.errorMessage
        }
        else{
          this.mess=""
          //console.log("working fine")

        }
      }
    })
    this.onboardservice.base64.subscribe((data)=>{
      this.attachmentsdetails = data
    })
  }
  ngAfterViewChecked(){
   
  }
  public isdisable = true
  hide = true;
  hide1 = true;
  passwod2:any;
  get f(){
    return this.Additional_Details.controls
  }
  submit(){
    this.partnertype="BusinessPartner"
    // if(this.data2.isbusinesspartner){
    //     //console.log("true")
    //     this.partnertype="BusinessPartner"
      
    // }
    // else{
    //   //console.log(false)
    //     this.partnertype="Customer"
    // }
    let obj:any = {
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
      "industriesserviced": this.Additional_Details.value.industriesServiced.toString(),
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
      "partnertype": this.partnertype,
      "isbusinesspartner": this.data2.isbusinesspartner,
      "adminusername": this.Additional_Details.value.userName,
      "adminpassword": this.Additional_Details.value.Password,
      "attachmentDetails" : []
    }
    for(var i=0;i<this.attachmentsdetails.length;i++){
      obj.attachmentDetails.push(this.attachmentsdetails[i])
    }
    //console.log("Submit",obj)
    const submit_url=Constants.SubmitOnBoarding+this.Additional_Details.value.gstin
    this._store.dispatch(SubmitData({url:submit_url,data:obj}))
  }
  onChange(){

    // const url = Constants.CHECK_USERNAME1 + this.Additional_Details.value.userName
    // this._http.get<any>(url)
    // .subscribe(data=>{
    //   this.suggesteduserName = data.results.suggesteduserName
    //   if(data.results.suggesteduserName.length !== 0){
    //     this.isdisable = false

    //   }
    //   else{
    //     this.isdisable = true
    //     this.activationstatus = false

    //   }

    // })
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
    this.service2.unsubscribe()

  }
 
}
