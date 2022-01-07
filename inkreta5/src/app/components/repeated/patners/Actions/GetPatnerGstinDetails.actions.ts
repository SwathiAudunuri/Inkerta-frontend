import { createAction,props } from '@ngrx/store';

export const GetPatnerGstinDetailsInitialValue= createAction('[Get Patner Gstin Details Initial Value] Get Patner Gstin Details Initial Value');

export const GetPatnerGstinDetails= createAction('[Get Patner Gstin Details] Get Patner Gstin Details',props<{url : string}>());

export const GetPatnerGstinDetailsSuccess=createAction('[Get Patner Gstin Details]Get Patner Gstin Details Success',props<{data: any}>());

