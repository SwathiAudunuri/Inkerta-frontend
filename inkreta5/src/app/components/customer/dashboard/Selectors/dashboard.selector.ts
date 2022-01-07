import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";


const getMetricState =createFeatureSelector<any>('metrics');
export const getMetricsState = createSelector(getMetricState,(state)=>{
    return state;
})

const gettoptenState =createFeatureSelector<any>('top10vendors');
export const gettoptenvendorsState = createSelector(gettoptenState,(state)=>{
    return state;
})

const _getHistoryState =createFeatureSelector<any>('diashistory');
export const getHistoryState = createSelector(_getHistoryState,(state)=>{
    return state;
})


