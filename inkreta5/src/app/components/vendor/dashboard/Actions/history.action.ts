import { createAction,props } from '@ngrx/store';


export const getvendorInvoiceListHistoryInitialValues= createAction('[vendorInvoiceListHistoryInitialValues] Get History Initial Values');

export const getvendorInvoiceListHistory= createAction('[vendorInvoiceListHistory] Get History',props<{url : any}>());

export const getvendorInvoiceListHistorySuccess=createAction('[vendorInvoiceListHistory] Get History Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{data: any}>()
);

