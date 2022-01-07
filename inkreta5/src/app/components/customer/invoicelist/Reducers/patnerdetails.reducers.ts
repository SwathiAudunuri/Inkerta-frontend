import { createReducer, on } from '@ngrx/store';
import { getPatner, getPatnerInitialValue, getPatnerSuccess } from '../Actions/patnerdetails.actions';


const initialState:any = {
    details : [],
  loading:false
}
const _getPatnerReducer = createReducer(
  initialState,

  on(getPatnerInitialValue,(_state)=>({..._state,details:null})),
  on(getPatner,(_state)=>({..._state,details:null,loading:true})),
  on(getPatnerSuccess,(_state,details)=>({..._state,details:details.details,loading:false}))
);

export function CustgetPatnerReducer(state:any, action:any) {
  return _getPatnerReducer(state, action);
}