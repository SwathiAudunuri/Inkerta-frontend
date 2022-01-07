import { createReducer, on } from '@ngrx/store';

import {getDocumentInitialvalues,getDocument,getDocumentSuccess} from '../Actions/GetDocument.action'
// const initialState :ReadonlyArray<any>=[]
const initialState:any={
    doc:[],
  loading:false
}
const _getDocumentReducer = createReducer(
  initialState,
  on(getDocumentInitialvalues,(_state)=>({..._state,doc:null})),
  on(getDocument,(_state)=>({..._state,doc:null,loading:true})),
  on(getDocumentSuccess,(_state,doc)=>({..._state,doc:doc.doc,loading:false}))
);

export function getDocumentReducer(state:any, action:any) {
  return _getDocumentReducer(state, action);
}