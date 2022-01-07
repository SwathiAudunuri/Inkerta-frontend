import { createFeatureSelector, createSelector } from "@ngrx/store";

const _UserManagementState =createFeatureSelector<any>('UserManagement');

export const GatUsersState = createSelector(_UserManagementState,(state)=>{
    return state.getusers;
})

export const CreateUserState = createSelector(_UserManagementState,(state)=>{
    return state.createuser;
})

export const GetUserDetailsState = createSelector(_UserManagementState,(state)=>{
    return state.userdetails;
})

export const GetRolesState = createSelector(_UserManagementState,(state)=>{
    return state.getroles;
})

export const MapRolesState = createSelector(_UserManagementState,(state)=>{
    return state.maproles;
})

export const UnMapRolesState = createSelector(_UserManagementState,(state)=>{
    return state.unmaproles;
})

export const resetPasswordState = createSelector(_UserManagementState,(state)=>{
    return state.resetPassword;
})