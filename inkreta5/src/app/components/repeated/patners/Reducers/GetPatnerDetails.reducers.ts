import { createReducer, on } from '@ngrx/store';
import { GetPatnerDetails, GetPatnerDetailsInitialValue, GetPatnerDetailsSuccess } from '../Actions/GetPatnerDetails.actions';

const initialState:any = {
  url:"",
  result:null,
  loading:false
}
const _GetPatnerDetailsReducer = createReducer(
  initialState,
  on(GetPatnerDetailsInitialValue,(_state)=>({..._state,result:null,url:null})),
  on(GetPatnerDetails,(_state,url)=>({..._state,url:url,loading:true})),
  on(GetPatnerDetailsSuccess,(_state,data)=>({..._state,result:data.data,loading:false}))

);

export function GetPatnerDetailsReducer(state:any, action:any) {
  return _GetPatnerDetailsReducer(state, action);
}