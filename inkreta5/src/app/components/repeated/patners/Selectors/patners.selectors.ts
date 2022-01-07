import { createFeatureSelector, createSelector } from "@ngrx/store";

const _patnersState =createFeatureSelector<any>('commonpatners');

export const addgstinState = createSelector(_patnersState,(state)=>{
    return state.addgstin;
})

export const savegstinState = createSelector(_patnersState,(state)=>{
    return state.savegstindata;
})

export const getPatnersdataState = createSelector(_patnersState,(state)=>{
    return state.getpatnerdata;
})

export const getPatnersdetailsState = createSelector(_patnersState,(state)=>{
    return state.getpatnerdetails;
})