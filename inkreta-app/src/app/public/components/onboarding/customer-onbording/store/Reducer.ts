import { createReducer, on } from "@ngrx/store"
import { emailerror, emailotp, emailotp_result, emailverfiy, emailverfiySuccess, emailverfiySuccesserror, gstinverfy, gstinverfySuccess, saveonbord, save_onbording_success } from "./Actions"
import { initialState } from "./States"
// const initialState : any = {}
const _gstinverf = createReducer(
    initialState,
    // on(gstinverfy,(state,{value})=>{
    //     return{
    //         state,
    //         gstin: value
    //     }
    // }),
    on(gstinverfy,(_state,{gstin})=>({..._state,gstin:gstin})),
    on(gstinverfySuccess,(_state,{result})=>({..._state,result : result,status:false}))
    // on(emailverfiySuccesserror,(_state,{emailverfiyerror})=>({..._state,emailverfiyerror : emailverfiyerror}))
)
export function gstreducer(state:any,action:any){
    return _gstinverf(state,action)
}

const _emailver = createReducer(
    initialState,
    on(emailverfiy,(_state,{data})=>({..._state,email:data})),
    on(emailverfiySuccess,(_state,{result})=>({..._state,email_result : result}))

)
export function emailver(state:any,action:any){
    return _emailver(state,action)
}

const _emailotp = createReducer(
    initialState,
    on(emailotp,(_state,{data1})=>({..._state,emailotp:data1})),
    on(emailotp_result,(_state,{emailotpresult})=>({..._state,emailotpresult : emailotpresult,status1:false})),
    on(emailerror,(_state,{emailotpresult})=>({..._state,emailotpresult:emailotp_result,status1:true}))

)
export function emailverotp(state:any,action:any){
    return _emailotp(state,action)
}

const _saveonbording = createReducer(
    initialState,
    on(saveonbord,(_state,{save})=>({..._state,save:save})),
    on(save_onbording_success,(_state,{save_result})=>({..._state,save_result : save_result}))

)
export function saveonbording(state:any,action:any){
    return _saveonbording(state,action)
}