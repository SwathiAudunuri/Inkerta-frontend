import { createFeatureSelector, createSelector } from "@ngrx/store"

export interface stepperState{
    gstin : string,
    result : any,
    emailverfiyerror:any,
    status : any,
    email :any,
    email_result:any,
    emailotp:any,
    emailotpresult:any,
    status1:any,
    save:any,
    save_result:any
}

export const initialState : stepperState={
    gstin: "",
    result : null,
    emailverfiyerror:null,
    status : true,
    email : null,
    email_result:null,
    emailotp:null,
    emailotpresult:null,
    status1:true,
    save:null,
    save_result:null
}

const getStepperState =createFeatureSelector<stepperState>('stepper');
const getotpState =createFeatureSelector<stepperState>('otp');

export const getgstin = createSelector(getStepperState,(state)=>{
    return state.gstin;
})

export const getresult = createSelector(getStepperState,state=>{
    return state.result;
})

export const getstatus = createSelector(getStepperState,state=>{
    return state.status;
})

export const getemailotpresult = createSelector(getotpState,(state)=>{
    return state.emailotpresult;
})

export const getstatus1 = createSelector(getotpState,state=>{
    return state.status1;
})

// export interface FeatureState{
//     gstin : stepperState;
// }
// const getstepperState = (state:FeatureState)=>state.gstin;


// export const getgstIn = createSelector(getstepperState,(state:stepperState)=>{
//     state.gstin;
// })
// export const getresult = createSelector(getstepperState,(state:stepperState)=>{
//     state.result;
// })
// export const getStatus = createSelector(getstepperState,(state:stepperState)=>{
//     state.status;
// })