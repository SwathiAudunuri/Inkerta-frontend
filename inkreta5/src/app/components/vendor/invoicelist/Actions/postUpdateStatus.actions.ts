import { createAction,props } from '@ngrx/store';


export const PostUpdateStatusnull = createAction('[Vendor Post Update Status null] Vendor Post Update Status to null') 

export const PostUpdateStatus= createAction('[Vendor Post Update Status] Vendor  Post Update Status',props<{url:any,data:any}>());

export const PostUpdateStatusSucess=createAction('[ Vendor Post Update Status] Vendor Post Update Status Success',
props<{result: any}>()
);