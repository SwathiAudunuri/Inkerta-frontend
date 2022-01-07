import { createReducer, on } from "@ngrx/store"
import { getvendorSupportingDocument, getvendorSupportingDocumentnull, getvendorSupportingDocumentSuccess } from "../Actions/invoicelistAttachmentssupportingdoc.action";


const initialState:any = {
    supportattachments : [],
    url:"",
    loading:false
}
// const initialState :ReadonlyArray<any>=[]
const _supportingdocreducer = createReducer(
    initialState,
    on(getvendorSupportingDocumentnull,(_state)=>({..._state,supportattachments : null,url:null,loading:false})),
    on(getvendorSupportingDocument,(_state,{url})=>({..._state,url:url,supportattachments : null,loading:true})),
    on(getvendorSupportingDocumentSuccess,(_state,{data})=>({..._state,supportattachments : data,loading:false}))
    // on(getSupportingDocumentSuccess,(state,action)=>{
    //     return {
    //         ...action.data
    //     }
    // }),
);

export function vendorattachmentsupportingReducer(state:any,action:any){
    return _supportingdocreducer(state,action)
}