import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { getvendorQueriesInvoiceList, getvendorQueriesInvoiceListSuccess } from "../Actions/queriesinvoicelist.action";


@Injectable()
export class VendorQueriesInvoiceEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getvendorQueriesInvoiceList),
            // //tap((data)=>//console.log("effects",data)),
            mergeMap((url)=>this.invoiceservice.getAllRecords(url).pipe(
                map(invoices=>

                    (getvendorQueriesInvoiceListSuccess({invoices}))
                                    
                    ))
            )
        )

    )


}