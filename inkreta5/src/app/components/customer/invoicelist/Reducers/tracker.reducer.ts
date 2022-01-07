import { createReducer, on } from '@ngrx/store';
import { getTracker, getTrackerSuccess, TrackerInitialValues } from '../Actions/tracker.action';



// const initialState :ReadonlyArray<InvoiceListHistory>=[]
const initialState:any = {
  tracker : null,
  doc_ref_id:"",
  loading:false
}
const _TrackerReducer = createReducer(
  initialState,
  on(TrackerInitialValues,(_state)=>({..._state,tracker: null})),
  on(getTracker,(_state,{doc_ref_id})=>({..._state,tracker: null,doc_ref_id:doc_ref_id,loading:true})),
  on(getTrackerSuccess,(_state,{data})=>({..._state,tracker : data,loading:false}))
);

export function TrackerReducer(state:any, action:any) {
  return _TrackerReducer(state, action);
}