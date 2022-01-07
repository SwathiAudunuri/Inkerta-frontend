import { createAction,props } from '@ngrx/store';


export const nullcompanyactivities=createAction('null company activities ')

export const getcompanyactivities= createAction('[getcompanyactivities] get company activities',props<{id: String}>());

export const getcompanyactivitiesSuccess=createAction('[getcompanyactivitiesSuccess]get company activities Success',
props<{result: any}>()
);