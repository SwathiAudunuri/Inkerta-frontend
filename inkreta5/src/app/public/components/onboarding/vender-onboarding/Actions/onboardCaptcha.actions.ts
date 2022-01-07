import { createAction,props } from '@ngrx/store';


export const GetCaptchanull = createAction('[Get Captcha] Get Captcha to null') 

export const GetCaptcha= createAction('[Get Captcha]  Get Captcha',props<{url : string}>());

export const GetCaptchaSucess=createAction('[Get Captcha] Get Captcha Success',
props<{result: any}>()
);