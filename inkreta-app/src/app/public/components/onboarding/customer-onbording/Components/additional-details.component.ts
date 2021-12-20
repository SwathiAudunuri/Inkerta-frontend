import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  // styleUrls: ['../customer-onbording.component.css']
  styleUrls: ['./component.css']
})
export class AdditionalDetailsComponent implements OnInit {
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
  constructor() {
    setTimeout(()=>{
      // console.log(this.ONBOARDING_MASTER_DROPDOWN)
      this.lineOfBusiness = this.ONBOARDING_MASTER_DROPDOWN.lineOfBusiness
      this.annualTurnOver = this.ONBOARDING_MASTER_DROPDOWN.annualTurnOver
      this.companySize = this.ONBOARDING_MASTER_DROPDOWN.companySize
      this.toppingList = this.ONBOARDING_MASTER_DROPDOWN.industriesServiced
      this.reportingCurrency = this.ONBOARDING_MASTER_DROPDOWN.reportingCurrency
      this.msmeCategories = this.ONBOARDING_MASTER_DROPDOWN.msmeCategories
      this.averageDailyInvoices = this.ONBOARDING_MASTER_DROPDOWN.averageDailyInvoices
      this.standardPaymentTerms = this.ONBOARDING_MASTER_DROPDOWN.standardPaymentTerms
    },500)
    
   }
  Year=[2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000]
  toppingList: string[] = [];
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
    console.log(this.Additional_Details.value.industriesServiced)
    if(this.Additional_Details.value.industriesServiced === null){
      this.Additional_Details.controls['industriesServiced'].patchValue([])
    }
    this.toppingList.unshift(this.Additional_Details.value.industriesServicedAddmore)
    this.dumyList=this.Additional_Details.value.industriesServiced.concat(this.Additional_Details.value.industriesServicedAddmore)
    this.Additional_Details.controls['industriesServiced'].patchValue(this.dumyList)
    this.Additional_Details.patchValue({
      industriesServicedAddmore:''
    })
    console.log(this.Additional_Details)
    this.mess = "The value you have entered is added to the list"
    setTimeout(()=>{this.mess = ""},2000)
  }
  
  ngOnInit() {
  }
  get f(){
    return this.Additional_Details.controls
  }

}
