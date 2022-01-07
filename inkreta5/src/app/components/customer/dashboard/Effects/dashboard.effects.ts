import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { valuesIn } from "lodash";
import { of } from "rxjs";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
// import { getcustomerInvoiceListHistory } from "../../invoicelist/Actions/invoicelisthistory.actions";
import { getcustomerInvoiceListHistorySuccess,getcustomerInvoiceListHistory } from "../Actions/history.actions";
import { getMetrics, getMetricsSuccess } from "../Actions/metrics.action";
import {  gettoptenSuccess, gettoptenvendors } from "../Actions/top10.action";



@Injectable()
export class dashboardEffects{ 
    constructor(private action:Actions,private common:CommonService,private store:Store){

    }
    
    loaddashboardEffects$=createEffect(()=>
        this.action.pipe(
            ofType(getMetrics),
             //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>
            this.common.getAllRecords({url : Constants.Getmetrics}
                
                ).pipe(
                map(result=>
                    {
                    
                    return (getMetricsSuccess({result:result}))
                    }               
                    ))
            )
        )
    )



    loadtoptenEffects$=createEffect(()=>
    this.action.pipe(
        ofType(gettoptenvendors),
         //tap((data)=>//console.log(data)),
        mergeMap((value:any)=>
        this.common.getAllRecords({url : Constants.Getvendorsstopten}
            
            ).pipe(
            map(result=>
                {
                
                return (gettoptenSuccess({result:result}))
                }               
                ))
        )
    )

)

loadhistory$=createEffect(()=>
        this.action.pipe(
            ofType(getcustomerInvoiceListHistory),
            // //tap((data)=>//console.log(data)),
            mergeMap((value)=>this.common.getAllRecords({url : value.url}).pipe(
                map(data=>

                    (getcustomerInvoiceListHistorySuccess({data}))
                                    
                    ))
            )
        )

)



}



