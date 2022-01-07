import { createAction,props } from '@ngrx/store';


export const Submitnull = createAction('[Submit Data1] SubmitData to null') 

export const SubmitData= createAction('[Submit Data1]  SubmitData',props<{url:any,data:any}>());

export const SubmitSucess=createAction('[Submit Data1] SubmitData Success',
props<{result: any}>()
);