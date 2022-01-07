import { createAction,props } from '@ngrx/store';

export const getUsersInitialValue= createAction('[Get Users Initial Value] Get Users Initial Value');

export const getUsers= createAction('[Get Users Get Users',props<{url : string}>());

export const getUsersSuccess=createAction('[Get Users] Get Users Success',props<{users: any}>());

