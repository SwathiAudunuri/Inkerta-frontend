import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { CommonService } from "src/app/common.service";
import { GetCashFlow, GetCashFlowSuccess } from "../Actions/getcashflow.actions";
import { savebudget, savebudgetSuccess } from "../Actions/savebudget.actions";
import { map, mergeMap } from "rxjs/operators";
import { GetBudgetDetails, GetBudgetDetailsSuccess } from "../Actions/getbudgetdetails.actions";

@Injectable()
export class SimulateEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){
    }

    GetCashFlow=createEffect(()=>
        this.action.pipe(
            ofType(GetCashFlow),
            mergeMap((value)=>this.service.postAllRecords({url:value.url,data:value.data}).pipe(
                map(result=>(GetCashFlowSuccess({result}))))
            )
        )
    )

    savebudget=createEffect(()=>
        this.action.pipe(
            ofType(savebudget),
            mergeMap((value)=>this.service.postAllRecords({url:value.url,data:value.data}).pipe(
                map(result=>(savebudgetSuccess({result}))))
            )
        )
    )

    budgetdetails=createEffect(()=>
        this.action.pipe(
            ofType(GetBudgetDetails),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(data=>(GetBudgetDetailsSuccess({data}))))
            )
        )
    )

}