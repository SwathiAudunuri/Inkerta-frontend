import { createReducer, on } from '@ngrx/store';
import { addcustomercustomroles, addcustomercustomrolesnull, addcustomercustomrolesSuccess } from '../Actions/customrole.action';
//import { getActiondetailSuccess } from '../Actions/actiondetail.action';
//import { addcustomercustomactionsSuccess, getcustomercustomactions, getcustomercustomactionsSuccess } from '../Actions/customaction.action';

const initialState:any = {
  result : null,
  data:null,
  postresult:null,
  doc_refid:"",
  adddata:null,
  loading : false

}

const _createroleReducer = createReducer(
    initialState,
    on(addcustomercustomrolesnull,(_state)=>({..._state,postresult:null,adddata:null,loading:false})),
   on(addcustomercustomroles,(_state,adddata)=>({..._state,adddata:adddata,postresult:null,loading:true})),
   on(addcustomercustomrolesSuccess,(_state,res)=>({..._state,postresult:res.res,loading:false})),
  //  on(addsuccesscustomerCustomactions,(_state,res)=>({..._state,postresult:res,loading:false}))
  );
  
  export function createroleReducer(state:any, action:any) {
    return _createroleReducer(state, action);
  }