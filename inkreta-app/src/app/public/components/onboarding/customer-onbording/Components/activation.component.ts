import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveonbord } from '../store/Actions';
@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./style.css']
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
  constructor(public _myFB:FormBuilder,private _store : Store<{save: {data : any}}>,private _http : HttpClient ) { }
  image:string = "../images/11116.jpg"
  // activationstatus:any;
  
  ngOnInit(): void {
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
    // this._store.dispatch(saveonbord(this.Additional_Details.info.value))
    // console.log(this.Additional_Details)
    let obj = {
      "contactDetails": {
        "accessCode": this.Additional_Details.value.Password,
        "address": this.Additional_Details.value.address,
        "city": this.Additional_Details.value.city,
        "country": 'india',
        "email": this.Additional_Details.value.email,
        "inkretaEmailId": this.Additional_Details.value.userName + "@inkreta.com",
        "personName": this.Additional_Details.value.firstName + " " + this.Additional_Details.value.lastName,
        "pincode": this.Additional_Details.value.pincode,
        "primaryPhone": this.Additional_Details.value.mobileNumber,
        "state": null,
        "userName": this.Additional_Details.value.userName
      },
      "gstnDetails": {
        "businessName": null,
        "gstin": this.Additional_Details.value.gstin,
        "parent": true,
        "partnerId": null,
        "registrationYear": this.Additional_Details.value.registrationDate,
        "stateCode": null
      },
      "partnerDetails": {
        "annualTurnover": this.Additional_Details.value.annualTurnover,
        "averageDailyInvoices": this.Additional_Details.value.averageDailyInvoices,
        "companyDetail": this.Additional_Details.value.companyDetail,
        "companyName": this.Additional_Details.value.companyName,
        "companySize": this.Additional_Details.value.companySize,
        "country": "india",
        "firmType": this.Additional_Details.value.firmType,
        "gstinCertificate": null,
        "inCorporationYear": this.Additional_Details.value.incorporationYear,
        "industriesServiced": this.Additional_Details.value.industriesServiced.length > 0 ? this.Additional_Details.value.industriesServiced.join() + "," + this.Additional_Details.value.industriesServicedAddmore : this.Additional_Details.value.industriesServiced + "," + this.Additional_Details.value.industriesServicedAddmore,
        "inkretaVerifiedSupplier": null,
        "keyProductCategories": this.Additional_Details.value.keyProductCategories,
        "lineOfBusiness": this.Additional_Details.value.lineOfBusiness,
        "msmeCategories": this.Additional_Details.value.msmeCategories,
        "msmeRegistered": this.Additional_Details.value.msmeRegistered,
        "natureOfBusiness": this.Additional_Details.value.natureOfBusiness.toString(),
        "noOfInvoicesExpected": null,
        "partnerType": this.Additional_Details.value.partnerType,
        "reportingCurrency": this.Additional_Details.value.reportingCurrency,
        "salesEnquiryEmailId": this.Additional_Details.value.salesEnquiryEmailId,
        "standardPaymentTerms": this.Additional_Details.value.standardPaymentTerms,
        "webSite": this.Additional_Details.value.companyWebsite,
      }
    }
    // console.log("this is onboarding singup")
    // console.log(obj);
    
    const url="http://183.83.219.159:7001/onboarding/submit/onboard/details"
    this._http.post<any>(url,obj)
    .subscribe(data => {
      // console.log(data)
      console.log(data.hasError)
      if(data.hasError === false){
          this.mess = "Successfully Registred"
          console.log(this.mess)
          this.succstatus = true
          this.childEvent.emit(this.isdisable)
      }
      else if(data.hasError === true){
          this.mess = "Your registration has failed try some other tym"
          console.log(this.mess)
      }
      
    });

  }
  onChange(){
    // console.log("changing")
    // console.log(this.Additional_Details.value.userName)
    const url="http://183.83.219.159:7001/onboarding/check/username/" + this.Additional_Details.value.userName
    this._http.get<any>(url)
    .subscribe(data=>{
      // console.log(data.results.suggesteduserName.length)
      // console.log(data.results.unique)
      this.suggesteduserName = data.results.suggesteduserName
      if(data.results.suggesteduserName.length !== 0){
        this.isdisable = false
        // this.childEvent.emit(this.isdisable)
      }
      else{
        this.isdisable = true
        this.activationstatus = false
        // this.childEvent.emit(this.isdisable)
      }
      // this.unique = data.results.unique
    })
  }
 
}
