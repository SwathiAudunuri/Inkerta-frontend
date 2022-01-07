import { combineReducers } from "@ngrx/store";
import { AddSupplierReducer } from "./Add_Supplier.reducers";
import { SelectListReducer } from "./SelectList.reducers";
import { SuppliListReducer } from "./SupplierList.effects";

export const SupplierReducers = combineReducers({
    supplierlist : SuppliListReducer,
    selectlist : SelectListReducer,
    addsupplier : AddSupplierReducer
})