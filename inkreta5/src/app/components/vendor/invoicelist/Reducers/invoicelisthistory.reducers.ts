import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
import { InvoiceListHistory } from '../models/invoicelisthistory.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getInvoiceListHistory, getInvoiceListHistorynull, getInvoiceListHistorySuccess } from '../Actions/invoicelisthistory.actions'; 

const initialState:any = {
  history : [],
  doc_ref_id:"",
  loading:false
}
// const initialState :ReadonlyArray<InvoiceListHistory>=[]
const _invoicelisthistoryReducer = createReducer(
  initialState,
  on(getInvoiceListHistorynull,(_state)=>({..._state,history : null,doc_ref_id:null,loading:false})),
  on(getInvoiceListHistory,(_state,{url})=>({..._state,url:url,loading:true})),
  on(getInvoiceListHistorySuccess,(_state,{data})=>({..._state,history : data,loading:false}))

 
);

export function invoiceListHistoryReducer(state:any, action:any) {
  return _invoicelisthistoryReducer(state, action);
}