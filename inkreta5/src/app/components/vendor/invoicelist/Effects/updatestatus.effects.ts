import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { getvendorPaidInvoiceList , getvendorPaidInvoiceListSuccess } from "../Actions/paidinvoicelist.action";
import { updateStatus, updateSuccess } from "../Actions/updatestatus.action";


@Injectable()
export class UpdatStatusEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(updateStatus),
            // //tap((data)=>//console.log("effects",data)),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(res=>

                    (updateSuccess({res}))
                                    
                    ))
            )
        )

    )


}