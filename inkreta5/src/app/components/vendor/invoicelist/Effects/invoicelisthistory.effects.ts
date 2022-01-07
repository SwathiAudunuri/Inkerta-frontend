import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { getInvoiceListHistory,getInvoiceListHistorySuccess } from "../Actions/invoicelisthistory.actions"; 
import { getQueryList, getQueryListSuccess, } from "../Actions/querylist.action";
import { InvoiceServiceHistory } from "../invoicelist/invoice.service";


@Injectable()
export class InvoiceHistoryEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getInvoiceListHistory),
            //tap((data)=>//console.log(data)),
            mergeMap((value)=>this.invoiceservice.getAllRecords({url : value.url}).pipe(
                map(data=>

                    (getInvoiceListHistorySuccess({data}))
                                    
                    ))
            )
        )

)


}