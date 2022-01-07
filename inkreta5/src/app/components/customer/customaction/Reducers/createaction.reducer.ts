import { createReducer, on } from '@ngrx/store';
import { getActiondetailSuccess } from '../Actions/actiondetail.action';
import { addcustomercustomactionsnull, addcustomercustomactionsSuccess, getcustomercustomactions, getcustomercustomactionsSuccess } from '../Actions/customaction.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _createactionReducer = createReducer(
    initialState,
   on(addcustomercustomactionsnull,(_state)=>({..._state,result : null,data:null,postresult:null,doc_refid:null})),
    on(addcustomercustomactionsSuccess,(_state,res)=>({..._state,result:res.res,loading:false})),
  //  on(addsuccesscustomerCustomactions,(_state,res)=>({..._state,postresult:res,loading:false}))
  );
  
  export function createactionReducer(state:any, action:any) {
    return _createactionReducer(state, action);
  }