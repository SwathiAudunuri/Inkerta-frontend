import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { SendOtpMail, SendOtpMailSucess } from "../Actions/SendMail.actions";

@Injectable()
export class SendMailEffect{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(SendOtpMail),
            mergeMap((value:any)=>this.service.getAllRecords({url : value.url}).pipe(
                map(result=>
                    (SendOtpMailSucess({result}))              
                ))
            )
        )
    )
}