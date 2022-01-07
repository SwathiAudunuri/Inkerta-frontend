import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
// import { InvoiceListHistory } from '../models/invoicelisthistory.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getvendorInvoiceListHistory, getvendorInvoiceListHistoryInitialValues, getvendorInvoiceListHistorySuccess } from '../Actions/history.action'; 



// const initialState :ReadonlyArray<InvoiceListHistory>=[]
const initialState:any = {
  history : null,
  url:"",
  loading:false
}
const _invoicelisthistoryReducer = createReducer(
  initialState,
  on(getvendorInvoiceListHistoryInitialValues,(_state)=>({..._state,history: null})),
  on(getvendorInvoiceListHistory,(_state,{url})=>({..._state,history: null,url:url,loading:true})),
  on(getvendorInvoiceListHistorySuccess,(_state,{data})=>({..._state,history : data,loading:false}))
 
);

export function vendorHistoryReducer(state:any, action:any) {
  return _invoicelisthistoryReducer(state, action);
}