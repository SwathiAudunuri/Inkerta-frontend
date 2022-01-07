import { createReducer, on } from '@ngrx/store';
import { SendOtpMobile, SendOtpMobileInitialValues, SendOtpMobileSucess } from '../Actions/SendMobile.actions';

const initialState:any = {
    results : [],
    loading : false
}

const _SendMobileReducer = createReducer(
    initialState,
    on(SendOtpMobileInitialValues,(_state)=>({..._state,results:null})),
    on(SendOtpMobile,(_state)=>({..._state,results:null,loading:true})),
    on(SendOtpMobileSucess,(_state,result)=>({..._state,results:result,loading:false}))
);

export function SendMobileReducer(state:any, action:any) {
  return _SendMobileReducer(state, action);
}