import { createReducer, on } from '@ngrx/store';
import { getvendorPaidInvoiceList ,getvendorPaidInvoiceListInitialvalues,getvendorPaidInvoiceListSuccess } from '../Actions/paidinvoicelist.action';
import { getvendorQueriesInvoiceList, getvendorQueriesInvoiceListInitialvalues, getvendorQueriesInvoiceListSuccess } from '../Actions/queriesinvoicelist.action';


const initialState:any={
    Queries:[],
  loading:false
}
const _QueriesinvoicelistReducer = createReducer(
  initialState,
  on(getvendorQueriesInvoiceListInitialvalues,(_state)=>({..._state,Queries:null})),
  on(getvendorQueriesInvoiceList,(_state,invoices)=>({..._state,loading:true})),
  on(getvendorQueriesInvoiceListSuccess,(_state,invoices)=>({..._state,Queries:invoices,loading:false}))
 
 
);

export function vendorQueriesinvoiceListReducer(state:any, action:any) {
  return _QueriesinvoicelistReducer(state, action);
}