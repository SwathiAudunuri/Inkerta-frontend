import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import {  getInvoiceListaction, getInvoiceListSuccess } from "../Actions/invoicelist.action"; 
import { getQueryList, getQueryListSuccess, } from "../Actions/querylist.action";
import { InvoiceService } from "../invoicelist/invoice.service";


@Injectable()
export class InvoiceEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getInvoiceListaction),
            // //tap((data)=>//console.log("effects",data)),
            mergeMap((url)=>this.invoiceservice.getAllRecords(url).pipe(
                map(invoices=>

                    (getInvoiceListSuccess({invoices}))
                                    
                    ))
            )
        )

)


}