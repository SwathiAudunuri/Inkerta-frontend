import { Injectable } from "@angular/core";
import { Actions, ofType,createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { mergeMap,map, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { getvendorSupportingDocument, getvendorSupportingDocumentSuccess } from "../Actions/invoicelistAttachmentssupportingdoc.action";




@Injectable()
export class VendorAttachmentsSupportingDocEffects{
    constructor(private action:Actions,private service:CommonService,private store:Store){}

    loadAttachments$=createEffect(()=>
        this.action.pipe(
            ofType(getvendorSupportingDocument),
            //tap((data)=>//console.log(data)),
            mergeMap((value)=>this.service.getAllRecords({url : value.url}).pipe(
                map(data=>
                    (getvendorSupportingDocumentSuccess({data}))
                ))
            
            )
        )
    )
}