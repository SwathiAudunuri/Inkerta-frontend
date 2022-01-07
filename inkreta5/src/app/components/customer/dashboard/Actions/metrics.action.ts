import { createAction,props } from '@ngrx/store';


export const nullMetrics=createAction('null metrics customer')

export const getMetrics= createAction('[get Metrics] Get Metrics');

export const getMetricsSuccess=createAction('[get Metrics Success] Get Metrics Success',
props<{result: any}>()
);