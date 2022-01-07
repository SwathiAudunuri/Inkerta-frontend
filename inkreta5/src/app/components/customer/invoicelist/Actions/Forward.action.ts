import { createAction,props } from '@ngrx/store';


export const ForwardDatanull = createAction('[post Forward] Forward value to null') 

export const ForwardData= createAction('[post Forward]  Forward Data',props<{url:any,data:any}>());

export const ForwardDataSucess=createAction('[post Forward] Forward Data Success',
props<{result: any}>()
);