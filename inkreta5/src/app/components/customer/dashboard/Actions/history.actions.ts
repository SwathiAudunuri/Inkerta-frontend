import { createAction,props } from '@ngrx/store';


export const getcustomerInvoiceListHistoryInitialValues= createAction('[customerInvoiceListHistoryInitialValues] Get History Initial Values');

export const getcustomerInvoiceListHistory= createAction('[customerInvoiceListHistory] Get History',props<{url : any}>());

export const getcustomerInvoiceListHistorySuccess=createAction('[customerInvoiceListHistory] Get History Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{data: any}>()
);

