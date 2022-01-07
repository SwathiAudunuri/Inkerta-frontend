import { createAction,props } from '@ngrx/store';
import { QueryList } from '../models/query.model';
import { updatestatus } from '../models/updatestatus.model';

export const updateStatusnull =createAction('vendor Update Status null')
export const updateStatus=createAction('Update Status',props<{url: any}>())
export const updateSuccess= createAction('Update Success',
props<{res:any}>()
);


