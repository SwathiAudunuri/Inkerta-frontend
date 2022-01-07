import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { CommonService } from "../../../../common.service";
import { getTemplateDetails, getTemplateDetailsSucess } from "../Actions/GetTemplateDetails.actions";


@Injectable()
export class getTemplateDetailsEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getTemplateDetails),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(result=>
                    (getTemplateDetailsSucess({result}))                   
                    ))
            )
        )

    )


}