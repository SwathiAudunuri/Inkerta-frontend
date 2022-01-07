import { createFeatureSelector, createSelector } from "@ngrx/store";

const _getcommunication =createFeatureSelector<any>('communications');
export const getcommunication = createSelector(_getcommunication,(state)=>{
    return state.results;
})

const _getcommunicationid =createFeatureSelector<any>('communicationid');
export const getcommunicationid = createSelector(_getcommunicationid,(state)=>{
    return state;
})
