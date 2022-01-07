import { createAction,props } from '@ngrx/store';


export const PostUpdateStatusnull = createAction('[Post Update Status null] Post Update Status to null') 

export const PostUpdateStatus= createAction('[Post Update Status]  Post Update Status',props<{url:any,data:any}>());

export const PostUpdateStatusSucess=createAction('[Post Update Status] Post Update Status Success',
props<{result: any}>()
);