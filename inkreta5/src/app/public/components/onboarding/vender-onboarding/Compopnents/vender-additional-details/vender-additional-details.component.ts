import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { AdditionalDetailsInitialValues, GetAdditionalDetails } from '../../Actions/AddtionalDetails.actions';
import { AdditionalDetailsState } from '../../Selectors/OnboardSelector.selector';
import { VenderOnboardingService } from '../../venderOnboardingService';
import { VerifydocumentsComponent } from '../verifydocuments/verifydocuments.component';
import {OnboardService} from '../../Onboard.service'

@Component({
  selector: 'app-vender-additional-details',
  templateUrl: './vender-additional-details.component.html',
  styleUrls: ['./vender-additional-details.component.css']
  // styleUrls: ['../components1.css']
})
export class VenderAdditionalDetailsComponent implements OnInit {
  @Input() 
  public Additional_Details:any;
  @Input()
  public ONBOARDING_MASTER_DROPDOWN:any;
  lineOfBusiness: any;
  annualTurnOver:any;
  companySize: any;
  reportingCurrency: any;
  msmeCategories: any;
  averageDailyInvoices: any;
  standardPaymentTerms: any;
  dumyList: any =[];
  mess: any;
  loading: any;
  service1: any;
  service2: any;
  att_base64: any=null;
  service3: any;
  att_verifydoc: any=null;
  fileselected: any="0 files selected";
  constructor(public _store:Store,public _Service:VenderOnboardingService,private dialog:MatDialog,public OnboardService:OnboardService) {
    // setTimeout(()=>{
    //   this.lineOfBusiness = this.ONBOARDING_MASTER_DROPDOWN.lineOfBusiness
    //   this.annualTurnOver = this.ONBOARDING_MASTER_DROPDOWN.annualTurnOver
    //   this.companySize = this.ONBOARDING_MASTER_DROPDOWN.companySize
    //   this.toppingList = this.ONBOARDING_MASTER_DROPDOWN.industriesServiced
    //   this.reportingCurrency = this.ONBOARDING_MASTER_DROPDOWN.reportingCurrency
    //   this.msmeCategories = this.ONBOARDING_MASTER_DROPDOWN.msmeCategories
    //   this.averageDailyInvoices = this.ONBOARDING_MASTER_DROPDOWN.averageDailyInvoices
    //   this.standardPaymentTerms = this.ONBOARDING_MASTER_DROPDOWN.standardPaymentTerms
    // },1000)
    
   }
  Year=[2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000]
  toppingList: any = [];
  dumy123:any=[]
  //  = ['Automotive','Aviation','Chemical-Pharma','Construction','Defense-Arms','Electric Power','Electronics- Computer','Electronics- Semiconductor','Energgy','Food','Industrial Robot','Low Technology','Meat Packing','Mining','Petroleum','Steel','Ship Building','Telecommunications','Textile','Water','Eduction','entertainment','Financial Services-Bankin NBFC','Insurance','Healthcare','Hospitality','Transport','Software','Others'];
  input_form ={
    width:'282px',
    height:'27px',
    margin:'12px'
  }
  input_form1 ={
    width:'95%',
    height:'27px'
  }
  addservice(){
    // //console.log(this.Additional_Details.value.industriesServiced)
    if(this.Additional_Details.value.industriesServiced === null){
      this.Additional_Details.controls['industriesServiced'].patchValue([])
    }
    // //console.log(this.toppingList)
    // //console.log(this.Additional_Details.value.industriesServicedAddmore)
    this.toppingList= Object.assign([], this.toppingList);
    this.toppingList.push(this.Additional_Details.value.industriesServicedAddmore)
    // //console.log(this.toppingList)
    this.dumyList=this.Additional_Details.value.industriesServiced.concat(this.Additional_Details.value.industriesServicedAddmore)
    this.Additional_Details.controls['industriesServiced'].patchValue(this.dumyList)
    this.Additional_Details.patchValue({
      industriesServicedAddmore:''
    })
    //console.log(this.Additional_Details)
    this.mess = "The value you have entered is added to the list"
    setTimeout(()=>{this.mess = ""},2000)
  }
  
  ngOnInit() {
    this._store.dispatch(AdditionalDetailsInitialValues())
    this._store.dispatch(GetAdditionalDetails({url:Constants.AdditionalDetails}))
    this.service1=this._store.select(AdditionalDetailsState).subscribe((data)=>{
      this.loading=data.loading
      if(data.results){
        if(data.results.result.hasError){
          //console.log("error")
        }
        else{
          this.lineOfBusiness = data.results.result.results.lineOfBusiness
          this.annualTurnOver = data.results.result.results.annualTurnOver
          this.companySize = data.results.result.results.companySize
          this.toppingList = data.results.result.results.industriesServiced
          this.reportingCurrency = data.results.result.results.reportingCurrency
          this.msmeCategories = data.results.result.results.msmeCategories
          this.averageDailyInvoices = data.results.result.results.averageDailyInvoices
          this.standardPaymentTerms = data.results.result.results.standardPaymentTerms
        }
      }
    })

    this.service2 = this.OnboardService.base64.subscribe((data)=>{
      if(data){
        this.att_base64 = data
        
          this.fileselected = data.length + " files selected"
       
      }
      else{
        this.fileselected = "0 files selected"
      }
    })

    this.service3 = this.OnboardService.verifydoc.subscribe((data)=>{
      if(data){
        this.att_verifydoc = data
      }
    })
    // this._Service.updateddate.subscribe((data) => {
    //   //console.log(data)
    //   this.Additional_Details.patchValue({
    //     annualTurnover:data.annualturnover
    //   })
    // })
    // //console.log(this.Additional_Details)
  }
  remove(value:any){
    const index = this.att_base64.indexOf(value);
    //console.log(index)
    if (index >= 0) {
      this.att_base64.splice(index, 1);
      this.att_verifydoc.splice(index ,1);
      this.OnboardService.base64.next(this.att_base64)
      this.OnboardService.verifydoc.next(this.att_verifydoc)
    }
  }
  open_doc(){
    const dialogRef = this.dialog.open(VerifydocumentsComponent ,{disableClose: true});
    dialogRef.afterClosed().subscribe(result => {
      // this.PartnerCode = result.PartnerCode;
      // this.companyName = result.CompanyName;

    });
  }
  get f(){
    return this.Additional_Details.controls
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
  }

}
