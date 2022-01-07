import { createReducer, on } from "@ngrx/store"
import { getCustomerinvoiceAttachments, getCustomerinvoiceAttachmentsnull, getCustomerinvoiceAttachmentsSuccess } from "../Actions/invoicelistAttachments.action"





// const initialState :ReadonlyArray<any>=[]
const initialState : any = {
    attachments : [],
    url:"",
    loading:false
}
const _attachmentreducer = createReducer(
    initialState,
    on(getCustomerinvoiceAttachmentsnull,(_state)=>({..._state,attachments : null,url:null})),
    on(getCustomerinvoiceAttachments,(_state,{url})=>({..._state,url:url,loading:true})),
    on(getCustomerinvoiceAttachmentsSuccess,(_state,{data})=>({..._state,attachments : data,loading:false}))
    // on(getCustomerinvoiceAttachmentsSuccess,(state,action)=>{
    //     return {
    //         ...action.data
    //     }
    // }),
);

export function customerinvoiceattachmentReducer(state:any,action:any){
    return _attachmentreducer(state,action)
}