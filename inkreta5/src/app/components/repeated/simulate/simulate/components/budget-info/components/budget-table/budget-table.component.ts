import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { GetBudgetDetails,GetBudgetDetailsInitialValue } from 'src/app/components/repeated/simulate/Actions/getbudgetdetails.actions';
import { budgetdetailsState } from 'src/app/components/repeated/simulate/Selectors/simulate.selectors';
import { Constants } from 'src/app/constants/constants';
import { SimulateService } from '../../../../simulate.service';

const ELEMENT_DATA: any = [
  {name:'Wages',type:'Fixed',value:'200000',occurs:'Every Month',starts_on:'01-01-2022',ends_on:'31-12-2022'},
  {name:'Rent',type:'Fixed',value:'200000',occurs:'Every Month',starts_on:'01-01-2022',ends_on:'31-12-2022'},
  {name:'Salary',type:'Fixed',value:'200000',occurs:'Every Month',starts_on:'01-01-2022',ends_on:'31-12-2022'},
  {name:'Current Bill',type:'Fixed',value:'200000',occurs:'Every Month',starts_on:'01-01-2022',ends_on:'31-12-2022'},
  {name:'OPEX',type:'Fixed',value:'200000',occurs:'Every Month',starts_on:'01-01-2022',ends_on:'31-12-2022'},
  {name:'New Req',type:'Fixed',value:'200000',occurs:'Every Month',starts_on:'01-01-2022',ends_on:'31-12-2022'},
  {name:'Maintaince',type:'Fixed',value:'200000',occurs:'Every Month',starts_on:'01-01-2022',ends_on:'31-12-2022'}
];

@Component({
  selector: 'app-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.css']
})
export class BudgetTableComponent implements OnInit {
  displayedColumns: string[] = ['name','Category', 'type', 'value','occurs', 'starts_on','ends_on','action'];
  dataSource:any=[]
  Action=["Edit","Delete"]
  @ViewChild(MatPaginator, {static: false}) paginator:any;
  @ViewChild(MatSort) sort:MatSort[]=[];
  loading: any=false;
  service1: any;

  constructor(private store:Store,private service:SimulateService) { }

  ngOnInit() {
    this.store.dispatch(GetBudgetDetailsInitialValue())
    this.service.budgetdetails.next(true)
    

    this.service.budgetdetails.subscribe((data:any)=>{
      if(data){
        this.store.dispatch(GetBudgetDetails({url:Constants.BudgetDetails}))
      }
    })
    this.service1=  this.store.select(budgetdetailsState).subscribe((data:any)=>{
      this.loading = data.loading
      console.log(data)
      if(data?.result){
        if(data?.result?.hasError){

        }
        else{
          this.dataSource =new MatTableDataSource<any>(data?.result?.results);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    })
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  ngOnDestroy(){
    this.store.dispatch(GetBudgetDetailsInitialValue())
    this.service1.unsubscribe()
  }
}
