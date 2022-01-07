import { createReducer, on } from '@ngrx/store';
import { getActiondetailnull, getActiondetailSuccess } from '../Actions/actiondetail.action';
import { getcustomercustomactions, getcustomercustomactionsSuccess } from '../Actions/customaction.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _CustomactionsdetailsReducer = createReducer(
    initialState,
    on(getActiondetailnull,(_state,res)=>({..._state,result:null})),
    on(getActiondetailSuccess,(_state,res)=>({..._state,result:res.result,loading:false})),
  //  on(addsuccesscustomerCustomactions,(_state,res)=>({..._state,postresult:res,loading:false}))
  );
  
  export function CustomactionsdetailsReducer(state:any, action:any) {
    return _CustomactionsdetailsReducer(state, action);
  }