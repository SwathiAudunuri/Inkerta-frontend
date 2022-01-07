import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdditionaDetailsState } from '../../../Selectors/profilemanagement.selectors';

@Component({
  selector: 'app-additional-details-edit',
  templateUrl: './additional-details-edit.component.html',
  styleUrls: ['./additional-details-edit.component.css']
})
export class AdditionalDetailsEditComponent implements OnInit {
 
  @Input() public ONBOARDING_MASTER_DROPDOWN:any;
  @Input() public Profile_Details:any;
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
  loading: any;
  options: any;
  constructor(public store:Store) { 
  }

  ngOnInit(): void {
    this.store.select(AdditionaDetailsState).subscribe((data)=>{
      //console.log(data)
      this.loading = data.loading
      if(data.details.hasError){
        //console.log("error")
      }
      else{
        this.options = data.details.results
      }
    })
  }
  get f(){
    return this.Profile_Details.controls
  }
  addservice(){
    if(this.Profile_Details.value.industriesServiced === null){
      this.Profile_Details.controls['industriesServiced'].patchValue([])
    }
    this.toppingList.unshift(this.Profile_Details.value.industriesServicedAddmore)
    this.dumyList=this.Profile_Details.value.industriesServiced.concat(this.Profile_Details.value.industriesServicedAddmore)
    this.Profile_Details.controls['industriesServiced'].patchValue(this.dumyList)
    this.Profile_Details.patchValue({
      industriesServicedAddmore:''
    })
    //console.log(this.Profile_Details)
    this.mess = "The value you have entered is added to the list"
    setTimeout(()=>{this.mess = ""},2000)
  }

}
