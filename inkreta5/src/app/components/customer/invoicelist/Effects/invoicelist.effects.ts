import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { getcustomerInvoiceList, getcustomerInvoiceListSuccess } from "../Actions/invoicelist.action"; 
import { getcustomerQueryList, getcustomerQueryListSuccess, } from "../Actions/querylist.action";
import { CustomerInvoiceService } from "../invoicelist/invoice.service";


@Injectable()
export class CustomerInvoiceEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getcustomerInvoiceList),
            // //tap((data)=>//console.log(data)),
            mergeMap((url)=>this.invoiceservice.getAllRecords(url).pipe(
                map(invoices=>

                    (getcustomerInvoiceListSuccess({invoices}))
                                    
                    ))
            )
        )

    )


}