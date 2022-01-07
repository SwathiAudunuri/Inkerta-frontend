import { combineReducers } from "@ngrx/store";
import { AddGSTINReducer } from "./AddGstin.reducers";
import { GetPatnerDetailsReducer } from "./GetPatnerDetails.reducers";
import { GetPatnerGstinDetailsReducer } from "./GetPatnerGstinDetails.reducers";
import { SaveGSTINReducer } from "./savepatnerdata.reducers";

export const PatnersReducers = combineReducers({
    addgstin : AddGSTINReducer,
    savegstindata : SaveGSTINReducer,
    getpatnerdata : GetPatnerGstinDetailsReducer,
    getpatnerdetails : GetPatnerDetailsReducer
})

// commonpatners