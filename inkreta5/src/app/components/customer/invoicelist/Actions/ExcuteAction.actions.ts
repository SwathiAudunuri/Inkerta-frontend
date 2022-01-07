import { createAction,props } from '@ngrx/store';


export const ExecuteActionnull = createAction('[Execute Action null] Execute Action value to null') 

export const ExecuteAction= createAction('[Execute Action] Execute Action',props<{url : string}>());

export const ExecuteActionSucess=createAction('[Execute Action] Execute Action Success',
props<{result: any}>()
);