import { combineReducers } from "@ngrx/store";
import { GetBudgetDetailsSuccessReducer } from "./getbudgetdetails.reducers";
import { GetCashFlowReducer } from "./getcashflow.reducers";
import { savebudgetReducer } from "./savebudget.reducers";

export const getcashflowReducers = combineReducers({
    getcashflow : GetCashFlowReducer,
    savebudget : savebudgetReducer,
    budgetdetails:GetBudgetDetailsSuccessReducer
})