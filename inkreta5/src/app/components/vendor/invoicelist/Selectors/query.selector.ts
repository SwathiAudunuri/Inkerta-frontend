import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QueryList } from "../models/query.model";
import { QueryState } from "../Reducers/querylist.reducers";
export const queryselector =createSelector(

    (state:QueryState)=>state.querylist,
    (querylist: ReadonlyArray<QueryList>)=>{querylist}
)
const getvendorqueryState =createFeatureSelector<any>('querylist');
export const getvendorquerylist = createSelector(getvendorqueryState,(state)=>{
    return state.results;
})