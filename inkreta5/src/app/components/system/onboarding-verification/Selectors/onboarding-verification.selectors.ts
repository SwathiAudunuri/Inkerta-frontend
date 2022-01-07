import { createFeatureSelector, createSelector } from "@ngrx/store";

const patnersState =createFeatureSelector<any>('patners');


export const GetPatners = createSelector(patnersState,(state)=>{
    return state.getpartners;
})

export const GetPatnerdetailsState = createSelector(patnersState,(state)=>{
    return state.partnerdetails;
})

export const GetDocumentState = createSelector(patnersState,(state)=>{
    return state.getdoc;
})

export const SetStatusState = createSelector(patnersState,(state)=>{
    return state.setstatus;
})