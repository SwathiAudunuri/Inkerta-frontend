import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { PaidRecords, PaidRecordsSuccess } from "../Actions/paidRecord.actions";
import { customerupdateStatus, customerupdateSuccess } from "../Actions/updatestatus.action";


@Injectable()
export class PaidRecordsEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(PaidRecords),
            mergeMap((value)=>this.service.getAllRecords({url : value.url}).pipe(
                map(res=>
                    (PaidRecordsSuccess({res}))           
                    ))
            )
        )

)


}