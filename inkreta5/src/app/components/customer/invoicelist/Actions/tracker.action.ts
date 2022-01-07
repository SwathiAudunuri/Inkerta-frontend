import { createAction,props } from '@ngrx/store';

export const TrackerInitialValues= createAction('[TrackerInitialValues] Tracker Initial Values');

export const getTracker= createAction('[Tracker] Tracker',props<{doc_ref_id : string}>());

export const getTrackerSuccess=createAction('[Tracker] Tracker Success',
props<{data: any}>()
);

