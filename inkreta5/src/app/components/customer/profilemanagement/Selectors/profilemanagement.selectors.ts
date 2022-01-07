import { createFeatureSelector, createSelector } from "@ngrx/store";

const _ProfileManagementState =createFeatureSelector<any>('profilemanagement');

export const GatProfileState = createSelector(_ProfileManagementState,(state)=>{
    return state.getprofile;
})

export const AdditionaDetailsState = createSelector(_ProfileManagementState,(state)=>{
    return state.additionaldetails;
})

export const AddGstinState = createSelector(_ProfileManagementState,(state)=>{
    return state.addgstin;
})

export const SaveProfileState = createSelector(_ProfileManagementState,(state)=>{
    return state.saveprofile;
})