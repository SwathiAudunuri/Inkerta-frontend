import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { addvendorcomments, addsuccessvendorcomments, vendorcomments, vendorcommentsSuccess, vendorcommentsKeys, vendorcommentsKeysSuccess } from "../Actions/comments.action";
import { CommentsService } from "../invoicelist/components/commentstab/comments.service";



@Injectable()
export class vendorCommentsEffects{ 
    constructor(private action:Actions,private comment:CommentsService,private common:CommonService,private store:Store){

    }
    
    loadComment$=createEffect(()=>
        this.action.pipe(
            ofType(vendorcomments),
            // //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.common.getAllRecords({url : value.url}).pipe(
                map(res=>

                    (vendorcommentsSuccess({res}))
                                    
                    ))
            )
        )
    )

    addComment$=createEffect(()=>
        this.action.pipe(
            ofType(addvendorcomments),
            // //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.common.postAllRecords({url : value.url,data:value.data }).pipe((data)=>{
                //console.warn(data)
                return data},
                map(res=>
                    (addsuccessvendorcomments({res}))
                                   
                    ))
            )
        )
    )
    
    loadCommentKey$=createEffect(()=>
        this.action.pipe(
            ofType(vendorcommentsKeys),
            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.common.getAllRecords({url :value.url}).pipe(
                map(res=>

                    (vendorcommentsKeysSuccess({res}))
                                    
                    ))
            )
        )
    )

}

