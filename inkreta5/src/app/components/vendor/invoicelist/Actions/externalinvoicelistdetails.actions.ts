import { createAction,props } from '@ngrx/store';


export const ExternalInvoiceDetailsInitialvalues= createAction('[ ExternalInvoiceListDetailsInitialvalues] Get External InvoiceListDetails Initial values')

export const ExternalInvoiceDetails= createAction('[ExternalInvoiceListDetails] Get ExternalExternal InvoiceListDetails',props<{doc_refid : string}>());

export const ExternalInvoiceDetailsSuccess=createAction('[ExternalInvoiceListDetails] Get External InvoiceListDetails Success',
props<{invoices: ReadonlyArray<any>}>()
);

