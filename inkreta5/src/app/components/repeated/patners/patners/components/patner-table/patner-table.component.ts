import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { Constants } from 'src/app/constants/constants';
import { GetPatnerGstinDetails, GetPatnerGstinDetailsInitialValue } from '../../../Actions/GetPatnerGstinDetails.actions';
import { getPatnersdataState } from '../../../Selectors/patners.selectors';
import { PatnersService } from '../../patners.service';

@Component({
  selector: 'app-patner-table',
  templateUrl: './patner-table.component.html',
  styleUrls: ['./patner-table.component.css']
})
export class PatnerTableComponent implements OnInit {
  data:any=null;
  partner_id:any;
  page:number=1;
  pageSize:number=8
  loading: any=false;
  service1: any;
  service2: any;
  filterinvoicelist: any=[];
  temp: any=[];
  mess: any;
  constructor(private store:Store,private service : PatnersService) { }

  ngOnInit() {
    this.store.dispatch(GetPatnerGstinDetailsInitialValue())
    this.service.callgetdataapi.next(true)
    this.service.callgetdataapi.subscribe((data)=>{
      if(data){
        this.store.dispatch(GetPatnerGstinDetails({url:Constants.GetpatnerGstin}))
      }
    })
    this.service1 = this.store.select(getPatnersdataState).subscribe((data:any)=>{
      this.loading = data.loading
      // //console.log(data)
      if(data?.result){
        if(data?.result?.hasError){
        }
        else{
          this.data = data?.result?.results
          this.filterinvoicelist= data?.result?.results
          this.temp= data?.result?.results
          this.partner_id = data?.result?.results[0]?.partner_id
          this.service.partner_id.next(data?.result?.results[0]?.partner_id)
          // //console.log("working")
          if(data?.result?.results.length === 0){
            this.service.error.next(true)
          }
          else{
            this.service.error.next(false)
          }
        }
      }
    })

    this.service2= this.service.table_search.subscribe((filterValue:any)=>{

      //console.log(filterValue)
      if(filterValue && this.data){
        this.page =1
          this.data=this.filterinvoicelist.filter((e:any) =>  (e.company_name+e.contactName+e.primary_phone_number).includes(filterValue));
        if(this.data.length === 0){
          this.mess="No Data Found"
        }
        else{
          this.mess=""
        }
      }
      else if(filterValue === ""){
        this.data = this.temp
        this.mess=""
      }
    })
  }
  opensidenav(){

  }
  patnerdetails(data:any,index:any){
    this.partner_id=data.partner_id
    this.service.partner_id.next(data.partner_id)
  }
  
  mainArraydesc: any = [];
  nameToggle = 1;
  numToggle: number = 1
  onname() {
    this.mainArraydesc = []
    this.numToggle = 1
    if(this.nameToggle < 3){
    this.nameToggle = this.nameToggle + 1;
    }
    else if(this.nameToggle === 3){
      this.nameToggle = this.nameToggle - 1;
    }
    const clonedData = cloneDeep(this.data);
    clonedData.sort(function (a: any, b: any) {
      return a.company_name - b.company_name
    });
    if( this.nameToggle === 2){
      this.data = clonedData
    }
    else if(this.nameToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.data = this.mainArraydesc
    }
  }
  onnumber(){
    this.mainArraydesc = []
    this.nameToggle = 1;
    if(this.numToggle < 3){
    this.numToggle = this.numToggle + 1;
    }
    else if(this.numToggle === 3){
      this.numToggle = this.numToggle - 1;
    }
    const clonedData = cloneDeep(this.data);
    clonedData.sort(function (a: any, b: any) {
      return a.contactName - b.contactName
    });
    if( this.numToggle === 2){
      this.data = clonedData
    }
    else if(this.numToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.data = this.mainArraydesc
    }
  }
  ngOnDestroy(){
    this.store.dispatch(GetPatnerGstinDetailsInitialValue())
    this.service1.unsubscribe()
  }
}
