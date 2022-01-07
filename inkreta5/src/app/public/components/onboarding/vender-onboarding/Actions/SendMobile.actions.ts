import { createAction,props } from '@ngrx/store';

export const SendOtpMobileInitialValues= createAction('[Send Otp Mobile]  Send Otp Mobile Initial Values to NUll');

export const SendOtpMobile= createAction('[Send Otp Mobile]  Send Otp Mobile',props<{url : string}>());

export const SendOtpMobileSucess=createAction('[Send Otp Mobile] Send Otp Mobile Success',
props<{result: any}>()
);