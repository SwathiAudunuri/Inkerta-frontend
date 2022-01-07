import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
import { InvoiceListHistory } from '../models/invoicelisthistory.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getInvoiceListDetails, getInvoiceListDetailsSuccess, InvoiceListDetailsInitialvalues } from '../Actions/invoicelistdetails.actions';

export const initialState : any={
  invoicelist : [],
  doc_refid:"",
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _invoicelistdetialsReducer = createReducer(
  initialState,
  on(InvoiceListDetailsInitialvalues,(_state)=>({..._state,invoicelist:null,doc_refid:""})),
  on(getInvoiceListDetails,(_state,{doc_refid})=>({..._state,doc_refid:doc_refid,loading:true})),
  on(getInvoiceListDetailsSuccess,(_state,{invoices})=>({..._state,invoicelist : invoices,loading:false}))
  // on(getInvoiceListDetailsSuccess, (state,action) => 
  // {
  //   return{
  //       ...action.invoices
  //   }

  // }
  // ),

 
);

export function invoiceListDetailsReducer(state:any, action:any) {
  return _invoicelistdetialsReducer(state, action);
}