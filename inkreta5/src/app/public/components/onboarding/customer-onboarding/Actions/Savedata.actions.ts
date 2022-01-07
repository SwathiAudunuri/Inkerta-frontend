import { createAction,props } from '@ngrx/store';


export const SaveDataValuenull = createAction('[Save Data1] SaveData to null') 

export const SaveData= createAction('[Save Data1]  SaveData',props<{url:any,data:any}>());

export const SaveDataSucess=createAction('[Save Data1] SaveData Success',
props<{result: any}>()
);