import { createAction,props } from '@ngrx/store';


export const AddSuppliernull = createAction('[Add Supplier] Add Supplier to null') 

export const AddSupplier= createAction('[Add Supplier]  Add Supplier',props<{url:any,data:any}>());

export const AddSupplierSucess=createAction('[Add Supplier] Add Supplier Success',
props<{result: any}>()
);