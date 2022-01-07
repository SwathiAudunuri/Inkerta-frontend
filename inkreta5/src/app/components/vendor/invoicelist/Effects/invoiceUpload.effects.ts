import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { postInvoice, postInvoiceSuccess } from "../Actions/invoiceUpload";

@Injectable()
export class InvoiceUploadEffect{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(postInvoice),
            //tap((value)=>//console.log(value)),
            mergeMap((value:any)=>this.invoiceservice.postAllRecords({url : Constants.Invoice_Upload,data : value.postdata}).pipe(
                map(data=>
                    (postInvoiceSuccess({data}))              
                ))
            )
        )
    )
}