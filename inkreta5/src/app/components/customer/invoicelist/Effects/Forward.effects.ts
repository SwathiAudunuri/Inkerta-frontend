import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { ForwardData, ForwardDataSucess } from "../Actions/Forward.action";

@Injectable()
export class ForwardEffect{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){}
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(ForwardData),
            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.invoiceservice.postAllRecords({url : value.url,data:value.data}).pipe(
                map(result=>
                    (ForwardDataSucess({result}))              
                ))
            )
        )
    )
}