import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { externalValidators } from 'src/app/components/vendor/profilemanagement/profilemanagement/externalvaldators';
import { VenderDialogComponent } from '../vender-dialog/vender-dialog.component';
import { SendMailState, SendMobileState, VerifyGstInState, VerifyMailState, VerifyMobileState } from '../../Selectors/OnboardSelector.selector';
import { SendOtpMail, SendOtpMailInitialValues } from '../../Actions/SendMail.actions';
import { Constants } from 'src/app/constants/constants';
import { VenderMobileDialogComponent } from '../vender-mobile-dialog/vender-mobile-dialog.component';
import { SendOtpMobile, SendOtpMobileInitialValues } from '../../Actions/SendMobile.actions';
import { VerifyMailInitislValuenull } from '../../Actions/VerifyMail.actions';
import { VerifyMobileInitislValuenull } from '../../Actions/VerifyMobile.actions';
import { VenderOnboardingService } from '../../venderOnboardingService';

@Component({
  selector: 'app-vender-contact-info',
  templateUrl: './vender-contact-info.component.html',
  styleUrls: ['./vender-contact-info.component.css']
  // styleUrls: ['../components1.css']
})
export class VenderContactInfoComponent implements OnInit {

  public object = {
    "errors": null,
    "hasError": false,
    "results": {
      "ctjCd": "ZJ0502",
      "tradeName": "Ernst & Young LLP",
      "gstin": "07AAEFE1763C1ZU",
      "cxdt": "",
      "registrationDate": "01/07/2017",
      "ctj": "RANGE - 67",
      "companyName": "ERNST & YOUNG LLP",
      "status": "Active",
      "lastUpdateOn": "05/03/2021",
      "dty": "Regular",
      "stj": "Ward 208",
      "stjCd": "DL115",
      "frequencyType": null,
      "ctb": "Limited Liability Partnership",
      "address": {
        "statecode": "Delhi",
        "location": "Asset Area 11,Hospitality District",
        "blockName": "",
        "district": "New Delhi",
        "buildingNumber": "3rd and 6th Floor",
        "pincode": "110037",
        "lg": null,
        "lt": null,
        "street": "Worldmark 1",
        "city": "",
        "floorNumber": "3rd and 6th Floor"
      },
      "natureOfBusiness": [
        "Service Provision",
        "Recipient of Goods or Services"
      ]
    },
    "timestamp": "13-07-2021 05:21:01"
  }
  @Input()
  public Additional_Details: any;
  @Input()
  status1: any;
  mess: any;
  tick: boolean = true;
  data: any;
  loading: any;
  post_data: any
  tempemail: any;
  tempmobilenumber: any;
  loading1: any;
  service1: any;
  service2: any;
  service3: any;
  service4: any;
  service5: any;
  service6: any;
  // post_data: { registrationid: any; annualturnover: any; averagedailyinvoices: any; becomeinkreta: any; blockname: any; buildingnumber: any; canenableadditionaldetailsnext: any; canenablecontactnext: any; city: any; companydetails: any; companyname: any; companysize: any; companywebsite: any; ctb: any; ctj: any; ctjcd: any; cxdt: any; district: any; dty: any; email: any; enquiryemailid: any; firmtype: any; floornumber: any; frequencytype: any; gstcertificate: any; gstcertificatename: any; gstin: any; gstincertificatemimetype: any; incorporationyear: any; industriesserviced: any; initiateddate: any; keyproductcategories: any; lastname: any; lastupdateon: any; lg: any; lineofbusiness: any; location: any; lt: any; mobilenumber: any; msmecategories: any; msmeregistered: any; msmeregistrationdate: any; natureofbusiness_arr: any; natureofbusiness: any; onboardingstatus: any; pincode: any; reportingcurrency: any; standardpaymentterms: any; statecode: any; stj: any; stjcd: any; street: any; tradename: any; validenquiryemailid: any; verifiedmail: any; verifiedphone: any; rgdt: any; sts: any; lstupdt: any; pan: any; firstname: any; partnertype: any; isbusinesspartner: any; adminusername: any; adminpassword: any; };
  constructor(public dialog: MatDialog, public _store: Store, public _Service: VenderOnboardingService, public _myFB: FormBuilder) { }
  result: any;
  tradename: any;
  ctb: any;
  statecode: any;
  pincode: any;
  natureOfBusiness: any;
  address: any;
  gstin: any;
  email: any;
  cont_info = this._myFB.group({
    mobileNumber: ['', [Validators.required, externalValidators(/^[0-9\b]+$/)]],
    email: ['', [Validators.required, externalValidators(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]]
  })
  @Output() public childEvent = new EventEmitter();
  openDialog(): void {
    const dialogRef = this.dialog.open(VenderDialogComponent, {
      width: '400px', height: '190px',disableClose: true,
      data: { "gstin": this.Additional_Details.value.gstin, "email": this.Additional_Details.value.email, "data": this.post_data }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //console.log(result)
      this.status1 = result
      // setTimeout(()=>{
      //   // //console.log(this.mess.results)
      //   this.mess=this.mess.results
      //   if(this.mess.errors == null){
      //     this.status1 = false
      //     this.tick=false
      //     // //console.log(this.status1)
      //     this.Additional_Details.patchValue({
      //       verifiedMail:true
      //     })
      //     // this.Additional_Details.value.verifiedMail = true
      //     this.childEvent.emit(this.status1)
      //     // //console.log(this.Additional_Details.value.verifiedMail)
      //     // this.childEvent.emit(this.Additional_Details.value.verifiedMail)
      //   }
      //   else{
      //   this.status1 = false
      //   }
      //   }
      //   ,3000)

      // this._store.select(VerifyMailState).subscribe((data)=>{
      //   //console.log(data)
      //   if(data.result){
      //     if(data.result.hasError){
      //       //console.log("error")
      //     }
      //     else{
      //     this.status1 = false
      //     this.tick=false
      //     this.Additional_Details.patchValue({
      //       verifiedMail:true
      //     })
      //     this.childEvent.emit(this.status1)
      //     }
      //   }
      // })
    });
  }
  openMobileDialog(): void {
    const dialogRef = this.dialog.open(VenderMobileDialogComponent, {
      width: '400px', height: '190px',disableClose: true,
      data: { "gstin": this.Additional_Details.value.gstin, "Number": this.Additional_Details.value.mobileNumber, "data": this.post_data }
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //console.log(result)
      this.status1 = result
      // setTimeout(()=>{
      //   // //console.log(this.mess.results)
      //   this.mess=this.mess.results
      //   if(this.mess.errors == null){
      //     this.status1 = false
      //     this.tick=false
      //     // //console.log(this.status1)
      //     this.Additional_Details.patchValue({
      //       verifiedMail:true
      //     })
      //     // this.Additional_Details.value.verifiedMail = true
      //     this.childEvent.emit(this.status1)
      //     // //console.log(this.Additional_Details.value.verifiedMail)
      //     // this.childEvent.emit(this.Additional_Details.value.verifiedMail)
      //   }
      //   else{
      //   this.status1 = false
      //   }
      //   }
      //   ,3000)

      // this._store.select(VerifyMailState).subscribe((data)=>{
      //   //console.log(data)
      //   if(data.result){
      //     if(data.result.hasError){
      //       //console.log("error")
      //     }
      //     else{
      //     this.status1 = false
      //     this.tick=false
      //     this.Additional_Details.patchValue({
      //       verifiedMail:true
      //     })
      //     this.childEvent.emit(this.status1)
      //     }
      //   }
      // })
    });
  }
  ngOnInit() {
    this._store.dispatch(SendOtpMailInitialValues())
    this._store.dispatch(SendOtpMobileInitialValues())
    this._store.dispatch(VerifyMailInitislValuenull())
    this._store.dispatch(VerifyMobileInitislValuenull())
    this.service1=this._store.select(VerifyGstInState).subscribe((data) => {
      //console.log(data)
      if (data.results) {
        if (data.results.result.hasError) {
          //console.log("error")
        }
        else {
          // this.data = data.results.result.results
          // this.post_object(data.results.result.results)
          this.data = data.results.result.results
        }
      }
    })
    this.service2=this._store.select(SendMailState).subscribe((data) => {
      this.loading = data.loading
      //console.log(data)
      if (data.results) {
        if (data.results.result.hasError) {
          //console.log("error")
        }
        else {
          // data.results.result.results
          this.post_object()
          this.openDialog()
        }
      }
    })
    this.service3 =this._store.select(VerifyMailState).subscribe((data)=>{
      //console.log(data)
      if(data.result){
        if(data.result.hasError){
          //console.log("error")
        }
        else{
         this.post_object()
        }
      }
    })
    
    this.service4=this._store.select(SendMobileState).subscribe((data) => {
      this.loading1 = data.loading
      //console.log(data)
      if (data.results) {
        if (data.results.result.hasError) {
          //console.log("error")
        }
        else {
          // data.results.result.results
          this.post_object()
          this.openMobileDialog()
        }
      }
    })
    this.service5 =this._store.select(VerifyMobileState).subscribe((data)=>{
      //console.log(data)
      if(data.result){
        if(data.result.hasError){
          //console.log("error")
        }
        else{
          this.post_object()
        }
      }
    })
    this.service6=this._Service.updateddate.subscribe((data) => {
      //console.log(data.email)
      this.tempemail = data.email
      this.tempmobilenumber = data.mobilenumber
      this.data = data
    })
  }
  post_object() {
    //console.log(this.Additional_Details, "firstname")

    this.post_data = {
      "registrationid": this.data.registrationid,
      "annualturnover": this.data.annualturnover,
      "averagedailyinvoices": this.data.averagedailyinvoices,
      "becomeinkreta": this.data.becomeinkreta,
      "blockname": this.data.blockname,
      "buildingnumber": this.data.buildingnumber,
      "canenableadditionaldetailsnext": this.data.canenableadditionaldetailsnext,
      "canenablecontactnext": this.data.canenablecontactnext,
      "city": this.data.city,
      "companydetails": this.data.companydetails,
      "companyname": this.data.companyname,
      "companysize": this.data.companysize,
      "companywebsite": this.data.companywebsite,
      "ctb": this.data.ctb,
      "ctj": this.data.ctj,
      "ctjcd": this.data.ctjcd,
      "cxdt": this.data.cxdt,
      "district": this.data.district,
      "dty": this.data.dty,
      "email": this.Additional_Details.value.email,
      "enquiryemailid": this.data.enquiryemailid,
      "firmtype": this.data.firmtype,
      "floornumber": this.data.floornumber,
      "frequencytype": this.data.frequencytype,
      "gstcertificate": this.data.gstcertificate,
      "gstcertificatename": this.data.gstcertificatename,
      "gstin": this.data.gstin,
      "gstincertificatemimetype": this.data.gstincertificatemimetype,
      "incorporationyear": this.data.incorporationyear,
      "industriesserviced": this.data.industriesserviced,
      "initiateddate": this.data.initiateddate,
      "keyproductcategories": this.data.keyproductcategories,
      "lastname": this.Additional_Details.value.lastName,
      "lastupdateon": this.data.lastupdateon,
      "lg": this.data.lg,
      "lineofbusiness": this.data.lineofbusiness,
      "location": this.data.location,
      "lt": this.data.lt,
      "mobilenumber": this.Additional_Details.value.mobileNumber,
      "msmecategories": this.data.msmecategories,
      "msmeregistered": this.data.msmeregistered,
      "msmeregistrationdate": this.data.msmeregistrationdate,
      "natureofbusiness_arr": this.data.natureofbusiness_arr,
      "natureofbusiness": this.data.natureofbusiness,
      "onboardingstatus": this.data.onboardingstatus,
      "pincode": this.data.pincode,
      "reportingcurrency": this.data.reportingcurrency,
      "standardpaymentterms": this.data.standardpaymentterms,
      "statecode": this.data.statecode,
      "stj": this.data.stj,
      "stjcd": this.data.stjcd,
      "street": this.data.street,
      "tradename": this.data.tradename,
      "validenquiryemailid": this.data.validenquiryemailid,
      "verifiedmail": this.data.verifiedmail,
      "verifiedphone": this.data.verifiedphone,
      "rgdt": this.data.rgdt,
      "sts": this.data.sts,
      "lstupdt": this.data.lstupdt,
      "pan": this.data.pan,
      "firstname": this.Additional_Details.value.firstName,
      "partnertype": this.data.partnertype,
      "isbusinesspartner": this.data.isbusinesspartner,
      "adminusername": this.data.adminusername,
      "adminpassword": this.data.adminpassword
    }
  }
  ChangeEmail() {

    
    if (this.tempemail === this.Additional_Details.value.email) {
      this.Additional_Details.patchValue({
        verifiedMail: true,
        canEnableContactNext: true
      })
    }
    else {
      this.Additional_Details.patchValue({
        verifiedMail: false,
        canEnableContactNext: false
      })
    }
    //console.log("email change")
  }
  ChangeMobile() {
    if (this.tempmobilenumber === this.Additional_Details.value.mobileNumber) {
      this.Additional_Details.patchValue({
        verifiedPhone: true,
        canEnableContactNext: true
      })
    }
    else {
      this.Additional_Details.patchValue({
      verifiedPhone: false,
      canEnableContactNext: false
    })
    }
    //console.log("email change")
    
  }
  emaildispatch() {
    const object = {
      "registrationid": this.data.registrationid,
      "annualturnover": this.data.annualturnover,
      "averagedailyinvoices": this.data.averagedailyinvoices,
      "becomeinkreta": this.data.becomeinkreta,
      "blockname": this.data.blockname,
      "buildingnumber": this.data.buildingnumber,
      "canenableadditionaldetailsnext": this.data.canenableadditionaldetailsnext,
      "canenablecontactnext": this.data.canenablecontactnext,
      "city": this.data.city,
      "companydetails": this.data.companydetails,
      "companyname": this.data.companyname,
      "companysize": this.data.companysize,
      "companywebsite": this.data.companywebsite,
      "ctb": this.data.ctb,
      "ctj": this.data.ctj,
      "ctjcd": this.data.ctjcd,
      "cxdt": this.data.cxdt,
      "district": this.data.district,
      "dty": this.data.dty,
      "email": this.data.email,
      "enquiryemailid": this.data.enquiryemailid,
      "firmtype": this.data.firmtype,
      "floornumber": this.data.floornumber,
      "frequencytype": this.data.frequencytype,
      "gstcertificate": this.data.gstcertificate,
      "gstcertificatename": this.data.gstcertificatename,
      "gstin": this.data.gstin,
      "gstincertificatemimetype": this.data.gstincertificatemimetype,
      "incorporationyear": this.data.incorporationyear,
      "industriesserviced": this.data.industriesserviced,
      "initiateddate": this.data.initiateddate,
      "keyproductcategories": this.data.keyproductcategories,
      "lastname": this.data.lastname,
      "lastupdateon": this.data.lastupdateon,
      "lg": this.data.lg,
      "lineofbusiness": this.data.lineofbusiness,
      "location": this.data.location,
      "lt": this.data.lt,
      "mobilenumber": this.data.mobilenumber,
      "msmecategories": this.data.msmecategories,
      "msmeregistered": this.data.msmeregistered,
      "msmeregistrationdate": this.data.msmeregistrationdate,
      "natureofbusiness_arr": this.data.natureofbusiness_arr,
      "natureofbusiness": this.data.natureofbusiness,
      "onboardingstatus": this.data.onboardingstatus,
      "pincode": this.data.pincode,
      "reportingcurrency": this.data.reportingcurrency,
      "standardpaymentterms": this.data.standardpaymentterms,
      "statecode": this.data.statecode,
      "stj": this.data.stj,
      "stjcd": this.data.stjcd,
      "street": this.data.street,
      "tradename": this.data.tradename,
      "validenquiryemailid": this.data.validenquiryemailid,
      "verifiedmail": this.data.verifiedmail,
      "verifiedphone": this.data.verifiedphone,
      "rgdt": this.data.rgdt,
      "sts": this.data.sts,
      "lstupdt": this.data.lstupdt,
      "pan": this.data.pan,
      "firstname": this.data.firstname,
      "partnertype": this.data.partnertype,
      "isbusinesspartner": this.data.isbusinesspartner,
      "adminusername": this.data.adminusername,
      "adminpassword": this.data.adminpassword
    }

    const url = Constants.SendMail + this.Additional_Details.value.email
    //console.log(url)
    this._store.dispatch(SendOtpMail({ url: url }))
    // this._store.dispatch(venderemailverfiy({data:{"gstin":this.Additional_Details.value.gstin,"email":this.Additional_Details.value.email}}))
  }
  mobiledispatch() {
    const url = Constants.SendMobile + this.Additional_Details.value.mobileNumber + "/" + this.Additional_Details.value.gstin
    //console.log(url)
    this._store.dispatch(SendOtpMobile({ url: url }))
    // this._store.dispatch(venderemailverfiy({data:{"gstin":this.Additional_Details.value.gstin,"email":this.Additional_Details.value.email}}))
  }
  get f() {
    return this.Additional_Details.controls
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
    this.service2.unsubscribe()
    this.service3.unsubscribe()
    this.service4.unsubscribe()
    this.service5.unsubscribe()
    this.service6.unsubscribe()
  }
}
