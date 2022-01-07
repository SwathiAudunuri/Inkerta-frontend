import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { SaveData, SaveDataSucess } from "../Actions/Savedata.actions";

@Injectable()
export class SaveDataEffect1{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(SaveData),
            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.service.postAllRecords({url : value.url,data:value.data}).pipe(
                map(result=>
                    (SaveDataSucess({result}))              
                ))
            )
        )
    )
}