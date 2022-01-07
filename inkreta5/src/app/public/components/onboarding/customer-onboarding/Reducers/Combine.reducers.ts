import { combineReducers } from "@ngrx/store";
import { AttachmentTypeReducer } from "../../vender-onboarding/Reducers/AttachmentsType.reducers";
import { AdditionalDetailsReducer } from "./AddtionalDetails.reducers";
import { CaptchaReducer } from "./onboardCaptcha.reducers";
import { SaveDataReducer } from "./Savedata.reducers";
import { SendMailReducer } from "./SendMail.reducers";
import { SendMobileReducer } from "./SendMobile.reducers";
import { SubmitDataReducer } from "./Submit.reducers";
import { VerifyGstInReducer } from "./verifyGstin.reducers";
import { VerifyMailReducer } from "./VerifyMail.reducers";
import { VerifyMobileReducer } from "./VerifyMobile.reducers";


export const Onboardreducers1 = combineReducers({
    Captcha : CaptchaReducer,
    VerifyGstIn : VerifyGstInReducer,
    sendmail:SendMailReducer,
    verifymail:VerifyMailReducer,
    sendmobile:SendMobileReducer,
    verifymobile:VerifyMobileReducer,
    additionaldetails:AdditionalDetailsReducer,
    savedata:SaveDataReducer,
    submit:SubmitDataReducer,
    attachementtype:AttachmentTypeReducer
});