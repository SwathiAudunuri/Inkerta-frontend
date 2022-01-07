import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { externalValidators } from 'src/app/components/vendor/profilemanagement/profilemanagement/externalvaldators';
import { Constants } from 'src/app/constants/constants';
import { GetCaptcha } from '../../Actions/onboardCaptcha.actions';
import { VerifyGstIn, VerifyGstInInitialvalue } from '../../Actions/verifyGstin.actions';
import { CapthaState, VerifyGstInState } from '../../Selectors/OnboardSelector.selector';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  loading: any;


  gstin: any;
  verify_button: any = false;
  result: any;
  status: any;
  captcha: any;
  utl: any = Constants.GSTIN_DETAILS_SERVICE1
  val: any = null;
  errormess: string = "";
  dipulicate: any;
  isregiatered: any;
  registeredGST: any = false;
  errors: any;
  hasError: string = "";
  hasErrornext: string = "";
  link: any = "";
  errorgstnum: string = "";
  loading1: any;
  service1: any;
  service2: any;
  constructor(private _store: Store, private _myFB: FormBuilder, private _http: HttpClient) { }
  ctx: any;
  @Input()
  public Additional_Details: any;
  @Output() public childEvent = new EventEmitter();
  // this.childEvent.emit(this.isdisable)
  ngOnInit() {
    // this._store.dispatch(VerifyGstInInitialvalue())
    // this._store.dispatch(GetCaptcha({ url: Constants.GenerateCaptcha }))
    this.call_captcha()
    this.service1=this._store.select(CapthaState).subscribe((data) => {
      this.loading = data.loading
      // //console.log(data)
      if(data.results){
        if(data.results.result.hasError){
          //console.log("error in generate captcha")
        }
        else{
          //console.log(data.results.result.results.captchaOTPKey,"captcha")
          this.generatechaptchaimg(data.results.result.results.captchaOTPKey)
        }
      }
    })
    this.service2=this._store.select(VerifyGstInState).subscribe((data) => {
      this.loading1=data.loading
      //console.log(data)
      if(data.results){
        if(data.results.result.hasError){
          this.errorgstnum = data.results.result.errors.errorMessage
          this.childEvent.emit(true)
          this.verify_button = true
          this.hasError=""
        }
        else{
          this.errorgstnum = ""
          this.hasErrornext = "GST Number Already Verified Successfully. Please click on Next to Proceed."
          this.childEvent.emit(false)
          this.verify_button = false
        }
      }
    })


    // this.refresh()
    // this._store.select(vendergetgstin).subscribe((gstin) => {
    //   this.gstin = gstin;
    // });
    // this._store.select(vendergetstatus).subscribe(status => {
    //   this.status = status;
    // });

  }
  call_captcha(){
    this._store.dispatch(GetCaptcha({ url: Constants.GenerateCaptcha }))
  }
  verifygstin() {
    const url =Constants.VerifyGstIn+this.Additional_Details.value.captcha+"/"+this.Additional_Details.value.gstin
    this._store.dispatch(VerifyGstIn({ url: url }))
    // //console.log(url)
    this.call_captcha()
    this.Additional_Details.patchValue({
      captcha: null
    })
  
  }
  generatechaptchaimg(captcha:any){
    (<HTMLDivElement>document.getElementById('captcha')).innerHTML = "";
    //console.log("function",captcha)
    this.val = captcha;
    var canv = document.createElement("canvas");
      canv.id = "captcha";
      canv.width = 60;
      canv.height = 35;
      this.ctx = canv.getContext("2d");
      this.ctx.font = "22px droid sans mono, consolas, monospace";
      this.ctx.fontStyle = "italic";
      this.ctx.strokeText(captcha, 0, 30);
      this.ctx.stroke = "red";
    (<HTMLDivElement>document.getElementById("captcha")).appendChild(canv);
  }


  gstinver = this._myFB.group({
    gstin: ['', [Validators.required, externalValidators(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)]],
    captcha: ['']
  })

  onchange() {
    this.hasError = ""
    this.hasErrornext = ""
    this.link = ""
    this.errorgstnum = ""
  }
  onChangeGst() {
    this.status = true
    this.registeredGST = false
    this.verify_button = false
    this.childEvent.emit(true)
    if(this.Additional_Details.value.captcha>999) {
      this.verify_button = true

    }
  }
  onChangecaptcha() {
    this.hasError = ""
    this.Additional_Details.patchValue({
      captcha: null
    })
  }
  get f() {
    return this.gstinver.controls
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
    this.service2.unsubscribe()
  
  }
}

