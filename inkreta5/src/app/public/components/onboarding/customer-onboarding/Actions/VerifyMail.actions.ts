import { createAction,props } from '@ngrx/store';


export const VerifyMailInitislValuenull = createAction('[Verify Mail1] Verify Mail to null') 

export const VerifyMail= createAction('[Verify Mail1]  Verify Mail',props<{url:any,data:any}>());

export const VerifyMailSucess=createAction('[Verify Mail1] Verify Mail Success',
props<{result: any}>()
);