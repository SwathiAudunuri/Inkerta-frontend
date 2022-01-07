import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { CommonService } from "../../../../common.service";
import { getTemplateNames, getTemplateNamesSucess } from "../Actions/GetTemplateNames.actions";


@Injectable()
export class getTemplateNamesEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getTemplateNames),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(result=>
                    (getTemplateNamesSucess({result}))                   
                    ))
            )
        )

    )


}