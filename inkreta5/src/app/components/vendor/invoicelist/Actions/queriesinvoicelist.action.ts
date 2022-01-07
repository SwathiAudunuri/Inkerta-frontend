import { createAction,props } from '@ngrx/store';

export const getvendorQueriesInvoiceListInitialvalues= createAction('[vendorQueriesInvoiceList] Get Queries InvoiceList Initialvalues');

export const getvendorQueriesInvoiceList= createAction('[vendorQueriesInvoiceList] Get vendor Queries InvoiceList',props<{url : string}>());

export const getvendorQueriesInvoiceListSuccess=createAction('[vendorQueriesInvoiceList] Get vendor Queries InvoiceList Success',
props<{invoices: ReadonlyArray<any>}>()
);

