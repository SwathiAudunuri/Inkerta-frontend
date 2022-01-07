import { createReducer, on } from '@ngrx/store';
import { AdditionalDetailsInitialValues, GetAdditionalDetails, GetAdditionalDetailsSucess } from '../Actions/AddtionalDetails.actions';
import { SendOtpMail, SendOtpMailInitialValues, SendOtpMailSucess } from '../Actions/SendMail.actions';

const initialState:any = {
    results : [],
    loading : false
}

const _AdditionalDetailsReducer = createReducer(
    initialState,
    on(AdditionalDetailsInitialValues,(_state)=>({..._state,results:null})),
    on(GetAdditionalDetails,(_state)=>({..._state,results:null,loading:true})),
    on(GetAdditionalDetailsSucess,(_state,result)=>({..._state,results:result,loading:false}))
);

export function AdditionalDetailsReducer(state:any, action:any) {
  return _AdditionalDetailsReducer(state, action);
}