import { createAction,props } from '@ngrx/store';
// import { InvoiceListHistory } from '../models/invoicelisthistory.model'; 

export const InvoiceListDetailsInitialvalues= createAction('[customerInvoiceListDetailsInitialvalues] Get InvoiceListDetails Initial values')

export const getInvoiceListDetails= createAction('[InvoiceListDetails] Get InvoiceListDetails',props<{doc_refid : string}>());

export const getInvoiceListDetailsSuccess=createAction('[InvoiceListDetails] Get InvoiceListDetails Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{invoices: ReadonlyArray<any>}>()
);

