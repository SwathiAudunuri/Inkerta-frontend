import { createAction,props } from '@ngrx/store';
// import { InvoiceListHistory } from '../models/invoicelisthistory.model'; 

export const custInvoiceListDetailsInitialvalues= createAction('[customerInvoiceListDetailsInitialvalues] Get InvoiceListDetails Initial values')

export const getcustomerInvoiceListDetails= createAction('[customerInvoiceListDetails] Get InvoiceListDetails',
props<{doc_refid : string}>());

export const getcustomerInvoiceListDetailsSuccess=createAction('[customerInvoiceListDetails] Get InvoiceListDetails Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{invoices: ReadonlyArray<any>}>()
);

