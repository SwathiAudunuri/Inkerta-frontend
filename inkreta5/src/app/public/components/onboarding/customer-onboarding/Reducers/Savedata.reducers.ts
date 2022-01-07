import { createReducer, on } from '@ngrx/store';
import { SaveData, SaveDataSucess, SaveDataValuenull } from '../Actions/Savedata.actions';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _SaveDataReducer = createReducer(
  initialState,
  on(SaveDataValuenull,(_state)=>({..._state,result:null,data:null})),
  on(SaveData,(_state,{data})=>({..._state,data:data,loading:true})),
  on(SaveDataSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function SaveDataReducer(state:any, action:any) {
  return _SaveDataReducer(state, action);
}