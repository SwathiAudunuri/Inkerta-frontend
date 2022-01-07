import { createAction,props } from '@ngrx/store';


export const getUsersForwardnull = createAction('[get Users For Forward] get Users For Forward value to null') 

export const getUsersForward= createAction('[get Users For Forward] get Users For Forward',props<{url : string}>());

export const getUsersForwardSucess=createAction('[get Users For Forward] get Users For Forward Success',
props<{result: any}>()
);