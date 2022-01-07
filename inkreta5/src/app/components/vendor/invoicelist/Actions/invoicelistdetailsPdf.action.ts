import { createAction,props } from '@ngrx/store';

export const InvoiceListDetailsPdfInitialvalues= createAction('[VendorInvoiceListDetailsPdf] Vendor InvoiceListDetails Pdf value to null');

export const getvendorInvoiceListDetailsPdf= createAction('[VendorInvoiceListDetailsPdf] Get Vendor InvoiceListDetails PDF',props<{url : any}>());

export const getvendorInvoiceListDetailsPdfSuccess=createAction('[VendorInvoiceListDetailsPdf] Get Vendor InvoiceListDetails PDF Success',
props<{data:any}>()
);