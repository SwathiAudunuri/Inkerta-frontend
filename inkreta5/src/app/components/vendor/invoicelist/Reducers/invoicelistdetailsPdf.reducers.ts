import { createReducer, on } from '@ngrx/store';
import { getvendorInvoiceListDetailsPdf, getvendorInvoiceListDetailsPdfSuccess, InvoiceListDetailsPdfInitialvalues } from '../Actions/invoicelistdetailsPdf.action';


// const initialState :ReadonlyArray<any>=[]
const initialState:any = {
  invoicepdf : [],
  utl : "",
  loading : false
}
const _invoicelistdetialspdfReducer = createReducer(
  initialState,
  on(InvoiceListDetailsPdfInitialvalues,(_state)=>({..._state,result:null,postdata:null})),
  on(getvendorInvoiceListDetailsPdf,(_state,{url})=>({..._state,url:url,loading:true})),
  on(getvendorInvoiceListDetailsPdfSuccess,(_state,{data})=>({..._state,invoicepdf : data,loading:false}))
  // on(getvendorInvoiceListDetailsPdfSuccess, (state,action) => 
  // {
  //   return{
  //       ...action.data
  //   }

  // }
  // ),

 
);

export function vendorinvoiceListDetailsPdfReducer(state:any, action:any) {
  return _invoicelistdetialspdfReducer(state, action);
}