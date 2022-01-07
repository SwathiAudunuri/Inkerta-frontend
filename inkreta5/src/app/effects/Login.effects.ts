import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store"; 
import { map, mergeMap, tap } from "rxjs/operators";
import { Login, LoginSuccess } from "../actions/login.action";
import { CommonService } from "../common.service";
import { CommentsService } from "../components/customer/invoicelist/invoicelist/components/comments/comments.service";
import { Constants } from "../constants/constants";

@Injectable()
export class LoginEffects{ 
    constructor(private action:Actions,private comment:CommentsService,private common:CommonService,private store:Store){

    }
    login$=createEffect(()=>
        this.action.pipe(
            ofType(Login),
            //tap((data:any)=>{//console.log(data)}),
            mergeMap((value:any)=>this.common.postAllRecords({url : value.url,data:value.data}).pipe(
                map(result=>
                    (LoginSuccess({result}))              
                ))
            )
        )
    )
}