import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { savebudget, savebudgetInitialValue } from 'src/app/components/repeated/simulate/Actions/savebudget.actions';
import { savebudgetState } from 'src/app/components/repeated/simulate/Selectors/simulate.selectors';
import { SnackbarComponent } from 'src/app/components/repeated/snackbar/snackbar.component';
import { SnackBarService } from 'src/app/components/repeated/snackbar/snackbar.service';
import { Constants } from 'src/app/constants/constants';
import { SimulateService } from '../../../../simulate.service';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.css']
})
export class CreateBudgetComponent implements OnInit {

  @Output() createbudget = new EventEmitter()
  loading: any=false;
  durationInSeconds: number=5;
  service1: any;
  constructor(private _myfb:FormBuilder,private service:SimulateService,private store:Store,private snackservice:SnackBarService,public _snackBar:MatSnackBar) { }

  createbudgetform:any = this._myfb.group({
    budgetName:['',[Validators.required]],
    budgetCategory:['Payable',[Validators.required]],
    budget_occurs:['',[Validators.required]],
    budget_starts_on:['',[Validators.required]],
    budget_ends_on:['',[Validators.required]],
    budget_type:['',[Validators.required]],
    budget_currency:['',[Validators.required]],
    budget_value:['',[Validators.required]]
  })

  ngOnInit() {
    this.store.dispatch(savebudgetInitialValue())
    this.service1 = this.store.select(savebudgetState).subscribe((data:any)=>{
      this.loading = data.loading
      console.log(data);
      if(data.result){
        if(data.result?.hasError){

        }
        else{
          // results
          this.service.budgetdetails.next(true)
          this.openSnackBar("Budget Added Successfully !!!")
          this.createbudget.emit(false);
        }
      }
    })
  }
  get f() {
    return this.createbudgetform.controls
  }
  openSnackBar(mess:any) {
    this.snackservice.message.next(mess)
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ['blue-snackbar']
    });
  }
  close_createbudget(){
    this.createbudget.emit(false);
  }
  submit(){
    console.log(this.createbudgetform.value)
    const url = Constants.SaveBudgetDetails
    this.store.dispatch(savebudget({url:url,data:this.createbudgetform.value}))
  }
  ngOnDestroy(){
    this.service1.unsubscribe()
  }
}
