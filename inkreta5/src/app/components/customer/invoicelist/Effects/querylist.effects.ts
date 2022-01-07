import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, mergeMap,map ,tap} from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { getcustomerQueryList, getcustomerQueryListSuccess, getQueryAttachment, getQueryAttachmentSuccess, } from "../Actions/querylist.action";
import {  QueryService} from "../invoicelist/query.service";


@Injectable()
export class CustomerQueryEffects{ 
    constructor(private action:Actions,private common:CommonService,private queryservice:QueryService,private store:Store){

    }
    
//     loadQuery$=createEffect(()=>
//         this.action.pipe(
//             ofType(getcustomerQueryList),
//             concatMap((ref)=>this.queryservice.getAllQueries(ref).pipe(
//                 map(queries=>

//                     (getcustomerQueryListSuccess({queries}))
                                    
//                     ))
//             )
//         )

// )
loadQuery$=createEffect(()=>
this.action.pipe(
    ofType(getcustomerQueryList),
    // //tap((data)=>//console.log(data)),
    mergeMap((ref)=>this.queryservice.getAllQueries(ref).pipe(
        map(queries=>

            (getcustomerQueryListSuccess({queries}))
                            
            ))
    )
)

)
loadAttachment$=createEffect(()=>
this.action.pipe(
    ofType(getQueryAttachment),
    // //tap((data)=>//console.log(data)),
    mergeMap((id)=>this.common.getAllRecords(id).pipe(
        map(res=>

            (getQueryAttachmentSuccess({res}))
                            
            ))
    )
)

)


}