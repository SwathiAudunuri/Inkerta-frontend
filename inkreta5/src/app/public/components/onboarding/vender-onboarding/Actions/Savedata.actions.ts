import { createAction,props } from '@ngrx/store';


export const SaveDataValuenull = createAction('[Save Data] SaveData to null') 

export const SaveData= createAction('[Save Data]  SaveData',props<{url:any,data:any}>());

export const SaveDataSucess=createAction('[Save Data] SaveData Success',
props<{result: any}>()
);