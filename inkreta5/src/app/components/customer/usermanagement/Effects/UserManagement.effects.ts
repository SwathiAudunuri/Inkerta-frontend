import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { CreateUser, CreateUserSucess } from "../Actions/CreateUser.actions";
import { getAssignedRoles, getAssignedRolesSuccess } from "../Actions/GetAssignedRoles.actions";
import { getUserDetails, getUserDetailsSuccess } from "../Actions/GetUserDetails.actions";
import { getUsers, getUsersSuccess } from "../Actions/GetUsers.actions";
import { MapUserRole, MapUserRoleSucess } from "../Actions/MapUserRole.actions";
import { resetpassword, resetpasswordSuccess } from "../Actions/resetpassword.actions";
import { UnMapUserRole, UnMapUserRoleSucess } from "../Actions/UnMapUserRole.actions";


@Injectable()
export class UserManagementEffects{ 
    constructor(private action:Actions,private service:CommonService,private store:Store){
    }
    
    GetUsers=createEffect(()=>
        this.action.pipe(
            ofType(getUsers),
            // tap((url:any)=>{//console.log(url)}),
            mergeMap((url)=>this.service.getAllRecords(url).pipe(
                map(users=>(getUsersSuccess({users}))))
            )
        )

    )

    PostUser=createEffect(()=>
    this.action.pipe(
        ofType(CreateUser),
        //tap((data)=>//console.log(data)),
        mergeMap((value:any)=>this.service.postAllRecords({url : value.url,data:value.data}).pipe(
            map(result=>
                (CreateUserSucess({result}))              
            ))
        )
    )
    )   

    GetUserDetails=createEffect(()=>
    this.action.pipe(
        ofType(getUserDetails),
        mergeMap((url)=>this.service.getAllRecords(url).pipe(
            map(details=>(getUserDetailsSuccess({details}))))
        )
    )
    )

    GetAssignedRoles=createEffect(()=>
    this.action.pipe(
        ofType(getAssignedRoles),
        mergeMap((url)=>this.service.getAllRecords(url).pipe(
            map(roles=>(getAssignedRolesSuccess({roles}))))
        )
    )
    )

    MapUser=createEffect(()=>
    this.action.pipe(
        ofType(MapUserRole),
        //tap((data)=>//console.log(data)),
        mergeMap((value:any)=>this.service.postAllRecords({url : value.url,data:value.data}).pipe(
            map(result=>
                (MapUserRoleSucess({result}))              
            ))
        )
    )
    )

    UnMapUser=createEffect(()=>
    this.action.pipe(
        ofType(UnMapUserRole),
        //tap((data)=>//console.log(data)),
        mergeMap((value:any)=>this.service.postAllRecords({url : value.url,data:value.data}).pipe(
            map(result=>
                (UnMapUserRoleSucess({result}))              
            ))
        )
    )
    )

    resetPassword=createEffect(()=>
    this.action.pipe(
        ofType(resetpassword),
        mergeMap((value)=>this.service.postAllRecords({url:value.url,data:value.data}).pipe(
            map(result=>(resetpasswordSuccess({result}))))
        )
    )
)

}