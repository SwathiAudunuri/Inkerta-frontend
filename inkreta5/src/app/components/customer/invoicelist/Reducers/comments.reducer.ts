import { createReducer, on } from '@ngrx/store';
import { addcustomercomments, addsuccesscustomercomments, customercomments, customercommentsKeys, customercommentsKeysSuccess, customercommentsnull, customercommentsSuccess } from '../Actions/comments.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  url:"",
  loading : false,
  saveurl:"",
  keyurl:"",
  keys:[]

}
// const initialState :ReadonlyArray<any>=[]
const _CommentsReducer = createReducer(
  initialState,
 // on(customercomments,(_state,action)=>({...action,loading:false})),
//  on(addcustomercomments,(_state,data)=>({..._state,data:data})),
  // on(customercommentsSuccess,(_state,action)=>({...action.res,loading:false})),
  // on(addsuccesscustomercomments,(_state,action)=>({...action.res,loading:false}))
  // on(customercomments,(_state,doc_refid)),
  on(customercommentsnull,(_state)=>({..._state,url:"",result:null,saveurl:"",keyurl:null,keys:null,loading:false})),
  on(customercomments,(_state,value)=>({..._state,url:value.url,postresult:null,data:null,loading:true})),
  on(customercommentsSuccess,(_state,res)=>({..._state,result:res,postresult:null,data:null,loading:false})),
  on(addcustomercomments,(_state,data)=>({..._state,saveurl:data.url,data:data.data,loading:true})),
  on(addsuccesscustomercomments,(_state,res)=>({..._state,postresult:res,loading:false})),

  on(customercommentsKeys,(_state,url)=>({..._state,keyurl:url,keys:null,loading:true})),
  on(customercommentsKeysSuccess,(_state,res)=>({..._state,keys:res,loading:false}))
);

export function CommentsReducer(state:any, action:any) {
  return _CommentsReducer(state, action);
}