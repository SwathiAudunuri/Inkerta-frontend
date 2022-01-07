import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { simulateState } from '../../../Selectors/simulate.selectors';
import { SimulateService } from '../../simulate.service';


const ELEMENT_DATA: any = [
  {no: 'INV/AS_071',type:'I',name: 'INDIAn DRUGS & PHARMACEUTICALS LIMITED', amt: 1000000,duedate:'June 18, 2020 02:30:00',cashflow:true},
  {no: 'NICE/CTD23',type:'B', name: 'Phoenix Infratech Pvt Ltd', amt: 900000,duedate:'December 25, 2022 01:30:00',cashflow:false},
  {no: 'INV/TET_067',type:'I', name: 'paytm e-commerce private limited', amt: 105000,duedate:'June 18, 2021 02:30:00',cashflow:true},
  {no: 'INV/AP_333',type:'B', name: 'Dynamic Health Care Pvt Ltd', amt: 80000,duedate:'December 25, 2019 01:30:00',cashflow:true},
  {no: 'INV/TET_024',type:'I', name: 'HP GAS INDIA PRIVATE LIMITED', amt: 30000,duedate:'June 18, 2022 02:30:00',cashflow:true},
  {no: 'INV/UL_03',type:'B', name: 'YOU BROADBAND INDIA LIMITED', amt: 450000,duedate:'December 25, 2020 01:30:00',cashflow:false},
  {no: 'N/CTD9_3',type:'I',name: 'INDIAn DRUGS & PHARMACEUTICALS LIMITED', amt: 300000,duedate:'June 18, 2020 02:30:00',cashflow:true},
  {no: 'A/CTD9_5',type:'B', name: 'ASHIRVAD PIPES PVT LTD', amt: 900000,duedate:'December 25, 2022 01:30:00',cashflow:false},
  {no: 'INV/TET_048',type:'I', name: 'paytm e-commerce private limited', amt: 400000,duedate:'June 18, 2021 02:30:00',cashflow:true},
  {no: 'INV/GE_02',type:'B', name: 'HARSHA Tayota', amt: 180000,duedate:'December 25, 2019 01:30:00',cashflow:true},
  {no: 'TEST210320000322',type:'I', name: 'Tecnics INDIA private limited', amt: 100000,duedate:'June 18, 2022 02:30:00',cashflow:true},
  {no: 'INV/TET_045',type:'B', name: 'Indian Insurance Company Pvt Ltd', amt: 450000,duedate:'December 25, 2020 01:30:00',cashflow:false},
];

@Component({
  selector: 'app-receivables-simulate',
  templateUrl: './receivables-simulate.component.html',
  styleUrls: ['./receivables-simulate.component.css']
})
export class ReceivablesSimulateComponent implements OnInit {
  displayedColumns: string[] = ['no', 'customer_name', 'amt','duedate','cashflow'];
  dataSource:any=[]
  @ViewChild(MatPaginator, {static: false}) paginator:any;
  @ViewChild(MatSort) sort:MatSort[]=[];
  receviables_total: any=0;
  temp_receviables_total: any;
  service1: any;
  loading: any;
  ELEMENT_DATA:any=[];
  receviables: any;
  invoice_duedate:any;
  budget:any=true;
  // date: any;
  constructor(private service : SimulateService,private store:Store) { }

  ngOnInit() {
    
    // this.dataSource =new MatTableDataSource<any>(this.ELEMENT_DATA);
    
    

    this.service1 = this.store.select(simulateState).subscribe((data:any)=>{
      this.loading = data.loading
      var a = []
      this.dataSource=[]
      this.receviables=[]
      this.dataSource =new MatTableDataSource<any>(this.receviables);
      console.log(data)
      if(data?.result){
        if(data?.result?.hasError){

        }
        else{
          a = JSON.parse(JSON.stringify(data?.result?.results?.receivables));
          var element={cashflow:true}
          for(var i=0;i<a.length;i++){
            a[i]={...a[i],...element}
          }
          console.log(a)
          this.receviables = a
          this.total()
          this.dataSource =new MatTableDataSource<any>(this.receviables);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.service.receivables.next(this.receviables)
        }
      }
    })
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  budget_change(){
    if(!this.budget){
      for(var i=0;i<this.receviables.length;i++){
        if(this.receviables[i].cashflow && this.receviables[i].type === 'budget' ){
          this.receviables_total = this.receviables_total - this.receviables[i].balance
        }
      }
      this.service.receviables_total.next(this.receviables_total)
    } 
    else{
      for(var i=0;i<this.receviables.length;i++){
        if(this.receviables[i].type === 'budget' ){
          this.receviables[i].cashflow = true
          this.receviables_total = this.receviables_total + this.receviables[i].balance
        }
      }
      this.service.receviables_total.next(this.receviables_total)
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
 total(){
  this.receviables_total = 0
  for(var i=0;i<this.receviables.length;i++){
    if(this.receviables[i].cashflow){
      this.receviables_total = this.receviables_total + this.receviables[i].balance
      this.temp_receviables_total = this.receviables_total + this.receviables[i].balance
    }
  }
  this.service.receviables_total.next(this.receviables_total)
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
      this.receviables_total = this.receviables_total + item.balance
      this.service.receviables_total.next(this.receviables_total)
    }
    else if(!item.cashflow){
      this.receviables_total = this.receviables_total - item.balance
      this.service.receviables_total.next(this.receviables_total)
    }
  }
  datechanged(){
   // this.service.receivables.next([])

    this.service.receivables.next(this.receviables)
    // console.log("hii")
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
  }
}
