import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { ExternalInvoiceDetails, ExternalInvoiceDetailsSuccess } from "../Actions/externalinvoicelistdetails.actions";


@Injectable()
export class ExternalInvoiceDetailsEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(ExternalInvoiceDetails),
            //tap((data)=>//console.log(data)),
            mergeMap((value)=>this.invoiceservice.getAllRecords({url : Constants.ExternalInvoiceServiceDetails+value.doc_refid}).pipe(
                map(invoices=>

                    (ExternalInvoiceDetailsSuccess({invoices}))
                                    
                    ))
            )
        )

)


}