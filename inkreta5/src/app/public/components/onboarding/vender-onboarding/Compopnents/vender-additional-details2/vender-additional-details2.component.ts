import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-vender-additional-details2',
  templateUrl: './vender-additional-details2.component.html',
  styleUrls: ['./vender-additional-details2.component.css']
  // styleUrls: ['../components1.css']
})
export class VenderAdditionalDetails2Component implements OnInit {
  @Input()
  public Additional_Details:any;
  lineOfBusiness:any = "";
  incorporationYear:any = "";
  annualTurnover:any ="";
  companySize:any ="";
  companyDetail:any="";
  keyProductCategories:any="";
  industriesServiced:any="";
  industriesServicedAddmore:any="";
  standardPaymentTerms:any="";
  reportingCurrency:any="";
  companyWebsite:any="";
  msmeRegistered:any="";
  msmeCategories:any="";
  averageDailyInvoices:any="";
  salesEnquiryEmailId:any="";
  constructor() { }

  ngOnInit(): void {
    // //console.log(this.Additional_Details.value.lineOfBusiness)
    this.lineOfBusiness = this.Additional_Details.value.lineOfBusiness
    this.incorporationYear = this.Additional_Details.value.incorporationYear
    this.annualTurnover = this.Additional_Details.value.annualTurnover
    this.companySize = this.Additional_Details.value.companySize
    this.companyDetail = this.Additional_Details.value.companyDetail
    this.keyProductCategories = this.Additional_Details.value.keyProductCategories
    this.industriesServiced = this.Additional_Details.value.industriesServiced
    this.industriesServicedAddmore = this.Additional_Details.value.industriesServicedAddmore
    this.standardPaymentTerms = this.Additional_Details.value.standardPaymentTerms
    this.reportingCurrency = this.Additional_Details.value.reportingCurrency
    this.companyWebsite = this.Additional_Details.value.companyWebsite
    this.msmeRegistered = this.Additional_Details.value.msmeRegistered
    this.msmeCategories = this.Additional_Details.value.msmeCategories
    this.averageDailyInvoices = this.Additional_Details.value.averageDailyInvoices
    this.salesEnquiryEmailId = this.Additional_Details.value.salesEnquiryEmailId

  }
}
