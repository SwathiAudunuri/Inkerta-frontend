import { createReducer, on } from '@ngrx/store';
import { getcustomercustomroles, getcustomercustomrolesSuccess, nullcustomercustomroles } from "../Actions/customrole.action";


const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

// const initialState :ReadonlyArray<any>=[]
const _CustomrolesReducer = createReducer(
  initialState,
  on(nullcustomercustomroles,(_state,res)=>({..._state,result:null,loading:false})),

  on(getcustomercustomrolesSuccess,(_state,res)=>({..._state,result:res,loading:false})),
//  on(addsuccesscustomerCustomactions,(_state,res)=>({..._state,postresult:res,loading:false}))
);

export function CustomrolesReducer(state:any, action:any) {
  return _CustomrolesReducer(state, action);
}


