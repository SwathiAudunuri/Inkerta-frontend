import { createAction,props } from '@ngrx/store';
import { QueryList } from '../models/query.model';


export interface REF{
    ref:string
}

export const getcustomerQueryListnull= createAction('[customerQueryList null] Get QueryList null ')

export const getcustomerQueryList= createAction('[customerQueryList] Get QueryList',props<{ref:string}>());
export const getcustomerQueryListSuccess= createAction('[customerQueryList] Get QueryList Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{queries: ReadonlyArray<QueryList>}>()
);

export const getQueryAttachment= createAction('[customer Query Attachment] Get Query Attachment',props<{ref:string}>());

export const getQueryAttachmentSuccess= createAction('[customer Query Attachment Success] Get Query Attachment Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{res: any}>()
);
