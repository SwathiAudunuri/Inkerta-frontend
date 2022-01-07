import { createAction,props } from '@ngrx/store';

export const SendOtpMailInitialValues= createAction('[Send Otp Mail]  Send Otp Mail Initial Values to NUll');

export const SendOtpMail= createAction('[Send Otp Mail]  Send Otp Mail',props<{url : string}>());

export const SendOtpMailSucess=createAction('[Send Otp Mail] Send Otp Mail Success',
props<{result: any}>()
);