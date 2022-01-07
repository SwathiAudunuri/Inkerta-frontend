import { createReducer, on } from '@ngrx/store';
import { postInvoice, postInvoiceInitialvalues, postInvoiceSuccess } from '../Actions/invoiceUpload';


const initialState :any = {
  result : [],
  postdata : [],
  loading : false
}
// ,loading:true
const _postInvoiceData = createReducer(
  initialState,
  on(postInvoiceInitialvalues,(_state)=>({..._state,result:null,postdata:null})),
  on(postInvoice,(_state,{postdata})=>({..._state,postdata:postdata,loading:true})),
  on(postInvoiceSuccess,(_state,{data})=>({..._state,result : data,loading:false}))
);

export function postInvoiceData(state:any, action:any) {
  return _postInvoiceData(state, action);
}