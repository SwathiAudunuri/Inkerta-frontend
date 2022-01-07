import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { CommonService } from "src/app/common.service";
import { ChangePassword, ChangePasswordSuccess } from "../Actions/changepassword.actions";
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class CommonProfileEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){
    }

    ChangePassword=createEffect(()=>
        this.action.pipe(
            ofType(ChangePassword),
            mergeMap((value)=>this.service.postAllRecords({url:value.url,data:value.data}).pipe(
                map(result=>(ChangePasswordSuccess({result}))))
            )
        )
    )
}