import { createReducer, on } from '@ngrx/store';
import { ExternalInvoiceDetails, ExternalInvoiceDetailsInitialvalues, ExternalInvoiceDetailsSuccess } from '../Actions/externalinvoicelistdetails.actions';


export const initialState : any={
  invoicelist : [],
  doc_refid:"",
  loading : false
}
const _ExternalinvoicelistdetialsReducer = createReducer(
  initialState,
  on(ExternalInvoiceDetailsInitialvalues,(_state)=>({..._state,invoicelist:null,doc_refid:""})),
  on(ExternalInvoiceDetails,(_state,{doc_refid})=>({..._state,doc_refid:doc_refid,loading:true})),
  on(ExternalInvoiceDetailsSuccess,(_state,{invoices})=>({..._state,invoicelist : invoices,loading:false}))
 
);

export function customerExternalinvoicelistdetialsReducer(state:any, action:any) {
  return _ExternalinvoicelistdetialsReducer(state, action);
}