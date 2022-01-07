import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { externalValidators } from '../externalvaldators';
export interface PeriodicElement {
  Company_Name: string;
  GSTIN: string;
  Location: string;
  NatureOfBusiness: string;
}

const ELEMENT_DATA: any = [
  {GSTIN: '08AAACS5123K1ZD', Company_Name: 'SAMSUNG INDIA ELECTRONICS PRIVATE LIMITED', Location: 'Gopal Bari, Near Ajmer Flyover', NatureOfBusiness: 'Office / Sale Office,Recipient of Goods or Services,Wholesale Business,Service Provision,Input Service Distributor (ISD),Warehouse / Depot'},
  
];
@Component({
  selector: 'app-other-gstin',
  templateUrl: './other-gstin.component.html',
  styleUrls: ['../profilemanagement.component.css']
})
export class OtherGstinComponent implements OnInit {
  @Input() public edit_btn:any;
  dataSource: any;
  errormess: string="";
  gstinerror: boolean=true;
  duplicate:boolean = false;
  constructor(public _myFB:FormBuilder,public _http : HttpClient) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  }
  GSTIN_:any = this._myFB.group({
    gstin:['',[Validators.required,externalValidators(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)]]
  })
  displayedColumns: string[] = ['GSTIN', 'Company_Name', 'Location', 'NatureOfBusiness','delete'];
  add_gstin(){
    this.duplicate = false
    for(var i=0;i<ELEMENT_DATA.length;i++){
      //console.log(ELEMENT_DATA[i].GSTIN)
      if(ELEMENT_DATA[i].GSTIN === this.GSTIN_.value.gstin){
        this.duplicate = true
      }
    }
    if(this.duplicate === true){
      //console.log("no entry")
      this.gstinerror = false
        this.errormess = "Already GSTIN Number agist in table"
    }
    else if(this.duplicate === false){
      //console.log("you can enter")
      if(!this.GSTIN_.controls.gstin.invalid){
        this.gstinerror = true
        const url = "https://164.52.217.12:8443/onboarding/gstn/verified/"+this.GSTIN_.value.gstin
        this._http.get<any>(url)
        .subscribe(data => {
        if(data.hasError === false){
          ELEMENT_DATA.push({'GSTIN':data.results.gstin,'Company_Name':data.results.companyName,'Location':data.results.location,'NatureOfBusiness':data.results.natureOfBusiness})
          this.GSTIN_.patchValue({
            'gstin':'',
            'gstinotherstates':ELEMENT_DATA
          })
        }
        if(data.hasError === true){
          this.errormess = "Something wrong"
        }});
      }
      else if(this.GSTIN_.controls.gstin.invalid){
        this.gstinerror = false
        if(this.GSTIN_.value.gstin === ""){
          this.errormess = "GSTIN Number is required"
        }
        else{
          this.errormess = "GSTIN Number is Invalid"
        }
      }
    }
  }
  gstin_input(){
    if(this.GSTIN_.controls.gstin.invalid){
      if(this.GSTIN_.value.gstin === ""){
        this.errormess = "GSTIN Number is required"
      }
      else{
        this.errormess = "GSTIN Number is Invalid"
      }
    }
    else{
      this.gstinerror = true
    }
  }
  delete_gstin(index:any){
    ELEMENT_DATA.splice(index,1);
  }
}
