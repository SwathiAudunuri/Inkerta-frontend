import { createAction,props } from '@ngrx/store';


export const SaveProfilenull = createAction('[Save Profile] Save Profile to null') 

export const SaveProfile= createAction('[Save Profile]  Save Profile',props<{url:any,data:any}>());

export const SaveProfileSucess=createAction('[Save Profile] Save Profile Success',
props<{result: any}>()
);