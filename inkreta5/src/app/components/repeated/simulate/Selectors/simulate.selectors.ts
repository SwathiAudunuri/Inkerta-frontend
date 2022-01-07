import { createFeatureSelector, createSelector } from "@ngrx/store";

const _simulateState =createFeatureSelector<any>('simulate');

export const simulateState = createSelector(_simulateState,(state)=>{
    return state.getcashflow;
})

export const savebudgetState = createSelector(_simulateState,(state)=>{
    return state.savebudget;
})

export const budgetdetailsState = createSelector(_simulateState,(state)=>{
    return state.budgetdetails;
})