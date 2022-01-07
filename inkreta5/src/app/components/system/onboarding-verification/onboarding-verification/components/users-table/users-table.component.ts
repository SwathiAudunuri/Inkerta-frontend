import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { Constants } from 'src/app/constants/constants';
import { getpartners } from '../../../Actions/GetPartners.actions';
import { onboardverificationService } from '../../../onboarding-verification.service';
import { GetPatners, SetStatusState } from '../../../Selectors/onboarding-verification.selectors';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any = [
  {name: 'SAMSUNG PVT', role: 'Vendor Admin', status: 'InActive'},
  {name: 'LG PVT', role: 'Customer Admin', status: 'InActive'},
  {name: 'MSI PVT', role: 'Vendor Admin', status: 'InActive'},
  {name: 'DELL PVT', role: 'Customer Admin', status: 'InActive'},
  {name: 'HP PVT', role: 'Vendor Admin', status: 'InActive'},
  {name: 'MOTO PVT', role: 'Customer Admin', status: 'InActive'},
  {name: 'APPLE PVT', role: 'Vendor Admin', status: 'InActive'},
  {name: 'LENOVO PVT', role: 'Customer Admin', status: 'InActive'},
  {name: 'REALME PVT', role: 'Vendor Admin', status: 'InActive'},
  {name: 'LOGITECH PVT', role: 'Customer Admin', status: 'InActive'},
];

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  page:number=1;
  pageSize:number = 8;
  displayedColumns: string[] = ['Name', 'Role', 'Status'];
  dataSource:any;
  // = ELEMENT_DATA;
  loading:any=false;
  service1: any;
  service2: any;
  partner_id:any;
  loading1: any;
  mainArraydesc: any;
  dateToggle: any;
  nameToggle: any=1;
  dueDateToggle: any;
  nToggle: any=1;
  typeToggle: any=1;
  statusToggle: any=1;
  dummy:any;
  service3: any;
  search: any;
  mess: any;
  constructor(private store:Store,private service:onboardverificationService) { }

  ngOnInit() {
    this.service.status.next(null)
          this.service.patnerId.next(null)
    this.store.dispatch(getpartners({url:Constants.GetPatners}))

    this.service1 = this.store.select(GetPatners).subscribe((data:any)=>{
      //console.log(data)
      this.loading = data.loading
      if(data.partners){
        if(data.partners.hasError){
          //console.log("error")
        }
        else{
          this.dataSource = data.partners?.results
          this.dummy = data.partners?.results
          this.service.status.next(data.partners?.results[0]?.status)
          this.service.patnerId.next(data.partners?.results[0]?.partner_id)
          this.partner_id = data.partners?.results[0]?.partner_id
          // this.dataSource =new MatTableDataSource<any>(data.partners.results);
        }
      }
    })
    this.service2 = this.store.select(SetStatusState).subscribe((data:any)=>{
      this.loading1 = data.loading
      if(data.status){

        if(data.status.hasError){
          //console.log("error")
        }
        else{
          this.store.dispatch(getpartners({url:Constants.GetPatners}))
        }
      }
    })
    this.service3 = this.service.search.subscribe((data)=>{    
        this.search = data
        this.filter()
    })
  }
  filter(){
    if(this.search && this.dataSource){
      this.page =1
        this.dataSource=this.dataSource.filter((e:any) =>  (e.company_name+e.status+e.partner_id+e.partner_type+e.contactName).includes(this.search));
      if(this.dataSource.length === 0){
        this.mess="No Data Found"
      }
      else{
        this.mess=""
      }
    }
    else if(this.search === ""){
      this.dataSource = this.dummy
    }
  }
  table_data(data:any){
    this.service.status.next(data.status)
    this.service.patnerId.next(data.partner_id)
    this.partner_id = data.partner_id
  }
  Sortname(){
    this.mainArraydesc = []
    this.dateToggle = 1
    this.dueDateToggle = 1
    this.typeToggle=1
    this.nToggle=1
    this.statusToggle=1
    if(this.nameToggle < 3){
    this.nameToggle = this.nameToggle + 1;
    }
    else if(this.nameToggle === 3){
      this.nameToggle = this.nameToggle - 1;
    }
    const clonedData:any = cloneDeep(this.dataSource);
    clonedData.sort(function (a: any, b: any) {
      return a.company_name - b.company_name
    });
    if( this.nameToggle === 2){
      this.dataSource = clonedData
    }
    else if(this.nameToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.dataSource = this.mainArraydesc
    }
  }
  onSort(){
    this.dateToggle=1
    this.mainArraydesc = []
    this.nameToggle = 1
    this.dueDateToggle = 1
    this.typeToggle=1
    this.statusToggle=1
    if(this.nToggle < 3){
    this.nToggle = this.nToggle + 1;
    }
    else if(this.nToggle === 3){
      this.nToggle = this.nToggle - 1;
    }
    const clonedData:any = cloneDeep(this.dataSource);
    clonedData.sort(function (a: any, b: any) {
      return a.contactName - b.contactName
    });
    if( this.nToggle === 2){
      this.dataSource = clonedData
    }
    else if(this.nToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.dataSource = this.mainArraydesc
    }
  }
  sorttype(){
    this.mainArraydesc = []
    this.nameToggle = 1
    this.nToggle = 1
    this.statusToggle=1
    this.dateToggle=1
    if(this.typeToggle < 3){
    this.typeToggle = this.typeToggle + 1;
    }
    else if(this.typeToggle === 3){
      this.typeToggle = this.typeToggle - 1;
    }
    const clonedData:any = cloneDeep(this.dataSource);
    clonedData.sort(function (a: any, b: any) {
      return a.partner_type - b.partner_type
    });
    if( this.typeToggle === 2){
      this.dataSource = clonedData
    }
    else if(this.typeToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.dataSource = this.mainArraydesc
    }
  }
  SortStatus(){
    this.mainArraydesc = []
    this.nameToggle = 1
    this.nToggle = 1
    this.typeToggle = 1
    this.dateToggle=1
    if(this.statusToggle < 3){
    this.statusToggle = this.statusToggle + 1;
    }
    else if(this.statusToggle === 3){
      this.statusToggle = this.statusToggle - 1;
    }
    const clonedData:any = cloneDeep(this.dataSource);
    clonedData.sort(function (a: any, b: any) {
      return a.status - b.status
    });
    if( this.statusToggle === 2){
      this.dataSource = clonedData
    }
    else if(this.statusToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.dataSource = this.mainArraydesc
    }
  }
  sortdate(){
    this.mainArraydesc = []
    this.nameToggle = 1
    this.nToggle = 1
    this.typeToggle = 1
    if(this.dateToggle < 3){
    this.dateToggle = this.dateToggle + 1;
    }
    else if(this.dateToggle === 3){
      this.dateToggle = this.dateToggle - 1;
    }
    const clonedData:any = cloneDeep(this.dataSource);
    clonedData.sort(function (a: any, b: any) {
      return a.onboarded_on - b.onboarded_on
    });
    if( this.dateToggle === 2){
      this.dataSource = clonedData
    }
    else if(this.dateToggle === 3){
      for (let i = 0; i < clonedData.length; i++) {
        this.mainArraydesc.unshift(clonedData[i])
      }
     this.dataSource = this.mainArraydesc
    }
  }
  ngOnDestroy(){
      this.service1.unsubscribe()
      this.service2.unsubscribe()
      this.service3.unsubscribe()
  }
}
