import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { Constants } from "src/app/constants/constants";
import { addcustomercustomroles, addcustomercustomrolesSuccess, getcustomercustomroles, getcustomercustomrolesSuccess } from "../Actions/customrole.action";
import { getcustomercustomarolesdetSuccess, getcustomercustomrolesdet } from "../Actions/roledetail.action";




@Injectable()
export class customercustomroleEffects{ 
    constructor(private action:Actions,private common:CommonService,private store:Store){

    }
 
    loadRole$=createEffect(()=>
        this.action.pipe(
            ofType(getcustomercustomroles),
            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.common.getAllRecords({url:Constants.Customrole}).pipe(
                map(res=>

                    (getcustomercustomrolesSuccess({res}))
                                    
                    ))
            )
        )

    )
    loadRoledet$=createEffect(()=>
        this.action.pipe(
            ofType(getcustomercustomrolesdet),
            //tap((data)=>//console.log(data)),
            mergeMap((value:any)=>this.common.getAllRecords({url : value.role_id}).pipe(
                map(res=>

                    (getcustomercustomarolesdetSuccess({res}))
                                    
                    ))
            )
        )

    )
    
    addRole$=createEffect(()=>
this.action.pipe(
    ofType(addcustomercustomroles),
    //tap((data)=>//console.log(data.data)),
mergeMap((value:any)=>this.common.postAllRecords( {url:Constants.CustomCreateRole,data:value.data})


.pipe(
        map((res=>
            (addcustomercustomrolesSuccess({res:res}))
                           
            ))
    )
)
)                  
) 

}