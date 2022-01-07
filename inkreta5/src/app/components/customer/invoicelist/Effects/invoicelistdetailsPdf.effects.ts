import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { getcustomerInvoiceListDetailsPdf, getcustomerInvoiceListDetailsPdfSuccess } from "../Actions/invoicelistdetailsPdf.actions";


@Injectable()
export class CustomerInvoiceDetailsPdfEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getcustomerInvoiceListDetailsPdf),
            // //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.invoiceservice.getAllRecords({url : value.url}).pipe(
                map(data=>
                    (getcustomerInvoiceListDetailsPdfSuccess({data}))              
                ))
            )
        )
    )
}