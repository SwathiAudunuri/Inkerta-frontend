import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { VerifyMobile, VerifyMobileSucess } from "../Actions/VerifyMobile.actions";

@Injectable()
export class VerifyMobileEffect{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(VerifyMobile),
            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.service.postAllRecords({url : value.url,data:value.data}).pipe(
                map(result=>
                    (VerifyMobileSucess({result}))              
                ))
            )
        )
    )
}