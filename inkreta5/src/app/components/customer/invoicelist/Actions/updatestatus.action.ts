import { createAction,props } from '@ngrx/store';
import { QueryList } from '../models/query.model';
import { updatestatus } from '../models/updatestatus.model';


export const customerupdateStatusnull=createAction('Update Status customer null')

export const customerupdateStatus=createAction('Update Status customer',props<{url:any}>())
export const customerupdateSuccess= createAction('Update Success customer',
props<{res:any}>()
);


