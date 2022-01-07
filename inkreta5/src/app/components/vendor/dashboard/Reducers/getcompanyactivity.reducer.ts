import { createReducer, on } from '@ngrx/store';
import { result } from 'lodash';
import { getcompanytableSuccess, nullcompanytable } from '../Actions/company.action';
import { getcompanyactivitiesSuccess, nullcompanyactivities } from '../Actions/companyactivities.action';
import { getcompanycontactdetailsSuccess, nullcompanycontactdetails } from '../Actions/companycontactdetails.action';
import { getcompanysummarySuccess, nullcompanysummary } from '../Actions/companysummary.action';
import { getMetrics, getMetricsSuccess, nullMetrics } from '../Actions/metrics.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  doc_refid:"",
  loading : false

}

const _getCompanyActivityReducer = createReducer(
    initialState,
    on(nullcompanyactivities,(_state,res)=>({..._state,result:null})),

    
    on(getcompanyactivitiesSuccess,(_state,result)=>({..._state,result:result.result,loading:false})),
  );
  
  export function getCompanyActivityReducer(state:any, action:any) {
    return _getCompanyActivityReducer(state, action);
  }