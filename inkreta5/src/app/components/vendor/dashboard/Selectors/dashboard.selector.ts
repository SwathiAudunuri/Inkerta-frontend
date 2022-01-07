import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";


const getMetricState =createFeatureSelector<any>('vendormetrics');
export const getMetricsState = createSelector(getMetricState,(state)=>{
    return state;
})

const getcompanylist =createFeatureSelector<any>('companylist');
export const getcompanylistState = createSelector(getcompanylist,(state)=>{
    return state;
})

const getcompanystat=createFeatureSelector<any>('totalcompanystat');
export const getcompanystatState = createSelector(getcompanystat,(state)=>{
    return state;
})

const _getHistoryState =createFeatureSelector<any>('vendiashistory');
export const getHistoryState = createSelector(_getHistoryState,(state)=>{
    return state;
})

const getcompanyintable=createFeatureSelector<any>('companytable');
export const getcompanyintablestate = createSelector(getcompanyintable,(state)=>{
    return state;
})

const getcompanysummary=createFeatureSelector<any>('companysummary');
export const getcompanysummaryState = createSelector(getcompanysummary,(state)=>{
    return state;
})

const getcompanycontactdetails=createFeatureSelector<any>('companycontactdetails');
export const getcompanycontactdetailsState = createSelector(getcompanycontactdetails,(state)=>{
    return state;
})

const getcompanyactivity=createFeatureSelector<any>('companyactivity');
export const getcompanyactivityState = createSelector(getcompanyactivity,(state)=>{
    return state;
})

const getcompanyclosedinvoicesummary=createFeatureSelector<any>('companyclosedinvoicesummary');
export const getcompanyclosedinvoicesummaryState = createSelector(getcompanyclosedinvoicesummary,(state)=>{
    return state;
})

const getcompanyclosedintable=createFeatureSelector<any>('closedcompanytable');
export const getcompanyclosedintableState = createSelector(getcompanyclosedintable,(state)=>{
    return state;
})
const getclosedinvfromcompany=createFeatureSelector<any>('closedinvfromcompany');
export const getclosedinvfromcompanyState = createSelector(getclosedinvfromcompany,(state)=>{
    return state;
})