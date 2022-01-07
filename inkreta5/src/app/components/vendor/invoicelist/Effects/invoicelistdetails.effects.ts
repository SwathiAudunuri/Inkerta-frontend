import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { getInvoiceListDetailsSuccess,getInvoiceListDetails } from "../Actions/invoicelistdetails.actions";
import { InvoiceServiceDetails } from "../invoicelist/invoice.service";


@Injectable()
export class InvoiceDetailsEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getInvoiceListDetails),
            //tap((data)=>//console.log(data)),
            mergeMap((value)=>this.invoiceservice.getAllRecords({url : Constants.InvoiceServiceDetails+value.doc_refid}).pipe(
                map(invoices=>

                    (getInvoiceListDetailsSuccess({invoices}))
                                    
                    ))
            )
        )

)


}