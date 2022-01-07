import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Constants } from 'src/app/constants/constants';
import { GetCashFlow, GetCashFlowInitialValue } from '../Actions/getcashflow.actions';
import { savebudgetInitialValue } from '../Actions/savebudget.actions';
import { SimulateService } from './simulate.service';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {
  payables_total: any=0;
  receviables_total: any=0;
  total_bank:any=0;
  add_bank:any=false;
  total: any;
  constructor(private service : SimulateService,private store: Store) { }

  ngOnInit() {
    this.store.dispatch(GetCashFlowInitialValue())
    var obj={

    }
    this.store.dispatch(GetCashFlow({url:Constants.GetCashFlow,data:obj}))
    
    this.service.payables_total.subscribe((data:any)=>{
      if(data){
        this.payables_total = data
        this.addbankbalance()
      }
    })
    this.service.receviables_total.subscribe((data:any)=>{
      if(data){
        console.log(data)
        this.receviables_total = data
        this.addbankbalance()
      }
    })

  }
  toggle(){
    if(!this.add_bank){
    const intotal = this.receviables_total - parseInt(this.total_bank)
    this.total = intotal  - this.payables_total
    }
  }
  addbankbalance(){
    const intotal = this.receviables_total + parseInt(this.total_bank)
    this.total =intotal  - this.payables_total
  }
  ngOnDestroy(){
    this.store.dispatch(GetCashFlowInitialValue())
    this.store.dispatch(savebudgetInitialValue())
  }
}
