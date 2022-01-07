import { createReducer, on } from '@ngrx/store';
import { getcustomerInvoiceListDetailsPdf, getcustomerInvoiceListDetailsPdfnull, getcustomerInvoiceListDetailsPdfSuccess } from '../Actions/invoicelistdetailsPdf.actions';


// const initialState :ReadonlyArray<any>=[]
const initialState :any = {
  invoicepdf : [],
  url : "",
  loading : false
}
const _invoicelistdetialspdfReducer = createReducer(
  initialState,
  on(getcustomerInvoiceListDetailsPdfnull,(_state)=>({..._state,invoicepdf : null,url:null})),
  on(getcustomerInvoiceListDetailsPdf,(_state,{url})=>({..._state,invoicepdf : null,url:url,loading:true})),
  on(getcustomerInvoiceListDetailsPdfSuccess,(_state,{data})=>({..._state,invoicepdf : data,loading:false}))
  // on(getcustomerInvoiceListDetailsPdfSuccess, (state,action) => 
  // {
  //   return{
  //       ...action.data
  //   }

  // }
  // ),

 
);

export function customerinvoiceListDetailsPdfReducer(state:any, action:any) {
  return _invoicelistdetialspdfReducer(state, action);
}