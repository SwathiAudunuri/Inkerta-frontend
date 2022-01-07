import { createReducer, on } from '@ngrx/store';
import { getcustomerInvoiceListQrCode, getcustomerInvoiceListQrCodenull, getcustomerInvoiceListQrCodeSuccess } from '../Actions/invoicelistQrcode.actions';


// const initialState :ReadonlyArray<any>=[]
const initialState :any = {
  qrcode : [],
  doc_refid:"",
  loading : false

}
const _invoicelistQrcodeReducer = createReducer(
  initialState,
  on(getcustomerInvoiceListQrCodenull,(_state)=>({..._state,qrcode : null,doc_refid:null})),
  on(getcustomerInvoiceListQrCode,(_state,{doc_refid})=>({..._state,qrcode:null,doc_refid:doc_refid,loading:true})),
  on(getcustomerInvoiceListQrCodeSuccess,(_state,{qrcode})=>({..._state,qrcode : qrcode,loading:false}))
  // on(getcustomerInvoiceListQrCodeSuccess, (state,action) => 
  // {
  //   return{
  //       ...action.invoices
  //   }

  // }
  // ),

 
);

export function customerinvoiceListQrCodeReducer(state:any, action:any) {
  return _invoicelistQrcodeReducer(state, action);
}