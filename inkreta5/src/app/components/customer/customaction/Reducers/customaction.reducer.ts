import { createReducer, on } from '@ngrx/store';
import { getActiondetailSuccess } from '../Actions/actiondetail.action';
import { getcustomercustomactions, getcustomercustomactionsSuccess, nullcustomercustomactions } from '../Actions/customaction.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

// const initialState :ReadonlyArray<any>=[]
const _CustomactionsReducer = createReducer(
  initialState,
  on(nullcustomercustomactions,(_state,res)=>({..._state,result:null})),
  on(getcustomercustomactionsSuccess,(_state,res)=>({..._state,result:res,loading:false})),
//  on(addsuccesscustomerCustomactions,(_state,res)=>({..._state,postresult:res,loading:false}))
);

export function CustomactionsReducer(state:any, action:any) {
  return _CustomactionsReducer(state, action);
}


