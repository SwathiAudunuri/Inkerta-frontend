import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { AddGSTIN, AddGSTINSuccess } from "../Actions/AddGstin.action";
import { GetPatnerDetails, GetPatnerDetailsSuccess } from "../Actions/GetPatnerDetails.actions";
import { GetPatnerGstinDetails, GetPatnerGstinDetailsSuccess } from "../Actions/GetPatnerGstinDetails.actions";
import { SaveGSTIN, SaveGSTINSuccess } from "../Actions/savepatnerdata.actions";

@Injectable()
export class PatnersEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){
    }

    AddGSTIN=createEffect(()=>
        this.action.pipe(
            ofType(AddGSTIN),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(data=>(AddGSTINSuccess({data}))))
            )
        )
    )

    SaveGSTIN=createEffect(()=>
        this.action.pipe(
            ofType(SaveGSTIN),
            mergeMap((value)=>this.service.postAllRecords({url:value.url,data:value.data}).pipe(
                map(result=>(SaveGSTINSuccess({result}))))
            )
        )
    )

    GetPatnerGstin=createEffect(()=>
        this.action.pipe(
            ofType(GetPatnerGstinDetails),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(data=>(GetPatnerGstinDetailsSuccess({data}))))
            )
        )
    )

    GetPatnerDetailsGstin=createEffect(()=>
        this.action.pipe(
            ofType(GetPatnerDetails),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(data=>(GetPatnerDetailsSuccess({data}))))
            )
        )
    )
}