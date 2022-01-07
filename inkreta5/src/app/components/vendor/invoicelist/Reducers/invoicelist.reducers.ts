import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
import {InvoiceList  } from '../models/invoicelist.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getInvoiceListaction, getInvoiceListInitialValue, getInvoiceListSuccess } from '../Actions/invoicelist.action';


const initialState:any = {
  unpaid : [],
  loading:false
}
// const initialState :ReadonlyArray<InvoiceList>=[]
const _invoicelistReducer = createReducer(
  initialState,

  on(getInvoiceListInitialValue,(_state)=>({..._state,unpaid:null})),
  on(getInvoiceListaction,(_state)=>({..._state,loading:true})),
  on(getInvoiceListSuccess,(_state,invoices)=>({..._state,unpaid:invoices,loading:false}))
  // on(getInvoiceListSuccess, (state,action) => 
  // {
  //   //console.log("in reducer")
  //   //console.log(action.invoices)
  // return{
  //   ...action.invoices
  // }

  // }
  // ),

 
);

export function invoiceListReducer(state:any, action:any) {
  return _invoicelistReducer(state, action);
}