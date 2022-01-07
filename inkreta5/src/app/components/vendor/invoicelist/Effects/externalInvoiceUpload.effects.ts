import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { postExternalInvoice, postExternalInvoiceSuccess } from "../Actions/externalInvoiceUpload.actions";

@Injectable()
export class InvoiceExternalUploadEffect{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(postExternalInvoice),
            //tap((value)=>//console.log(value)),
            mergeMap((value:any)=>this.service.postAllRecords({url : Constants.Invoice_External_Upload,data : value.postdata}).pipe(
                map(data=>
                    (postExternalInvoiceSuccess({data}))              
                ))
            )
        )
    )
}