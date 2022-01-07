import { combineReducers } from "@ngrx/store";
import { Additiona_DetailsReducer } from "./Additonal_details.reducers";
import { GetProfileDetailsReducer } from "./GetProfileDetails.reducers";
import {AddGstinReducer} from './Add_gstin.reducers'
import { SaveProfileReducer } from "./saveprofiledetails.reducers";

export const ProfileManagementReducers = combineReducers({
    getprofile : GetProfileDetailsReducer,
    additionaldetails : Additiona_DetailsReducer,
    addgstin : AddGstinReducer,
    saveprofile : SaveProfileReducer

});