import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { valuesIn } from "lodash";
import { of } from "rxjs";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { getActiondetail, getActiondetailSuccess } from "../Actions/actiondetail.action";
import { addcustomercustomactions, addcustomercustomactionsSuccess, getcustomercustomactions, getcustomercustomactionsSuccess } from "../Actions/customaction.action";
import { getstatusandrole, getstatusandroleSuccess } from "../Actions/statusandrole.action";
import { CustomactionService } from "../customaction/customaction.service";


@Injectable()
export class customercustomActionEffects{ 
    constructor(private actionservice:CustomactionService,private action:Actions,private common:CommonService,private store:Store){

    }
    
    loadCustomAction$=createEffect(()=>
        this.action.pipe(
            ofType(getcustomercustomactions),
            // //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>
            this.common.getAllRecords({url : Constants.CustomActions}
                
                ).pipe(
                map(res=>
                    {
                    
                    return (getcustomercustomactionsSuccess({res}))
                    }               
                    ))
            )
        )
    )

    loadActionDetail$=createEffect(()=>
        this.action.pipe(
            ofType(getActiondetail),
            ////tap((data)=>//console.log(data)),
    mergeMap((value:any)=>this.common.getAllRecords({url : value.action_id})

    
    .pipe(
                map((res=>
                    (getActiondetailSuccess({result:res}))
                                   
                    ))
            )
        )
    )                  
    )   
    loadstatusandrole$=createEffect(()=>
    this.action.pipe(
        ofType(getstatusandrole),
      //  //tap((data)=>//console.log(data)),
mergeMap((value:any)=>this.common.getAllRecords({url : Constants.roleandstatus})


.pipe(
            map((res=>
                (getstatusandroleSuccess({result:res}))
                               
                ))
        )
    )
)                  
) 

addAction$=createEffect(()=>
this.action.pipe(
    ofType(addcustomercustomactions),
    //tap((data)=>//console.log(data.data)),
mergeMap((value:any)=>this.common.postAllRecords( {url:Constants.CustomCreateAction,data:value.data})


.pipe(
        map((res=>
            (addcustomercustomactionsSuccess({res:res}))
                           
            ))
    )
)
)                  
) 
}

