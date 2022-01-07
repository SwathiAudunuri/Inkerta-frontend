import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { VerifyGstIn, VerifyGstInSucess } from "../Actions/verifyGstin.actions";

@Injectable()
export class VerifyGstInEffect1{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(VerifyGstIn),
            mergeMap((value:any)=>this.service.getAllRecords({url : value.url}).pipe(
                map(result=>
                    (VerifyGstInSucess({result}))              
                ))
            )
        )
    )
}