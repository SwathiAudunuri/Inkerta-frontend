import { createReducer, on } from '@ngrx/store';
import { AddSupplier, AddSuppliernull, AddSupplierSucess } from '../Actions/Add_Supplier.actions';

const initialState:any = {
  result : [],
  data:[],
  loading : false
}
// const initialState :ReadonlyArray<any>=[]
const _AddSupplierReducer = createReducer(
  initialState,
  on(AddSuppliernull,(_state)=>({..._state,result:null,data:null,loading:false})),
  on(AddSupplier,(_state,{data})=>({..._state,data:data,loading:true})),
  on(AddSupplierSucess,(_state,{result})=>({..._state,result : result,loading:false}))
);

export function AddSupplierReducer(state:any, action:any) {
  return _AddSupplierReducer(state, action);
}