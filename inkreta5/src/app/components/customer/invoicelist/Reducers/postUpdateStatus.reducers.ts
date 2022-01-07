import { createReducer, on } from '@ngrx/store';
import { PostUpdateStatus, PostUpdateStatusnull, PostUpdateStatusSucess } from '../Actions/postUpdateStatus.actions';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}

const _PostUpdateStatusReducer = createReducer(
  initialState,
  on(PostUpdateStatusnull,(_state)=>({..._state,result:null,data:null,loading:false})),
  on(PostUpdateStatus,(_state,{data})=>({..._state,data:data,loading:true})),
  on(PostUpdateStatusSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function PostUpdateStatusReducer(state:any, action:any) {
  return _PostUpdateStatusReducer(state, action);
}