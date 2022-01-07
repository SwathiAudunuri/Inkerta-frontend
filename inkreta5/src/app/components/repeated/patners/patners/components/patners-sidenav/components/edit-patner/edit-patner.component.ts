import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import {  getPatnersdetailsState, savegstinState } from '../../../../../Selectors/patners.selectors';
import { FormBuilder, Validators } from '@angular/forms';
import { SaveGSTIN, SaveGSTINInitialValue } from '../../../../../Actions/savepatnerdata.actions';
import { PatnersService } from '../../../../patners.service';
import { externalValidators } from '../../../../externalValdators';

@Component({
  selector: 'app-edit-patner',
  templateUrl: './edit-patner.component.html',
  styleUrls: ['./edit-patner.component.css']
})
export class EditPatnerComponent implements OnInit {
  @Output() public editdetails = new EventEmitter()
  @Input() public index:any;
  service1: any;
  loading: any=false;
  service2: any;
  loading1: any=false;
  constructor(private store:Store,private _myfb:FormBuilder,private service:PatnersService) { }
  new_patner:any =this._myfb.group({
      partnerId: [null],
      companyName: [null],
      gstin: [null],
      country: [null],
      firmType: [null],
      industry: [null,[Validators.required]],
      firstName: [null,[Validators.required]],
      lastName: [null,[Validators.required]],
      title: [null,[Validators.required]],
      primaryPhoneNumber: [null,[Validators.required, externalValidators(/^[0-9\b]+$/)]],
      secondaryPhoneNumber: [null,[externalValidators(/^[0-9\b]+$/)]],
      email: [null,[Validators.required, externalValidators(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
      natureOfBusiness: [null],
      panNo: [null],
      partnerType: [null,[Validators.required]],
      paymentTerms: [null,[Validators.required]],
      reportingCurrency: [null,[Validators.required]],
      website: [null,[Validators.required]],
      partnerTo: [null],
      partnerAddress: [null]
  })
  ngOnInit() {
    this.store.dispatch(SaveGSTINInitialValue())
    this.service1 = this.store.select(getPatnersdetailsState).subscribe((data:any)=>{
      this.loading = data.loading
      // //console.log(data)
      if(data?.result){
        if(data?.result?.hasError){
          // //console.log("working")
        }
        else{
          
          this.new_patner.patchValue({
            partnerId: data?.result?.results?.partnerId,
            companyName: data?.result?.results?.companyName,
            gstin: data?.result?.results?.gstin,
            country: data?.result?.results?.country,
            firmType: data?.result?.results?.firmType,
            industry: data?.result?.results?.industry,
            firstName: data?.result?.results?.firstName,
            lastName: data?.result?.results?.lastName,
            title: data?.result?.results?.title,
            primaryPhoneNumber: data?.result?.results?.primaryPhoneNumber,
            secondaryPhoneNumber: data?.result?.results?.secondaryPhoneNumber,
            email: data?.result?.results?.email,
            natureOfBusiness: data?.result?.results?.natureOfBusiness,
            panNo: data?.result?.results?.panNo,
            partnerType: data?.result?.results?.partnerType,
            paymentTerms: data?.result?.results?.paymentTerms,
            reportingCurrency: data?.result?.results?.reportingCurrency,
            website: data?.result?.results?.website,
            partnerTo: data?.result?.results?.partnerTo,
            partnerAddress: data?.result?.results?.partnerAddress
          })
        }
      }
    })
    this.service2 = this.store.select(savegstinState).subscribe((data:any)=>{
      this.loading1 = data.loading
      if(data?.result){
        if(data?.result.hasError){
          //console.log("working")
        }
        else{
          //console.log("working")
          this.service.callgetdataapi.next(true)
          this.close()
        }
      }
    })
  }
  close(){
    this.editdetails.emit(false)
    this.service.title.next(false)
  }
  get f() {
    return this.new_patner.controls
  }
  submit(){
    //console.log(this.new_patner.value)
    this.store.dispatch(SaveGSTIN({url:Constants.SavepatnerGstin,data:this.new_patner.value}))
  }
  ngOnDestroy(){
    this.store.dispatch(SaveGSTINInitialValue())
    this.service1.unsubscribe()
    this.service2.unsubscribe()
  }
}