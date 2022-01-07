import { createFeatureSelector, createSelector } from "@ngrx/store";

const _ONBoardState =createFeatureSelector<any>('OnBoard');
export const CapthaState = createSelector(_ONBoardState,(state)=>{
    return state.Captcha;
})

// const _VerifyGstInState =createFeatureSelector<any>('OnBoard');
export const VerifyGstInState = createSelector(_ONBoardState,(state)=>{
    return state.VerifyGstIn;
})

export const SendMailState = createSelector(_ONBoardState,(state)=>{
    return state.sendmail;
})

export const VerifyMailState = createSelector(_ONBoardState,(state)=>{
    return state.verifymail;
})

export const SendMobileState = createSelector(_ONBoardState,(state)=>{
    return state.sendmobile;
})

export const VerifyMobileState = createSelector(_ONBoardState,(state)=>{
    return state.verifymobile;
})

export const AdditionalDetailsState = createSelector(_ONBoardState,(state)=>{
    return state.additionaldetails;
})

export const SaveDataState = createSelector(_ONBoardState,(state)=>{
    return state.savedata;
})

export const SubmitState = createSelector(_ONBoardState,(state)=>{
    return state.submit;
})

export const attachementtypeState = createSelector(_ONBoardState,(state)=>{
    return state.attachementtype;
})