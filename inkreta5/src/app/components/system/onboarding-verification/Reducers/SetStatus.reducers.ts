import { createReducer, on } from '@ngrx/store';
import { SetStatus, SetStatusInitialvalues, SetStatusSuccess } from '../Actions/SetStatus.actions';

// const initialState :ReadonlyArray<any>=[]
const initialState:any={
    status:[],
  loading:false
}
const _SetStatusReducer = createReducer(
  initialState,
  on(SetStatusInitialvalues,(_state)=>({..._state,status:null})),
  on(SetStatus,(_state)=>({..._state,status:null,loading:true})),
  on(SetStatusSuccess,(_state,status)=>({..._state,status:status.status,loading:false}))
);

export function SetStatusReducer(state:any, action:any) {
  return _SetStatusReducer(state, action);
}