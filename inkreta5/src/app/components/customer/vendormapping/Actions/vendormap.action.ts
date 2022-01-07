import { createAction, props } from "@ngrx/store";
import { VendorDetail, VendorMap } from "../Models/vendormap.model";


export const getVendorList = createAction(
    '[VendorList ] get vendorlist'
)

export const getVendorListSuccess = createAction(
    '[VendorList ] get vendorList Success',
    (suppliers: ReadonlyArray<VendorMap>)=>({suppliers})
);

export const addVendorList = createAction(
    '[VendorList] add vendorList',
    props<{suppliers : VendorMap}>()
)

export const addVendorListSuccess = createAction(
    '[VendorList] add vendorList Success'  ,
    props<{suppliers : VendorMap}>()
)
export const getVendorDetailsList = createAction(
    '[GetVendorDetailsList] get vendordetailslist '
)
export const getVendorDetailsListSuccess = createAction(
    '[GetVendorDetailsList] get vendordetailslist Success ',
    (supplierDetail: ReadonlyArray<VendorDetail>)=>({supplierDetail})
)
export const updateVendorList = createAction(
    '[VendorList] update vendorlist',
    props<{suppliers : VendorMap}>()
)

export const updateVendorListSucess = createAction(
    '[VendorList] update vendorlist Sucess',
    props<{suppliers : VendorMap}>()
)

export const deleteVendor = createAction(
    '[VendorList] delete vendorList',
    props<{suppliers :VendorMap}>()
)

export const deleteVendorSuccess = createAction(
    '[VendorList] delete vendorList Success',
    props<{suppliers : VendorMap}>()
)

export const statusinactiveVendor = createAction(
    '[VendorList] status Inactive Vendorlist',
    props<{suppliers : VendorMap}>()
)
export const statusinactiveVendorSuccess = createAction(
    '[VendorList] status Inactive Vendorlist Success',
    props<{suppliers : VendorMap}>()
)

export const statusactiveVendor = createAction(
    '[VendorList] status active Vendorlist',
    props<{suppliers : VendorMap}>()
)
export const statusactiveVendorSuccess = createAction(
    '[VendorList] status active Vendorlist Success',
    props<{suppliers : VendorMap}>()
)