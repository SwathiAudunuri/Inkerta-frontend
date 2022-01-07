import { createAction,props } from '@ngrx/store';

export const vendorcommentsnull=createAction('get Comments vendor null')
export const vendorcomments=createAction('get Comments vendor',props<{url: string}>())
export const vendorcommentsSuccess= createAction('Comments Success vendor',
props<{res:any}>()
);


export const addvendorcomments=createAction('[Add Comments] vendor',props<{url:any,data: any}>())
export const addsuccessvendorcomments=createAction('[Add Comments Success ]vendor',props<{res: any}>())


export const vendorcommentsKeys=createAction('get Comments vendor Keys',props<{url: string}>())
export const vendorcommentsKeysSuccess= createAction('Comments Success vendor Keys',
props<{res:any}>()
);


