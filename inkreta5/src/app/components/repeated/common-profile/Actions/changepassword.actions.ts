import { createAction,props } from '@ngrx/store';

export const ChangePasswordInitialValue= createAction('[Change Password Initial Value] Change Password Initial Value');

export const ChangePassword= createAction('[Change Password] Change Password',props<{url : string,data:any}>());

export const ChangePasswordSuccess=createAction('[Change Password] Change Password Success',props<{result: any}>());

