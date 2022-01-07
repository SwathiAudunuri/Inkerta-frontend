import { combineReducers } from "@ngrx/store";
import { changepasswordReducer } from "./changepassword.reducers";

export const CommonProfileReducers = combineReducers({
    changepassword : changepasswordReducer,
})