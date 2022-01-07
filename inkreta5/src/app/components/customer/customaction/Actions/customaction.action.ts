import { createAction,props } from '@ngrx/store';

export const nullcustomercustomactions=createAction('null customactions customer')
export const getcustomercustomactions=createAction('get customactions customer')
export const getcustomercustomactionsSuccess= createAction('customactions Success customer',
props<{res:any}>()
);

export const addcustomercustomactionsnull=createAction('add customactions customer null');
export const addcustomercustomactions=createAction('add customactions customer',props<{data : any}>())
export const addcustomercustomactionsSuccess= createAction('add  customactions Success customer',
props<{res:any}>()
);



