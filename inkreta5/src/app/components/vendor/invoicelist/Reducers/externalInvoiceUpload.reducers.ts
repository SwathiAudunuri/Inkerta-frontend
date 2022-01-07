import { createReducer, on } from '@ngrx/store';
import { postExternalInvoice, postExternalInvoiceInitialvalues, postExternalInvoiceSuccess } from '../Actions/externalInvoiceUpload.actions';


const initialState :any = {
  result : [],
  postdata : [],
  loading : false
}
// ,loading:true
const _postExternalInvoiceData = createReducer(
  initialState,
  on(postExternalInvoiceInitialvalues,(_state)=>({..._state,result:null,postdata:null})),
  on(postExternalInvoice,(_state,{postdata})=>({..._state,result:null,postdata:postdata,loading:true})),
  on(postExternalInvoiceSuccess,(_state,{data})=>({..._state,result : data,loading:false}))
);

export function postExternalInvoiceData(state:any, action:any) {
  return _postExternalInvoiceData(state, action);
}