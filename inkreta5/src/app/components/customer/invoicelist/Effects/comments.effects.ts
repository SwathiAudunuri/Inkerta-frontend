import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { addcustomercomments, addsuccesscustomercomments, customercomments, customercommentsKeys, customercommentsKeysSuccess, customercommentsSuccess } from "../Actions/comments.action";
import { getcustomerInvoiceListDetailsSuccess,getcustomerInvoiceListDetails } from "../Actions/invoicelistdetails.actions";
import { CommentsService } from "../invoicelist/components/comments/comments.service";
import { CustomerInvoiceServiceDetails } from "../invoicelist/invoice.service";


@Injectable()
export class CustomerCommentsEffects{ 
    constructor(private action:Actions,private comment:CommentsService,private common:CommonService,private store:Store){

    }
    
    loadComment$=createEffect(()=>
        this.action.pipe(
            ofType(customercomments),
            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.common.getAllRecords({url :value.url}).pipe(
                map(res=>

                    (customercommentsSuccess({res}))
                                    
                    ))
            )
        )
    )

    addComment$=createEffect(()=>
        this.action.pipe(
            ofType(addcustomercomments),
            // //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.common.postAllRecords({url : value.url,data:value.data }).pipe((data)=>{
                //console.warn(data)
                return data},
                map(res=>
                    (addsuccesscustomercomments({res}))
                                   
                    ))
            )
        )
    )                
    
    loadCommentKey$=createEffect(()=>
        this.action.pipe(
            ofType(customercommentsKeys),
            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.common.getAllRecords({url :value.url}).pipe(
                map(res=>

                    (customercommentsKeysSuccess({res}))
                                    
                    ))
            )
        )
    )

}

