import { createAction,props } from '@ngrx/store';


export const getPatnerInitialValue= createAction('[customer getPatner Initial Value null] customer Get Patner');

export const getPatner= createAction('[customer getPatner] customer Get Patner',props<{url : string}>());

export const getPatnerSuccess=createAction('[customer getPatner] customer Get Patner Success',
props<{details:any}>()
);

