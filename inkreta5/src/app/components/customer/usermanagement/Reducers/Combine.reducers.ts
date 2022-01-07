import { combineReducers } from "@ngrx/store";
import { CreateUserReducer } from "./CreateUser.reducers";
import { GetAssignedRolesReducer } from "./GetAssignedRoles.reducers";
import { GetUserDetailsReducer } from "./GetUserDetails.reducers";
import { GetUsersReducer } from "./GetUsers.reducers";
import { MapUserRoleReducer } from "./MapUserRole.reducers";
import { resetpasswordReducer } from "./resetpassword.reducers";
import { UnMapUserRoleReducer } from "./UnMapUserRole.reducers";


export const UserManagementReducers = combineReducers({
    getusers : GetUsersReducer,
    createuser : CreateUserReducer,
    userdetails : GetUserDetailsReducer,
    getroles : GetAssignedRolesReducer,
    maproles : MapUserRoleReducer,
    unmaproles : UnMapUserRoleReducer,
    resetPassword : resetpasswordReducer
});