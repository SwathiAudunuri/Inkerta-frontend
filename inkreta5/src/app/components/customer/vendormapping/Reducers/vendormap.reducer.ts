import { createReducer, on } from "@ngrx/store";
import { addVendorListSuccess, deleteVendorSuccess, getVendorDetailsListSuccess, getVendorListSuccess, statusactiveVendorSuccess, statusinactiveVendorSuccess, updateVendorListSucess } from "../Actions/vendormap.action";
import { VendorDetail, VendorMap } from "../Models/vendormap.model";

export interface VendorState{
    suppliers : ReadonlyArray<VendorMap>
}

export interface VendorDetailState{
    supplierDetail : ReadonlyArray<VendorDetail>
}

const initialState:ReadonlyArray<VendorMap>=[];
const initialState1 :ReadonlyArray<VendorDetail>=[];

const _vendorListReducer = createReducer(
    initialState,
    on(getVendorListSuccess,(state,action)=>{
        return {
            ...state,
            ...action.suppliers
        }
    }),
    on(addVendorListSuccess,(state,action)=>{
        return{
            ...state,
            ...action.suppliers
        }
    }),
    on(updateVendorListSucess,(state,action)=>{
        return{
            ...state,
            ...action.suppliers
        }
    }),
    on(deleteVendorSuccess,(state,action)=>{
        return {
            ...state,
            ...action.suppliers
        }
    }),
    on(statusactiveVendorSuccess,(state,action)=>{
        return {
            ...state,
            ...action.suppliers
        }
    }),
    on(statusinactiveVendorSuccess,(state,action)=>{
        return {
            ...state,
            ...action.suppliers
        }
    })
)

const _vendorDetailListReducer = createReducer(
    initialState1,
    on(getVendorDetailsListSuccess,(state,action)=>{
        return{
            ...state,
            ...action.supplierDetail
        }
    })
)

export function vendorListReducer(state:any,action:any){
    return _vendorListReducer(state,action)
}
export function  vendorDetailListReducer(state:any,action:any){
    return _vendorDetailListReducer(state,action)
}