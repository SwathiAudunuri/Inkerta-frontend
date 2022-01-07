import { createAction,props } from '@ngrx/store';


export const CreateUsernull = createAction('[Create User] Create User to null') 

export const CreateUser= createAction('[Create User]  Create User',props<{url:any,data:any}>());

export const CreateUserSucess=createAction('[Create User] Create User Success',
props<{result: any}>()
);