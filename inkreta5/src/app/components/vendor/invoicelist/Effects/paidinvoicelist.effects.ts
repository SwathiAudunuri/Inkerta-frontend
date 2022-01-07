import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { getvendorPaidInvoiceList , getvendorPaidInvoiceListSuccess } from "../Actions/paidinvoicelist.action";


@Injectable()
export class VendorPaidInvoiceEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getvendorPaidInvoiceList),
            // //tap((data)=>//console.log("effects",data)),
            mergeMap((url)=>this.invoiceservice.getAllRecords(url).pipe(
                map(invoices=>

                    (getvendorPaidInvoiceListSuccess({invoices}))
                                    
                    ))
            )
        )

    )


}