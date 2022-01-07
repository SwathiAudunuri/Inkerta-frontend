import { createAction,props } from '@ngrx/store';

export const resetpasswordInitialValue= createAction('[reset password Initial Value] reset password Initial Value');

export const resetpassword= createAction('[reset password] reset password',props<{url : string,data:any}>());

export const resetpasswordSuccess=createAction('[reset password] reset password Success',props<{result: any}>());

