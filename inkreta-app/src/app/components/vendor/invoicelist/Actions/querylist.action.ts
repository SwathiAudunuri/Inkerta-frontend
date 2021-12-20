import { createAction,props } from '@ngrx/store';
import { QueryList } from '../models/query.model';


export const getQueryList= createAction('[QueryList] Get QueryList');
export const getQueryListSuccess= createAction('[QueryList] Get QueryList Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{queries: ReadonlyArray<QueryList>}>()
);

