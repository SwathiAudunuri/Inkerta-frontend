import { createAction,props } from '@ngrx/store';


export const Submitnull = createAction('[Submit Data] SubmitData to null') 

export const SubmitData= createAction('[Submit Data]  SubmitData',props<{url:any,data:any}>());

export const SubmitSucess=createAction('[Submit Data] SubmitData Success',
props<{result: any}>()
);