import { createReducer, on } from '@ngrx/store';
import { SupplierList, SupplierListInitialValue, SupplierListSuccess } from '../Actions/SupplierList.actions';

const initialState:any = {
    suppliers:null,
  loading:false
}
const _SuppliListReducer = createReducer(
  initialState,
  on(SupplierListInitialValue,(_state)=>({..._state,suppliers:null})),
  on(SupplierList,(_state)=>({..._state,loading:true})),
  on(SupplierListSuccess,(_state,suppliers)=>({..._state,suppliers:suppliers.suppliers,loading:false}))

);

export function SuppliListReducer(state:any, action:any) {
  return _SuppliListReducer(state, action);
}