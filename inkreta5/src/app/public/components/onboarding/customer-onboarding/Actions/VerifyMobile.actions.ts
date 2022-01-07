import { createAction,props } from '@ngrx/store';


export const VerifyMobileInitislValuenull = createAction('[Verify Mobile1] Verify Mobile to null') 

export const VerifyMobile= createAction('[Verify Mobile1]  Verify Mobile1',props<{url:any,data:any}>());

export const VerifyMobileSucess=createAction('[Verify Mobile1] Verify Mobile Success',
props<{result: any}>()
);