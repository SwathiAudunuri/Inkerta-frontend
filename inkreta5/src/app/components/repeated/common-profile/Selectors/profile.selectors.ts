import { createFeatureSelector, createSelector } from "@ngrx/store";

const _loginState =createFeatureSelector<any>('login');

export const loginState = createSelector(_loginState,(state)=>{
    return state;
})

const _profileState =createFeatureSelector<any>('profile');

export const changepasswordState = createSelector(_profileState,(state)=>{
    return state.changepassword;
})