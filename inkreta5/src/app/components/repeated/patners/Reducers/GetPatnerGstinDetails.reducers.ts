import { createReducer, on } from '@ngrx/store';
import { GetPatnerGstinDetails, GetPatnerGstinDetailsInitialValue, GetPatnerGstinDetailsSuccess } from '../Actions/GetPatnerGstinDetails.actions';

const initialState:any = {
  url:"",
  result:null,
  loading:false
}
const _GetPatnerGstinDetailsReducer = createReducer(
  initialState,
  on(GetPatnerGstinDetailsInitialValue,(_state)=>({..._state,result:null,url:null})),
  on(GetPatnerGstinDetails,(_state,url)=>({..._state,url:url,loading:true})),
  on(GetPatnerGstinDetailsSuccess,(_state,data)=>({..._state,result:data.data,loading:false}))

);

export function GetPatnerGstinDetailsReducer(state:any, action:any) {
  return _GetPatnerGstinDetailsReducer(state, action);
}