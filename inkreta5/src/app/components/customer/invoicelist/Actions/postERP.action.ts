import { createAction,props } from '@ngrx/store';


export const getERPDatanull = createAction('[getERPData] get ERP Data value to null') 

export const getERPData= createAction('[getERPData] Get ERP Data',props<{doc_refid : string,data:any}>());

export const getERPDataSucess=createAction('[getERPData] Get ERP Data Success',
props<{result: any}>()
);