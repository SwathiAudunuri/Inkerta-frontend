import { createAction,props } from '@ngrx/store';

export const nullcustomercustomroles=createAction('null customroles customer')
export const getcustomercustomroles=createAction('get customroles customer')
export const getcustomercustomrolesSuccess= createAction(' get custom roles Success customer',
props<{res:any}>()
);

export const addcustomercustomrolesnull=createAction('add custom roles customer null')
export const addcustomercustomroles=createAction('add custom roles customer',props<{data : any}>())
export const addcustomercustomrolesSuccess= createAction('add  customroles Success customer',
props<{res:any}>()
);



