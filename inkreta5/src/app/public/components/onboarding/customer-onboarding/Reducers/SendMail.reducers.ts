import { createReducer, on } from '@ngrx/store';
import { SendOtpMail, SendOtpMailInitialValues, SendOtpMailSucess } from '../Actions/SendMail.actions';

const initialState:any = {
    results : [],
    loading : false
}

const _SendMailReducer = createReducer(
    initialState,
    on(SendOtpMailInitialValues,(_state)=>({..._state,results:null})),
    on(SendOtpMail,(_state)=>({..._state,results:null,loading:true})),
    on(SendOtpMailSucess,(_state,result)=>({..._state,results:result,loading:false}))
);

export function SendMailReducer(state:any, action:any) {
  return _SendMailReducer(state, action);
}