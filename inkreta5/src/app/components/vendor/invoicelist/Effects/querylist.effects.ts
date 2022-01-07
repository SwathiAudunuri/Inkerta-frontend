import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, mergeMap,map ,tap} from "rxjs/operators";
import { getQueryList, getQueryListSuccess, } from "../Actions/querylist.action";
import {  QueryService} from "../invoicelist/query.service";


@Injectable()
export class QueryEffects{ 
    constructor(private action:Actions,private queryservice:QueryService,private store:Store){

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
    ofType(getQueryList),
    //tap((data)=>//console.log(data)),
    mergeMap((ref)=>this.queryservice.getAllQueries(ref).pipe(
        map(queries=>

            (getQueryListSuccess({queries}))
                            
            ))
    )
)

)


}