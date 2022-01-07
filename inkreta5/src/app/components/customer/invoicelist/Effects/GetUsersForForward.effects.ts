import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { getUsersForward, getUsersForwardSucess } from "../Actions/GetUsersForForward.actions";


@Injectable()
export class GetUsersForForwardEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getUsersForward),
            // //tap((data)=>//console.log("effects",data)),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(result=>

                    (getUsersForwardSucess({result}))
                                    
                    ))
            )
        )

    )


}