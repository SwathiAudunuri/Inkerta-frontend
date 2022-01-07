import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";


const getcustomercustomrolesState =createFeatureSelector<any>('role');
export const getcustomercustomrole = createSelector(getcustomercustomrolesState,(state)=>{
    return state;
})



const getcustomercustomrolesdetailsState =createFeatureSelector<any>('roledetail');
export const getcustomercustomroledetails = createSelector(getcustomercustomrolesdetailsState,(state)=>{
    return state;
})

const getaddedroleState =createFeatureSelector<any>('addrole');
export const getaddedrole= createSelector(getaddedroleState,(state)=>{
    return state;
})