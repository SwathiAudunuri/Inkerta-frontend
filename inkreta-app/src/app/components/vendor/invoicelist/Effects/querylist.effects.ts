import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs/operators";
import { getQueryList, getQueryListSuccess, } from "../Actions/querylist.action";
import {  QueryService} from "../invoicelist/query.service";


@Injectable()
export class QueryEffects{ 
    constructor(private action:Actions,private queryservice:QueryService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getQueryList),
            exhaustMap(()=>this.queryservice.getAllQueries().pipe(
                map(queries=>

                    (getQueryListSuccess({queries}))
                                    
                    ))
            )
        )

)


}