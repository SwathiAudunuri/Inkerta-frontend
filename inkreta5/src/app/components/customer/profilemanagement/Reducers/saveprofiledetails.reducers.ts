import { createReducer, on } from '@ngrx/store';
import { SaveProfile, SaveProfilenull, SaveProfileSucess } from '../Actions/saveprofiledetails.actions';
const initialState:any = {
  result : [],
  data:[],
  loading : false
}

const _SaveProfileReducer = createReducer(
  initialState,
  on(SaveProfilenull,(_state)=>({..._state,result:null,data:null,loading:false})),
  on(SaveProfile,(_state,{data})=>({..._state,data:data,loading:true})),
  on(SaveProfileSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function SaveProfileReducer(state:any, action:any) {
  return _SaveProfileReducer(state, action);
}