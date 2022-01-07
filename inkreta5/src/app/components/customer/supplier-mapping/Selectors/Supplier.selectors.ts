import { createFeatureSelector, createSelector } from "@ngrx/store";

const _SupplierState =createFeatureSelector<any>('Supplier');

export const SupplierListState = createSelector(_SupplierState,(state)=>{
    return state.supplierlist;
})

export const SelectListState = createSelector(_SupplierState,(state)=>{
    return state.selectlist;
})