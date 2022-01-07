import { createAction,props } from '@ngrx/store';

export const getActiondetailnull= createAction('[get Action detail null] Get Action Details null')

export const getActiondetail= createAction('[get Action detail] Get Action Details',props<{action_id : string}>());

export const getActiondetailSuccess=createAction('[get Action detail Success] Get Action detail Data Success',
props<{result: any}>()
);