import { createAction,props } from '@ngrx/store';
import { User } from "../models/user.model";
export const LOGIN_COMPLETE = ('[LoginComponent] Complete');
export const LOGOUT = ('[LogoutComponent]');


export const loginComplete= createAction(LOGIN_COMPLETE,
    props<{ user: User}>());


    export const logout= createAction(LOGOUT,   props<{ user: User}>());