import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import {  map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { getPatner, getPatnerSuccess } from "../Actions/patnerdetails.actions";


@Injectable()
export class GetPatnerEffects{ 
    constructor(private action:Actions,private service:CommonService){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getPatner),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(details=>
                    (getPatnerSuccess({details}))
                                    
                    ))
            )
        )

)


}