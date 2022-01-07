import { createAction,props } from '@ngrx/store';


export const VerifyMobileInitislValuenull = createAction('[Verify Mobile] Verify Mobile to null') 

export const VerifyMobile= createAction('[Verify Mobile]  Verify Mobile',props<{url:any,data:any}>());

export const VerifyMobileSucess=createAction('[Verify Mobile] Verify Mobile Success',
props<{result: any}>()
);