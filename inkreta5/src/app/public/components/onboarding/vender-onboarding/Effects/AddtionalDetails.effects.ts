import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { GetAdditionalDetails, GetAdditionalDetailsSucess } from "../Actions/AddtionalDetails.actions";

@Injectable()
export class AdditionalDetailsEffect{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(GetAdditionalDetails),
            mergeMap((value:any)=>this.service.getAllRecords({url : value.url}).pipe(
                map(result=>
                    (GetAdditionalDetailsSucess({result}))              
                ))
            )
        )
    )
}