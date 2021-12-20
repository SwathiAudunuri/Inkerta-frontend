import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { externalValidators } from '../externalvaldators';
import { gstinverfy } from '../store/Actions';
import { getgstin, getresult, getstatus, stepperState } from '../store/States';

@Component({
  selector: 'app-Identification',
  templateUrl: './Identification.component.html',
  // styleUrls: ['../customer-onbording.component.css']
  styleUrls: ['./component.css']
})
export class IdentificationComponent implements OnInit {
  gstin: any;
  verify_button:any=false;
  result: any;
  status:any;
  captcha:any;
  url:any= "http://183.83.219.159:7001/onboarding/gstn/verified/";
  val: any = null ;
  errormess: string ="";
  dipulicate: any;
  isregiatered: any;
  registeredGST: any = false;
  errors: any;
  hasError: string = "";
  hasErrornext: string="";
  link: any="";
  errorgstnum: string="";
  // verify_btt: boolean =true;
  constructor(private _store:Store<{stepper:stepperState}>,private _myFB:FormBuilder,private _http : HttpClient) { }
  ctx:any;
  @Input()
  public Additional_Details:any;
  @Output() public childEvent = new EventEmitter();
  // this.childEvent.emit(this.isdisable)
  ngOnInit() {
    this.refresh()
    this._store.select(getgstin).subscribe((gstin) =>{
      this.gstin = gstin;                                       
    });
    this._store.select(getstatus).subscribe(status =>{
      this.status = status;
    });
  
  }
  refresh(){
    (<HTMLDivElement>document.getElementById('captcha')).innerHTML = "";

    let lengthOtp = 1000;
    this.val = Math.floor(lengthOtp + Math.random() * 9000);// to generate random  number
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 60;
    canv.height = 35;
    this.ctx = canv.getContext("2d");
    // console.log(this.val)
    this.ctx.font = "22px droid sans mono, consolas, monospace";
    this.ctx.fontStyle = "italic";
    this.ctx.strokeText(this.val, 0, 30);
    this.ctx.stroke = "red";
   
    (<HTMLDivElement>document.getElementById("captcha")).appendChild(canv); // adds the canvas to the body element
  }
  ngAfterViewChecked(){
    this._store.select(getresult).subscribe(result =>{
      this.dipulicate = result;
    });
    // console.log(this.dipulicate)
    // setTimeout(()=>{
      // console.log(this.captcha)
      // this._store.select(getgstin).subscribe((gstin) =>{
      //   this.gstin = gstin;                                       
      // });
      // this._store.select(getstatus).subscribe(status =>{
      //   this.status = status;
      // });
      // this._store.select(getresult).subscribe(result =>{
      //   this.dipulicate = result;
      // });
      // console.log("identification")
  
  }
  gstinver = this._myFB.group({
    gstin: ['',[Validators.required,externalValidators(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)]],
    captcha:['']
  })
  gstinverm(gst:any){
    console.log(gst.gstin)
    
    const url="http://183.83.219.159:7001/onboarding/gstn/registered/" + this.Additional_Details.value.gstin
    this._http.get<any>(url)
    .subscribe(data => {
      console.log("hasError --- >",data)
      if(data.hasError == true){
        
        if(gst.captcha == this.val){
          this._store.dispatch(gstinverfy({gstin : gst}))
          this.childEvent.emit(false)
          this.errormess=""
          this.verify_button = false
          setTimeout(()=>{
            if(this.dipulicate === null){
              this.errorgstnum = "Invalid GSTIN number please check"
              this.childEvent.emit(true)
              this.verify_button = false
            }
            else{
              this.hasErrornext = "GST Number Already Verified Successfully. Please click on Next to Proceed."
            }
          },1000)
         
          // setTimeout(()=>{
          //   this.Additional_Details.patchValue({
          //       captcha:null
          //     })
          //     this.refresh()
          // },500)
          
        }
        else{
          this.errormess = "captcha is invalid"
        } 
      }
      else if(data.hasError == false){
        
        this.hasError = "GST Already registered, please login to"
        this.link = "myinkreta.com"
        this.childEvent.emit(true)
        this.verify_button = false
        // this.Additional_Details.patchValue({
        //   captcha:null
        // })
        // this.refresh()
      }
      if(data.results===null){
        this.errors= data.errors.errorMessage
        //  console.log(data)
      }
      else if(data.results.isRegistered == true){
        console.log(data.results.isRegistered)
      this.isregiatered = data.results.isRegistered
      // console.log(data)
      }
    })

    // setTimeout( ()=>{
    //   if(this.isregiatered == true) {
    //     this.registeredGST = true
    //   }
    //   else
    //   {
    //     if(gst.captcha == this.val){
    //       this._store.dispatch(gstinverfy({gstin : gst}))
    //       this.errormess=""
    //       }
    //       else{
    //         this.errormess = "captcha is invalid"
    //       } 
    //   }
    // },2000)
  }
  onchange(){
    this.hasError=""
        this.hasErrornext=""
        this.link=""
        this.errorgstnum=""
  }
  onChangeGst(){
        // console.log("gstin changed")
        // this.registeredGST = !this.registeredGST
        
        this.status = true
        this.registeredGST = false
        this.verify_button = false
        if(this.Additional_Details.value.captcha == this.val){
          // console.log("verified")
          this.verify_button = true
    
        }
      }
      onChangecaptcha(){
        this.hasError = ""
        this.Additional_Details.patchValue({
          captcha:null
        })
      }
  get f(){
    return this.gstinver.controls
  }

}
