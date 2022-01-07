import { createReducer, on } from '@ngrx/store';
import { SelectList, SelectListInitialValue, SelectListSuccess } from '../Actions/SelectList.actions';

const initialState:any = {
    selectlist:null,
  loading:false
}
const _SelectListReducer = createReducer(
  initialState,
  on(SelectListInitialValue,(_state)=>({..._state,selectlist:null})),
  on(SelectList,(_state)=>({..._state,loading:true})),
  on(SelectListSuccess,(_state,selectlist)=>({..._state,selectlist:selectlist.selectlist,loading:false}))

);

export function SelectListReducer(state:any, action:any) {
  return _SelectListReducer(state, action);
}