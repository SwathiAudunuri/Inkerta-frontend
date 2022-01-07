import { createAction,props } from '@ngrx/store';
import { InvoiceList } from '../models/invoicelist.model';

export const getcustomerMyinboxInitialValue= createAction('[customerMyinboxInitialValue] Get My Inbox Initial Value');

export const getcustomerMyinbox= createAction('[customerMyinboxInitialValue] Get My Inbox ',props<{url : string}>());

export const getcustomerMyinboxSuccess=createAction('[customerMyinboxInitialValue] Get My Inbox  Success',
//(queries:ReadonlyArray<QueryList>)=>({queries})
props<{myinbox: any}>()
);

