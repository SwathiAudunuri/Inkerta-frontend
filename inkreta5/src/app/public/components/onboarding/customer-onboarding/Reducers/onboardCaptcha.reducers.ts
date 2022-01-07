import { createReducer, on } from '@ngrx/store';
import { GetCaptcha, GetCaptchanull, GetCaptchaSucess } from '../Actions/onboardCaptcha.actions';

const initialState:any = {
    results : [],
    loading : false
}

const _CaptchaReducer = createReducer(
    initialState,
    on(GetCaptchanull,(_state)=>({..._state,results:null})),
    on(GetCaptcha,(_state)=>({..._state,results:null,loading:true})),
    on(GetCaptchaSucess,(_state,result)=>({..._state,results:result,loading:false}))
);

export function CaptchaReducer(state:any, action:any) {
  return _CaptchaReducer(state, action);
}