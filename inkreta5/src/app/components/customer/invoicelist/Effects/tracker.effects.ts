import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { getcustomerQueryList, getcustomerQueryListSuccess, } from "../Actions/querylist.action";
import { getTracker, getTrackerSuccess } from "../Actions/tracker.action";
import { CustomerInvoiceServiceHistory } from "../invoicelist/invoice.service";


@Injectable()
export class TrackerEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getTracker),
            // //tap((data)=>//console.log(data)),
            mergeMap((value)=>this.invoiceservice.getAllRecords({url : Constants.CustInvoiceServiceHistory+value.doc_ref_id}).pipe(
                map(data=>

                    (getTrackerSuccess({data}))
                                    
                    ))
            )
        )

)


}