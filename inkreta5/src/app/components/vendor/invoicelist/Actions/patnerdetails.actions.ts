import { createAction,props } from '@ngrx/store';


export const getPatnerInitialValue= createAction('[getPatner Initial Value null] Get Patner');

export const getPatner= createAction('[getPatner] Get Patner',props<{url : string}>());

export const getPatnerSuccess=createAction('[getPatner] Get Patner Success',
props<{details:any}>()
);

