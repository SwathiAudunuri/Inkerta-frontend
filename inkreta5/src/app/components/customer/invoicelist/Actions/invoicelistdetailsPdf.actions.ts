import { createAction,props } from '@ngrx/store';

export const getcustomerInvoiceListDetailsPdfnull= createAction('[customerInvoiceListDetailsPdfnull] Get InvoiceListDetails PDF null')

export const getcustomerInvoiceListDetailsPdf= createAction('[customerInvoiceListDetailsPdf] Get InvoiceListDetails PDF',props<{url : any}>());

export const getcustomerInvoiceListDetailsPdfSuccess=createAction('[customerInvoiceListDetailsPdf] Get InvoiceListDetails PDF Success',
props<{data: any}>()
);