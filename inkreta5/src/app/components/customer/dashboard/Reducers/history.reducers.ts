import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
// import { InvoiceListHistory } from '../models/invoicelisthistory.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getcustomerInvoiceListHistory, getcustomerInvoiceListHistoryInitialValues, getcustomerInvoiceListHistorySuccess } from '../Actions/history.actions'; 



// const initialState :ReadonlyArray<InvoiceListHistory>=[]
const initialState:any = {
  history : null,
  url:"",
  loading:false
}
const _invoicelisthistoryReducer = createReducer(
  initialState,
  on(getcustomerInvoiceListHistoryInitialValues,(_state)=>({..._state,history: null})),
  on(getcustomerInvoiceListHistory,(_state,{url})=>({..._state,history: null,url:url,loading:true})),
  on(getcustomerInvoiceListHistorySuccess,(_state,{data})=>({..._state,history : data,loading:false}))
 
);

export function customerHistoryReducer(state:any, action:any) {
  return _invoicelisthistoryReducer(state, action);
}