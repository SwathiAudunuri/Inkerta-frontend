import { createAction,props } from '@ngrx/store';

export const customercommentsnull=createAction('get Comments customer null')
export const customercomments=createAction('get Comments customer',props<{url: string}>())
export const customercommentsSuccess= createAction('Comments Success customer',
props<{res:any}>()
);


export const addcustomercomments=createAction('[Add Comments] customer',props<{url:any,data: any}>())
export const addsuccesscustomercomments=createAction('[Add Comments Success ]customer',props<{res: any}>())


export const customercommentsKeys=createAction('get Comments customer Keys',props<{url: string}>())
export const customercommentsKeysSuccess= createAction('Comments Success customer Keys',
props<{res:any}>()
);

