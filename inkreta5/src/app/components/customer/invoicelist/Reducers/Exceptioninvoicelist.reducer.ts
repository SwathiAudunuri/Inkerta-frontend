import { createReducer, on } from '@ngrx/store';
import {InvoiceList  } from '../models/invoicelist.model';
import { getcustomerExceptionInvoiceList, getcustomerExceptionInvoiceListSuccess, getExceptionInvoiceListInitialValue } from '../Actions/Exceptioninvoicelist.action';


// const initialState :ReadonlyArray<InvoiceList>=[]
export const initialState : any={
  exceptions:[],
  loading:false
}
const _ExceptioninvoicelistReducer = createReducer(
  initialState,
  on(getExceptionInvoiceListInitialValue,(_state:any)=>({..._state,exceptions:null})),
  on(getcustomerExceptionInvoiceList,(_state,invoices)=>({..._state,loading:true})),
  on(getcustomerExceptionInvoiceListSuccess,(_state,invoices)=>({..._state,exceptions:invoices,loading:false}))
  // on(getcustomerExceptionInvoiceListSuccess, (state,action) => 
  // {
  //   // //console.log("in reducer")
  //   // //console.log(action.invoices)
  // return{
  //   ...action.invoices
  // }

  // }
  // ),

 
);

export function customerExceptioninvoiceListReducer(state:any, action:any) {
  return _ExceptioninvoicelistReducer(state, action);
}