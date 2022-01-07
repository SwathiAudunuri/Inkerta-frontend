import { createFeatureSelector, createSelector } from "@ngrx/store";

const _LoginState =createFeatureSelector<any>('login');
export const LoginState = createSelector(_LoginState,(state)=>{
    return state;
})
