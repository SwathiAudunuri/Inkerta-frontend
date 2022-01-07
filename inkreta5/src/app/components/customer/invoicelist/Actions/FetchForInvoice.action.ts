import { createAction,props } from '@ngrx/store';


export const fetchforinvoicenull=createAction('fetch for invoice customer null')
export const fetchforinvoice=createAction('fetch for invoice customer',props<{doc_refid: string}>())
export const fetchforinvoiceSuccess= createAction('fetch for invoice Success customer',
props<{res:any}>()
);


