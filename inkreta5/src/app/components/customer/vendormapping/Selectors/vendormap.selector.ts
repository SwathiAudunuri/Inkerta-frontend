import { createFeatureSelector, createSelector } from "@ngrx/store";

const _getsupplier =createFeatureSelector<any>('suppliers');
export const getsupplier = createSelector(_getsupplier,(state)=>{
    return state.results;
})

const  _getsupplierdetail = createFeatureSelector<any>('supplierDetail');
export const getsupplierdetail = createSelector(_getsupplierdetail,(state)=>{
    return state.results
})