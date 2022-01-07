import { createReducer, on } from '@ngrx/store';
//import { loginComplete ,logout} from "../actions/login.action";
import {InvoiceList  } from '../models/invoicelist.model';
import { Action } from "rxjs/internal/scheduler/Action";
import { getcustomerInvoiceList, getcustomerInvoiceListInitialValue, getcustomerInvoiceListSuccess } from '../Actions/invoicelist.action';


// export interface InvoiceListState{
//   customerinvoicelist:ReadonlyArray<InvoiceList>
// }
// const initialState :ReadonlyArray<InvoiceList>=[]
const initialState:any = {
  unpaid : [],
  loading:false
}
const _invoicelistReducer = createReducer(
  initialState,
  on(getcustomerInvoiceListInitialValue,(_state)=>({..._state,unpaid:null})),
  on(getcustomerInvoiceList,(_state)=>({..._state,loading:true})),
  on(getcustomerInvoiceListSuccess,(_state,invoices)=>({..._state,unpaid:invoices,loading:false}))
  // on(getcustomerInvoiceListSuccess, (state,action) => 
  // {
  //   // //console.log("in reducer")
  //   // //console.log(action.invoices)
  // return{
  //   ...action.invoices
  // }

  // }
  // ),

 
);

export function customerinvoiceListReducer(state:any, action:any) {
  return _invoicelistReducer(state, action);
}