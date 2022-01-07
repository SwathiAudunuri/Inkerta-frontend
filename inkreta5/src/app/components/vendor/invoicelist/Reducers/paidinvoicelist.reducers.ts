import { createReducer, on } from '@ngrx/store';
import { getvendorPaidInvoiceList ,getvendorPaidInvoiceListInitialvalues,getvendorPaidInvoiceListSuccess } from '../Actions/paidinvoicelist.action';


const initialState:any={
  paid:[],
  loading:false
}
const _paidinvoicelistReducer = createReducer(
  initialState,
  on(getvendorPaidInvoiceListInitialvalues,(_state)=>({..._state,paid:null})),
  on(getvendorPaidInvoiceList,(_state,invoices)=>({..._state,loading:true})),
  on(getvendorPaidInvoiceListSuccess,(_state,invoices)=>({..._state,paid:invoices,loading:false}))
  // on(getvendorPaidInvoiceListSuccess, (state,action) => 
  // {
  // return{
  //   ...action.invoices
  // }

  // }
  // ),

 
);

export function vendorpaidinvoiceListReducer(state:any, action:any) {
  return _paidinvoicelistReducer(state, action);
}