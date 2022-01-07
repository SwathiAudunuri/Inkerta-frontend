import { createReducer, on } from '@ngrx/store';
import { addcustomercomments, addsuccesscustomercomments, customercomments, customercommentsSuccess } from '../Actions/comments.action';
import { fetchforinvoice, fetchforinvoicenull, fetchforinvoiceSuccess } from '../Actions/FetchForInvoice.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}
// const initialState :ReadonlyArray<any>=[]
const _FetchforInvoiceReducer = createReducer(
  initialState,
  on(fetchforinvoicenull,(_state)=>({..._state,result : null,data:null,postresult:null,doc_refid:null})),
  on(fetchforinvoice,(_state,doc_refid)=>({..._state,doc_refid:doc_refid,loading:true})),
  on(fetchforinvoiceSuccess,(_state,res)=>({..._state,result:res,loading:false})),

);

export function FetchforInvoiceReducer(state:any, action:any) {
  return _FetchforInvoiceReducer(state, action);
}