import { createAction,props } from '@ngrx/store';

export const SendOtpMobileInitialValues= createAction('[Send Otp Mobile1]  Send Otp Mobile Initial Values to NUll');

export const SendOtpMobile= createAction('[Send Otp Mobile1]  Send Otp Mobile',props<{url : string}>());

export const SendOtpMobileSucess=createAction('[Send Otp Mobile1] Send Otp Mobile Success',
props<{result: any}>()
);