import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";


const gettoptenState =createFeatureSelector<any>('top10customers');
export const gettoptencustomersState = createSelector(gettoptenState,(state)=>{
    return state;
})