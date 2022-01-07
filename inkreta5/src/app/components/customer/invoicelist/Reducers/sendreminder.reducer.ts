import { createReducer, on } from '@ngrx/store';
import { SendReminder, SendRemindernull, SendReminderSucess } from '../Actions/sendreminder.actions';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}

const _SendReminderReducer = createReducer(
  initialState,
  on(SendRemindernull,(_state)=>({..._state,result:null,data:null,loading:false})),
  on(SendReminder,(_state,{data})=>({..._state,data:data,loading:true})),
  on(SendReminderSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function SendReminderReducer(state:any, action:any) {
  return _SendReminderReducer(state, action);
}