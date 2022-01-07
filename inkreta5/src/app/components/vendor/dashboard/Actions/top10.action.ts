import { createAction,props } from '@ngrx/store';


export const nulltopten=createAction('null topten')

export const gettopten= createAction('[get topten] Get topten');

export const gettoptenSuccess=createAction('[get customers topten Success] Get customers topten Success',
props<{result: any}>()
);