import { createReducer, on } from '@ngrx/store';
import {AddGstin, AddGstinInitialValue, AddGstinSuccess} from '../Actions/Add_gstin.actions'

const initialState:any = {
    details:null,
    loading:false
}
const _AddGstinReducer = createReducer(
  initialState,
  on(AddGstinInitialValue,(_state)=>({..._state,details:null})),
  on(AddGstin,(_state)=>({..._state,loading:true})),
  on(AddGstinSuccess,(_state,details)=>({..._state,details:details.details,loading:false}))

);

export function AddGstinReducer(state:any, action:any) {
  return _AddGstinReducer(state, action);
}