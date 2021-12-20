import { createAction,props } from "@ngrx/store";
import { stepperState } from "./States";

export const gstinverfy = createAction(
    'gstin',
    props<{gstin : string}>()
);
export  const gstinverfySuccess = createAction(
    'gstverifed',
    (result:any)=>({result})
    // props<{result : any}>()
);

export const emailverfiy = createAction(
    'email_verfy',
    props<{data : {}}>()
    // (data:any)=>({data})
)
export  const emailverfiySuccess = createAction(
    'emailverfiySuccess',
    (result:any)=>({result})
    // props<{result : any}>()
);
export const emailverfiySuccesserror = createAction(
    'error_emailverfiySuccess',
    (result:any)=>({result})
)

export const emailotp = createAction(
    'email_otp',
    props<{data1:{}}>()
)
export const emailotp_result = createAction(
    'email_otp_result',
    (emailotpresult:any)=>({emailotpresult})
)
export const emailerror = createAction(
    'error',
    (emailotpresult:any)=>({emailotpresult})
)

export const saveonbord = createAction(
    'save_onbording',
    // props<{save:{}}>()
    (save:any)=>({save})
)
export const save_onbording_success = createAction(
    'save_onbording_sucess',
    (save_result:any)=>({save_result})
)