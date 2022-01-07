import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { SendReminder, SendReminderSucess } from "../Actions/sendreminder.actions";

@Injectable()
export class SendReminderEffect{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(SendReminder),
            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.service.postAllRecords({url : value.url,data:value.data}).pipe(
                map(result=>
                    (SendReminderSucess({result}))              
                ))
            )
        )
    )
}