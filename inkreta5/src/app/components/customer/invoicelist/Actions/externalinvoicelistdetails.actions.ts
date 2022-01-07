import { createAction,props } from '@ngrx/store';


export const ExternalInvoiceDetailsInitialvalues= createAction('[customer ExternalInvoiceListDetailsInitialvalues]customer Get External InvoiceListDetails Initial values')

export const ExternalInvoiceDetails= createAction('[customer ExternalInvoiceListDetails]customer Get ExternalExternal InvoiceListDetails',props<{doc_refid : string}>());

export const ExternalInvoiceDetailsSuccess=createAction('[customer ExternalInvoiceListDetails]customer Get External InvoiceListDetails Success',
props<{invoices: ReadonlyArray<any>}>()
);

