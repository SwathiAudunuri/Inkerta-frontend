import { createAction,props } from '@ngrx/store';


export const nullMetrics=createAction('null vendor metrics ')

export const getMetrics= createAction('[get Vendor Metrics] Get vendorMetrics');

export const getMetricsSuccess=createAction('[get Vendor Metrics Success] Get  Vendor Metrics Success',
props<{result: any}>()
);