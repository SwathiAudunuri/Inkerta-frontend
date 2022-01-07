import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { AddGstin, AddGstinInitialValue } from '../../../Actions/Add_gstin.actions';
import { AddGstinState, GatProfileState } from '../../../Selectors/profilemanagement.selectors';
import { externalValidators } from '../../externalvaldators';
export interface PeriodicElement {
  Company_Name: string;
  GSTIN: string;
  Location: string;
  NatureOfBusiness: string;
}


@Component({
  selector: 'app-profile-other-gstin',
  templateUrl: './profile-other-gstin.component.html',
  styleUrls: ['./profile-other-gstin.component.css']
})
export class ProfileOtherGstinComponent implements OnInit {

  // @Input() public edit_btn:any;
  edit_othergstin:any=false
  dataSource: any;
  errormess: string="";
  gstinerror: boolean=true;
  duplicate:boolean = false;
  ELEMENT_DATA: any=[];
  service: any;
  service1: any;
  constructor(public _myFB:FormBuilder,public _http : HttpClient,public store:Store) { }

  ngOnInit() {
    this.store.dispatch(AddGstinInitialValue())
    this.service = this.store.select(GatProfileState).subscribe((data)=>{
      //console.log(data)
      if(data.details){
        if(data.details.hasError){
          //console.log("error in profilemanagement")
        }
        else{
          // this.profile_info = data.details.results
          this.ELEMENT_DATA = data.details.results.partnerGSTINDetails
          this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
        }
      }
    })
    this.service1 = this.store.select(AddGstinState).subscribe((data)=>{
      //console.log(data)
      if(data.details){
        if(data.details.hasError){
          //console.log("error")
          this.gstinerror = false
          this.errormess = data.details.errors.errorMessage
        }
        else{
          this.edit_othergstin = false
          this.displayedColumns.splice(0, 1);
          this.gstinerror = true
          this.errormess = ""
          this.ELEMENT_DATA= Object.assign([], this.ELEMENT_DATA);
          this.ELEMENT_DATA.push({'gstin':data.details.results.gstin,'tradename':data.details.results.tradename,'loc':data.details.results.loc,'nba':data.details.results.nba})
          this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
          this.GSTIN_.patchValue({
            'gstin':'',
          })
          //console.log("success")
        }
      }
    })

    // if (column.isActive) {
    //   if (column.possition > this.columnList.length - 1) {
    //     this.columnList.push(column.name);
    //   } else {
    //     this.columnList.splice(column.possition, 0, column.name);
    //   }
    // } 
  }
  GSTIN_:any = this._myFB.group({
    gstin:['',[Validators.required,externalValidators(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/)]]
  })
  displayedColumns: string[] = ['GSTIN', 'Trade_Name', 'Location', 'NatureOfBusiness'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  add_gstin(){
    this.store.dispatch(AddGstinInitialValue())
    var url = Constants.AddGstin+this.GSTIN_.value.gstin
    this.store.dispatch(AddGstin({url:url}))
    //console.log(url)
  }
  // add_gstin(){
  //   this.duplicate = false
  //   for(var i=0;i<ELEMENT_DATA.length;i++){
  //     //console.log(ELEMENT_DATA[i].GSTIN)
  //     if(ELEMENT_DATA[i].GSTIN === this.GSTIN_.value.gstin){
  //       this.duplicate = true
  //     }
  //   }
  //   if(this.duplicate === true){
  //     //console.log("no entry")
  //     this.gstinerror = false
  //       this.errormess = "Already GSTIN Number agist in table"
  //   }
  //   else if(this.duplicate === false){
  //     //console.log("you can enter")
  //     if(!this.GSTIN_.controls.gstin.invalid){
  //       this.gstinerror = true
  //       // const url = "https://164.52.217.12:8443/onboarding/gstn/verified/"+this.GSTIN_.value.gstin
  //       const url = Constants.GSTIN_DETAILS_SERVICE1+this.GSTIN_.value.gstin
  //       this._http.get<any>(url)
  //       .subscribe(data => {
  //       if(data.hasError === false){
  //         if(data.results.companyName === "UJJIVAN SMALL FINANCE BANK LIMITED"){
  //           ELEMENT_DATA.push({'GSTIN':data.results.gstin,'Company_Name':data.results.companyName,'Location':data.results.location,'NatureOfBusiness':data.results.natureOfBusiness})
  //           this.GSTIN_.patchValue({
  //             'gstin':'',
  //             'gstinotherstates':ELEMENT_DATA
  //           })
  //         }
  //         else{
  //           //console.log("error in management")
  //           this.gstinerror = false
  //           this.errormess = "This GSTIN not belongs to this company"
  //         }
  //       }
  //       if(data.hasError === true){
  //         this.gstinerror = false
  //         this.errormess = "Something wrong"
  //       }});
  //     }
  //     else if(this.GSTIN_.controls.gstin.invalid){
  //       this.gstinerror = false
  //       if(this.GSTIN_.value.gstin === ""){
  //         this.errormess = "GSTIN Number is required"
  //       }
  //       else{
  //         this.errormess = "GSTIN Number is Invalid"
  //       }
  //     }
  //   }
  // }
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
    this.ELEMENT_DATA.splice(index,1);
  }
  edit_table(){
    this.edit_othergstin = true
    // const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    // this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    
    this.displayedColumns.push("delete")
    // //console.log(this.displayedColumns)
  }
  ngOnDestroy(){
    this.service.unsubscribe()
    this.service1.unsubscribe()
  }
}
