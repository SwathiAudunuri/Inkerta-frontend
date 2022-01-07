import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { SendOtpMobile, SendOtpMobileSucess } from "../Actions/SendMobile.actions";

@Injectable()
export class SendMobileEffect{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(SendOtpMobile),
            mergeMap((value:any)=>this.service.getAllRecords({url : value.url}).pipe(
                map(result=>
                    (SendOtpMobileSucess({result}))              
                ))
            )
        )
    )
}