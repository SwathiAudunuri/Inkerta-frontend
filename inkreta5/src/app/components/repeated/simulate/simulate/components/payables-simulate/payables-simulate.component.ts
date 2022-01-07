import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { simulateState } from '../../../Selectors/simulate.selectors';
import { SimulateService } from '../../simulate.service';


const ELEMENT_DATA: any = [
  {no: 'INV/HP_01',type:'I',name: 'HP INDIA SALES PRIVATE LIMITED',duedate:'December 25, 2022 01:30:00', amt: 100000,cashflow:true},
  {no: 'OPEX',type:'B', name: 'Rent',duedate:'June 18, 2020 02:30:00', amt: 100000,cashflow:false},
  {no: 'INV/DELL_4545',type:'I', name: 'DELL INDIA SALES PRIVATE LIMITED',duedate:'December 25, 2020 01:30:00', amt: 500000,cashflow:true},
  {no: 'OPEX',type:'B', name: 'Salary',duedate:'June 18, 2022 02:30:00', amt: 140000,cashflow:true},
  {no: 'INV/REL_11',type:'I', name: '_RELIANCE_2',duedate:'December 25, 2019 01:30:00', amt: 130000,cashflow:true},
  {no: 'OPEX',type:'B', name: 'Wages',duedate:'June 18, 2021 02:30:00', amt: 190000,cashflow:false},
  {no: 'INV/UL_09',type:'I',name: 'Ultra Tech',duedate:'December 25, 2022 01:30:00', amt: 300000,cashflow:true},
  {no: 'OPEX',type:'B', name: 'INTERNET',duedate:'June 18, 2020 02:30:00', amt: 100000,cashflow:false},
  {no: 'INV/OLLLL',type:'I', name: 'Oil And Natural Gas Corporation Ltd.',duedate:'December 25, 2020 01:30:00', amt: 400000,cashflow:true},
  {no: 'INV/BH_998',type:'I', name: 'Bharat Petroleum Corporation Ltd.',duedate:'June 18, 2022 02:30:00', amt: 40000,cashflow:true},
  {no: 'INV/TCS_99',type:'I', name: '	Tata Consultancy Services Ltd.',duedate:'December 25, 2019 01:30:00', amt: 500000,cashflow:true},
  {no: 'INV/TT54',type:'I', name: 'Tata Motors Ltd.',duedate:'June 18, 2021 02:30:00', amt: 450000,cashflow:false},
];

@Component({
  selector: 'app-payables-simulate',
  templateUrl: './payables-simulate.component.html',
  styleUrls: ['./payables-simulate.component.css']
})
export class PayablesSimulateComponent implements OnInit {
  displayedColumns: string[] = ['no', 'customer_name', 'amt','duedate','expeteddate', 'cashflow'];
  dataSource:any=[]
  @ViewChild(MatPaginator, {static: false}) paginator:any;
  @ViewChild(MatSort) sort:MatSort[]=[];
  payables_total: any=0;
  budget:any=true
  service1: any;
  loading: any;
  payables: any;
  temp_payables_total: any;
  temp_row: any;
  constructor(private service : SimulateService,private store:Store) { }

  ngOnInit() {
    // this.dataSource =new MatTableDataSource<any>(ELEMENT_DATA);
    // this.dataSource.paginator=this.paginator

    // this.payables_total = 0
    // for(var i=0;i<ELEMENT_DATA.length;i++){
    //   if(ELEMENT_DATA[i].cashflow){
    //     this.payables_total = this.payables_total + ELEMENT_DATA[i].amt
    //   }
    // }
    this.service.payables_total.next(this.payables_total)

    this.service1 = this.store.select(simulateState).subscribe((data:any)=>{
      this.loading = data.loading
      console.log(data)
      if(data?.result){
        if(data?.result?.hasError){

        }
        else{
          var a = JSON.parse(JSON.stringify(data?.result?.results?.payables));
          var element={cashflow:true}
          for(var i=0;i<a.length;i++){
            a[i]={...a[i],...element}
          }
          console.log(a)
          this.payables = a
          this.temp_row = a
          this.total()
          this.dataSource =new MatTableDataSource<any>(this.payables);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
	  this.service.payables.next(this.payables)
        }
      }
    })
  }
  datechanged(){
    // this.service.receivables.next([])
 
     this.service.payables.next(this.payables)
     // console.log("hii")
   }
  total(){
    this.payables_total = 0
    for(var i=0;i<this.payables.length;i++){
      if(this.payables[i].cashflow){
        this.payables_total = this.payables_total + this.payables[i].balance
        this.temp_payables_total = this.payables_total + this.payables[i].balance
      }
    }
    this.service.payables_total.next(this.payables_total)
   }
  budget_change(){
    if(!this.budget){
      for(var i=0;i<this.payables.length;i++){
        if(this.payables[i].cashflow && this.payables[i].type === 'budget' ){
          this.payables[i].cashflow = false
          this.payables_total = this.payables_total - this.payables[i].balance
        }
      }
      this.service.payables_total.next(this.payables_total)
    } 
    else{
      for(var i=0;i<this.payables.length;i++){
        if(this.payables[i].type === 'budget' ){
          this.payables[i].cashflow = true
          this.payables_total = this.payables_total + this.payables[i].balance
        }
      }
      this.service.payables_total.next(this.payables_total)
    }
  }
  toggle(value:any){
    if(!this.budget){
      if(value.type === 'budget'){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  isDateEqual(row:any){
    // console.log("working 1")
    const date1 = new Date()
    const date2 = new Date(row.invoice_duedate)
    if(date1.getTime() > date2.getTime()){
      // console.log("working")
      return true;
    }
    else{
      return false;
    }
  }
  changetotal(item:any){
    if(item.cashflow){
      this.payables_total = this.payables_total + item.balance
      this.service.payables_total.next(this.payables_total)
    }
    else if(!item.cashflow){
      this.payables_total = this.payables_total - item.balance
      this.service.payables_total.next(this.payables_total)
    }
  }

}