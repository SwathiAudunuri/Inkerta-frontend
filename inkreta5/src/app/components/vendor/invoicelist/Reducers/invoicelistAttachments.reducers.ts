import { createReducer, on } from "@ngrx/store"
import { getVendorinvoiceAttachments, getVendorinvoiceAttachmentsnull, getVendorinvoiceAttachmentsSuccess } from "../Actions/invoicelistAttachments.action"


const initialState:any = {
    attachments : [],
    url:"",
    loading:false
}
// const initialState :ReadonlyArray<any>=[]
const _attachmentreducer = createReducer(
    initialState,
    on(getVendorinvoiceAttachmentsnull,(_state)=>({..._state,attachments : null,url:null,loading:false})),
    on(getVendorinvoiceAttachments,(_state,{url})=>({..._state,url:url,loading:true})),
    on(getVendorinvoiceAttachmentsSuccess,(_state,{data})=>({..._state,attachments : data,loading:false}))

);

export function vendorinvoiceattachmentReducer(state:any,action:any){
    return _attachmentreducer(state,action)
}