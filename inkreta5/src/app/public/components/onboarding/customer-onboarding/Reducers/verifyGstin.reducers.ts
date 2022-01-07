import { createReducer, on } from '@ngrx/store';
import { GetCaptcha, GetCaptchaSucess } from '../Actions/onboardCaptcha.actions';
import { VerifyGstIn, VerifyGstInInitialvalue, VerifyGstInSucess } from '../Actions/verifyGstin.actions';

const initialState:any = {
    results : [],
    loading : false
}

const _VerifyGstInReducer = createReducer(
    initialState,
    on(VerifyGstInInitialvalue,(_state)=>({..._state,results:null})),
    on(VerifyGstIn,(_state)=>({..._state,results:null,loading:true})),
    on(VerifyGstInSucess,(_state,result)=>({..._state,results:result,loading:false}))
);

export function VerifyGstInReducer(state:any, action:any) {
  return _VerifyGstInReducer(state, action);
}