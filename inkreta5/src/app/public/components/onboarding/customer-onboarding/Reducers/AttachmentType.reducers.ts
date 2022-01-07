import { createReducer, on } from '@ngrx/store';
import { AttachmentType, AttachmentTypeSucess,AttachmentTypeInitialValues } from "../Actions/AttachmentType.actions";
const initialState:any = {
    results : [],
    loading : false
}

const _AttachmentTypeReducer = createReducer(
    initialState,
    on(AttachmentTypeInitialValues,(_state)=>({..._state,results:null})),
    on(AttachmentType,(_state)=>({..._state,results:null,loading:true})),
    on(AttachmentTypeSucess,(_state,result)=>({..._state,results:result.result,loading:false}))
);

export function AttachmentTypeReducer(state:any, action:any) {
  return _AttachmentTypeReducer(state, action);
}