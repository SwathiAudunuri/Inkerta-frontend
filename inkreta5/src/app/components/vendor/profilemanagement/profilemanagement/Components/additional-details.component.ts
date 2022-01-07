import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-details-edit',
  templateUrl: './additional-details.component.html',
  styleUrls: ['../profilemanagement.component.css']
})
export class AdditionalDetailsEditComponent implements OnInit {
  
  @Input() public ONBOARDING_MASTER_DROPDOWN:any;
  @Input() public Additional_Details:any;
  lineOfBusiness: any=[];
  annualTurnOver: any=[];
  companySize: any=[];
  toppingList: any=[];
  reportingCurrency: any=[];
  msmeCategories: any=[];
  averageDailyInvoices: any=[];
  standardPaymentTerms: any=[];
  Year=[2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000];
  dumyList: any=[];
  mess: string="";
  constructor() { 
    setTimeout(()=>{
      // //console.log("in additional details",this.ONBOARDING_MASTER_DROPDOWN)
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

  ngOnInit(): void {
  }
  get f(){
    return this.Additional_Details.controls
  }
  addservice(){
    if(this.Additional_Details.value.industriesServiced === null){
      this.Additional_Details.controls['industriesServiced'].patchValue([])
    }
    this.toppingList.unshift(this.Additional_Details.value.industriesServicedAddmore)
    this.dumyList=this.Additional_Details.value.industriesServiced.concat(this.Additional_Details.value.industriesServicedAddmore)
    this.Additional_Details.controls['industriesServiced'].patchValue(this.dumyList)
    this.Additional_Details.patchValue({
      industriesServicedAddmore:''
    })
    //console.log(this.Additional_Details)
    this.mess = "The value you have entered is added to the list"
    setTimeout(()=>{this.mess = ""},2000)
  }

}
