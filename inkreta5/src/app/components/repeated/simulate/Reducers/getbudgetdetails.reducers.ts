import { createReducer, on } from '@ngrx/store';
import { GetBudgetDetails, GetBudgetDetailsInitialValue, GetBudgetDetailsSuccess } from '../Actions/getbudgetdetails.actions';


const initialState:any = {
  url:"",
  result:null,
  loading:false
}
const _GetBudgetDetailsSuccessReducer = createReducer(
  initialState,
  on(GetBudgetDetailsInitialValue,(_state)=>({..._state,result:null,url:null})),
  on(GetBudgetDetails,(_state,url)=>({..._state,url:url,loading:true})),
  on(GetBudgetDetailsSuccess,(_state,data)=>({..._state,result:data.data,loading:false}))

);

export function GetBudgetDetailsSuccessReducer(state:any, action:any) {
  return _GetBudgetDetailsSuccessReducer(state, action);
}