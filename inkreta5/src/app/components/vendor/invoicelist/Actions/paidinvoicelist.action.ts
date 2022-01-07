import { createAction,props } from '@ngrx/store';

export const getvendorPaidInvoiceListInitialvalues= createAction('[vendorPaidInvoiceList] Get Paid InvoiceList Initialvalues');

export const getvendorPaidInvoiceList= createAction('[vendorPaidInvoiceList] Get vendor Paid InvoiceList',props<{url : string}>());

export const getvendorPaidInvoiceListSuccess=createAction('[vendorPaidInvoiceList] Get vendor Paid InvoiceList Success',
props<{invoices: ReadonlyArray<any>}>()
);

