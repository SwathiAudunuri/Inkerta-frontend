import { createSelector } from "@ngrx/store";
import { QueryList } from "../models/query.model";
import { QueryState } from "../Reducers/querylist.reducers";
export const queryselector =createSelector(

    (state:QueryState)=>state.querylist,
    (querylist: ReadonlyArray<QueryList>)=>{querylist}
)