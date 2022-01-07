import { createAction,props } from '@ngrx/store';

export const SupplierListInitialValue= createAction('[Supplier List Initial Value] Supplier List Initial Value');

export const SupplierList= createAction('[Supplier List',props<{url : string}>());

export const SupplierListSuccess=createAction('[Supplier List]  Success',props<{suppliers: any}>());

