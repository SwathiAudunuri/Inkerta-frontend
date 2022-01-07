import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
import { InvoiceListHistory } from '../models/invoicelisthistory.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { custInvoiceListDetailsInitialvalues, getcustomerInvoiceListDetails, getcustomerInvoiceListDetailsSuccess } from '../Actions/invoicelistdetails.actions';



// const initialState :ReadonlyArray<InvoiceListDetailsState>=[]
export const initialState : any={
  invoicelist : null,
  doc_refid:"",
  loading : false
}

const _invoicelistdetialsReducer = createReducer(
  initialState,
  on(custInvoiceListDetailsInitialvalues,(_state)=>({..._state,invoicelist:null,doc_refid:""})),
  on(getcustomerInvoiceListDetails,(_state,{doc_refid})=>({..._state,invoicelist : null,doc_refid:doc_refid,loading:true})),
  on(getcustomerInvoiceListDetailsSuccess,(_state,{invoices})=>({..._state,invoicelist : invoices,loading:false}))
  // on(getcustomerInvoiceListDetailsSuccess, (state,action) => 
  // {
  //   return{
  //       ...action.invoices
  //   }

  // }
  // ),

 
);

export function customerinvoiceListDetailsReducer(state:any, action:any) {
  return _invoicelistdetialsReducer(state, action);
}