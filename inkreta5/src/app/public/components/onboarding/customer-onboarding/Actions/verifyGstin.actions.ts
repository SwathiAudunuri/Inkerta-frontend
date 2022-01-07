import { createAction,props } from '@ngrx/store';

export const VerifyGstInInitialvalue= createAction('[Verify GstIn1]  Verify GstIn Initial Value to null');

export const VerifyGstIn= createAction('[Verify GstIn1]  Verify GstIn',props<{url : string}>());

export const VerifyGstInSucess=createAction('[Verify GstIn1] Verify GstIn Success',
props<{result: any}>()
);