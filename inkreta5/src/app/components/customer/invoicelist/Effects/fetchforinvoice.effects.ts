import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { addcustomercomments, addsuccesscustomercomments, customercomments, customercommentsSuccess } from "../Actions/comments.action";
import { fetchforinvoice, fetchforinvoiceSuccess } from "../Actions/FetchForInvoice.action";
import { CommentsService } from "../invoicelist/components/comments/comments.service";


@Injectable()
export class fetchforinvoiceEffects{ 
    constructor(private action:Actions,private comment:CommentsService,private common:CommonService,private store:Store){

    }
    
    loadComment$=createEffect(()=>
        this.action.pipe(
            ofType(fetchforinvoice),
 //            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.common.getAllRecords({url : Constants.FetchForInvoice+value.doc_refid}).pipe(
                map(res=>

                    (fetchforinvoiceSuccess({res}))
                                    
                    ))
            )
        )
    )
                

}

