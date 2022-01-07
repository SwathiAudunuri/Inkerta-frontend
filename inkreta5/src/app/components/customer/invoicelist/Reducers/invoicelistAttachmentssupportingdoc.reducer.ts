import { createReducer, on } from "@ngrx/store"
import { getSupportingDocument, getSupportingDocumentnull, getSupportingDocumentSuccess } from "../Actions/invoicelistAttachmentssupportingdoc.action";


const initialState:any = {
    supportattachments : [],
    url:"",
    loading:false
}
// const initialState :ReadonlyArray<any>=[]
const _supportingdocreducer = createReducer(
    initialState,
    on(getSupportingDocumentnull,(_state)=>({..._state,supportattachments : null,url:null})),
    on(getSupportingDocument,(_state,{url})=>({..._state,url:url,loading:true})),
    on(getSupportingDocumentSuccess,(_state,{data})=>({..._state,supportattachments : data,loading:false}))
    // on(getSupportingDocumentSuccess,(state,action)=>{
    //     return {
    //         ...action.data
    //     }
    // }),
);

export function customerattachmentsupportingReducer(state:any,action:any){
    return _supportingdocreducer(state,action)
}