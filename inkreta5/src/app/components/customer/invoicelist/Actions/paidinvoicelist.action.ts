import { createAction,props } from '@ngrx/store';

export const getcusPaidInvoiceListInitialvalues= createAction('[customerPaidInvoiceList] Get Paid InvoiceList Initialvalues');

export const getcustomerPaidInvoiceList= createAction('[customerPaidInvoiceList] Get Paid InvoiceList',props<{url : string}>());

export const getcustomerPaidInvoiceListSuccess=createAction('[customerPaidInvoiceList] Get Paid InvoiceList Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{invoices: any}>()
);

