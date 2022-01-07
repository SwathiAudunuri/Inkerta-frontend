import { createAction,props } from '@ngrx/store';
import { QueryList } from '../models/query.model';
import { updatestatus } from '../models/updatestatus.model';


export const PaidRecordsnull=createAction('vendor Paid Records null')

export const PaidRecords=createAction('vendor Paid Records',props<{url:any}>())
export const PaidRecordsSuccess= createAction('vendor Paid Records Success customer',
props<{res:any}>()
);


