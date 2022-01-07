import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { getcustomerMyinbox, getcustomerMyinboxSuccess } from "../Actions/Myinbox.action";


@Injectable()
export class MyInboxEffects{ 
    constructor(private action:Actions,private invoiceservice:CommonService,private store:Store){

    }
    
    loadQuery$=createEffect(()=>
        this.action.pipe(
            ofType(getcustomerMyinbox),
            // //tap((data)=>//console.log(data)),
            mergeMap((url)=>this.invoiceservice.getAllRecords(url).pipe(
                map(myinbox=>

                    (getcustomerMyinboxSuccess({myinbox}))
                                    
                    ))
            )
        )

    )


}