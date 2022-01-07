import { createReducer, on } from '@ngrx/store';
import {InvoiceList  } from '../models/invoicelist.model';
import { getcustomerExceptionInvoiceList, getcustomerExceptionInvoiceListSuccess, getExceptionInvoiceListInitialValue } from '../Actions/Exceptioninvoicelist.action';
import { getqueriesInvoiceList, getqueriesInvoiceListSuccess, getqueriesListInitialValue } from '../Actions/querieslist.action';


// const initialState :ReadonlyArray<InvoiceList>=[]
export const initialState : any={
    Queried:[],
  loading:false
}
const _QueriedReducer = createReducer(
  initialState,
  on(getqueriesListInitialValue,(_state:any)=>({..._state,Queried:null})),
  on(getqueriesInvoiceList,(_state,invoices)=>({..._state,loading:true})),
  on(getqueriesInvoiceListSuccess,(_state,invoices)=>({..._state,Queried:invoices,loading:false}))
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

export function CustQueriedReducer(state:any, action:any) {
  return _QueriedReducer(state, action);
}