import { createReducer, on } from '@ngrx/store';
import { getcusPaidInvoiceListInitialvalues, getcustomerPaidInvoiceList ,getcustomerPaidInvoiceListSuccess } from '../Actions/paidinvoicelist.action';


// const initialState :ReadonlyArray<any>=[]
const initialState:any={
  paid:[],
  loading:false
}
const _paidinvoicelistReducer = createReducer(
  initialState,
  on(getcusPaidInvoiceListInitialvalues,(_state)=>({..._state,paid:null})),
  on(getcustomerPaidInvoiceList,(_state,invoices)=>({..._state,loading:true})),
  on(getcustomerPaidInvoiceListSuccess,(_state,invoices)=>({..._state,paid:invoices,loading:false}))
  // on(getcustomerPaidInvoiceListSuccess, (state,action) => 
  // {
  // return{
  //   ...action.invoices
  // }

  // }
  // ),

 
);

export function customerpaidinvoiceListReducer(state:any, action:any) {
  return _paidinvoicelistReducer(state, action);
}