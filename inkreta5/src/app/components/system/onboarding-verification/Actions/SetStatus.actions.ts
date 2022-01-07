import { createAction,props } from '@ngrx/store';

export const SetStatusInitialvalues= createAction('[SetStatus] SetStatus Initialvalues');

export const SetStatus= createAction('[SetStatus] SetStatus',props<{url : string}>());

export const SetStatusSuccess=createAction('[SetStatus] SetStatus Success',
props<{status: any}>()
);

