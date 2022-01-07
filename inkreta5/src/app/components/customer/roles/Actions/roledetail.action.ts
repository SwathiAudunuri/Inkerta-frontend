import { createAction,props } from '@ngrx/store';

export const getcustomercustomrolesdetnull=createAction('get custom role details  customer null')
export const getcustomercustomrolesdet=createAction('get custom role details  customer',props<{role_id : string}>())
export const getcustomercustomarolesdetSuccess= createAction('custom role details  Success customer',
props<{res:any}>()
);

// export const addcustomercustomactions=createAction('add customactions customer',props<{data : string}>())
// export const addcustomercustomactionsSuccess= createAction('add  customactions Success customer',
// props<{res:any}>()
// );