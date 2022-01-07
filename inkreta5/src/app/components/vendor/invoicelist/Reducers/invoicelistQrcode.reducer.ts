import { createReducer, on } from '@ngrx/store';
import { getvendorInvoiceListQrCode, getvendorInvoiceListQrCodenull, getvendorInvoiceListQrCodeSucess } from '../Actions/invoicelistQrcode.actions';

const initialState:any = {
  qrcode : [],
  doc_refid:"",
  loading : false

}
// const initialState :ReadonlyArray<any>=[]
const _invoicelistQrcodeReducer = createReducer(
  initialState,
  on(getvendorInvoiceListQrCodenull,(_state)=>({..._state,qrcode :null,doc_refid:null,loading : false})),
  on(getvendorInvoiceListQrCode,(_state,{doc_refid})=>({..._state,doc_refid:doc_refid,loading:true})),
  on(getvendorInvoiceListQrCodeSucess,(_state,{qrcode})=>({..._state,qrcode : qrcode,loading:false}))
  // on(getvendorInvoiceListQrCodeSucess, (state,action) => 
  // {
  //   return{
  //       ...action.invoices
  //   }

  // }
  // ),

 
);

export function vendorinvoiceListQrCodeReducer(state:any, action:any) {
  return _invoicelistQrcodeReducer(state, action);
}