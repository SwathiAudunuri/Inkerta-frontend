import { createAction,props } from '@ngrx/store';
import { QueryList } from '../models/query.model';


export interface REF{
    ref:string
}

export const getQueryListnull= createAction('[QueryList null] Get QueryList null')
export const getQueryList= createAction('[QueryList] Get QueryList',props<{ref:string}>());
export const getQueryListSuccess= createAction('[QueryList] Get QueryList Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{queries: ReadonlyArray<QueryList>}>()
);

