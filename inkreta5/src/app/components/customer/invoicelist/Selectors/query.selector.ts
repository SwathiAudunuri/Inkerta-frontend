import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QueryList } from "../models/query.model";
import { QueryState } from "../Reducers/querylist.reducers";
export const queryselector =createSelector(

    (state:QueryState)=>state.querylist1,
    (querylist: ReadonlyArray<QueryList>)=>{querylist}
)
const getcustomerqueryState =createFeatureSelector<any>('querylist1');
export const getcustomerquerylist = createSelector(getcustomerqueryState,(state)=>{
    return state.results;
})

const getcustomerpaidinvoiceState =createFeatureSelector<any>('customerpaidinvoicelist');
export const getcustomerpaidinvoicelist = createSelector(getcustomerpaidinvoiceState,(state)=>{
    return state;
})
