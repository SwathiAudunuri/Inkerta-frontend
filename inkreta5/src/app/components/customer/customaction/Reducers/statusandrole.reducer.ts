import { createReducer, on } from '@ngrx/store';
import { getActiondetailSuccess } from '../Actions/actiondetail.action';
import { getcustomercustomactions, getcustomercustomactionsSuccess } from '../Actions/customaction.action';
import { getstatusandrolenull, getstatusandroleSuccess } from '../Actions/statusandrole.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _StatusandroleReducer = createReducer(
    initialState,
   on(getstatusandrolenull,(_state)=>({..._state,  result : null,data:null,postresult:null,doc_refid:null})),
    on(getstatusandroleSuccess,(_state,res)=>({..._state,result:res.result,loading:false})),
  //  on(addsuccesscustomerCustomactions,(_state,res)=>({..._state,postresult:res,loading:false}))
  );
  
  export function StatusandroleReducer(state:any, action:any) {
    return _StatusandroleReducer(state, action);
  }