import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";


const getcustomercustomactionsState =createFeatureSelector<any>('customercustomactions');
export const getcustomercustomaction = createSelector(getcustomercustomactionsState,(state)=>{
    return state;
})



const getcustomercustomactionsdetailsState =createFeatureSelector<any>('actiondetail');
export const getcustomercustomactiondetails = createSelector(getcustomercustomactionsdetailsState,(state)=>{
    return state;
})

const getstatusandroleState =createFeatureSelector<any>('statusandrole');
export const getstatusandroles= createSelector(getstatusandroleState,(state)=>{
    return state;
})