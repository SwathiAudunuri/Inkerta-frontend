import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { ExecuteAction,ExecuteActionSucess } from "../Actions/ExcuteAction.actions";


@Injectable()
export class ExecuteActionEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(ExecuteAction),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(result=>
                    (ExecuteActionSucess({result}))         
                    ))
            )
        )

    )


}