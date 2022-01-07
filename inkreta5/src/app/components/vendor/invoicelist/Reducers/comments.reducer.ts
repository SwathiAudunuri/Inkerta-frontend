import { createReducer, on } from '@ngrx/store';
import { addvendorcomments, addsuccessvendorcomments, vendorcomments, vendorcommentsSuccess, vendorcommentsnull, vendorcommentsKeys, vendorcommentsKeysSuccess } from '../Actions/comments.action';

const initialState:any = {
  result : [],
  data:[],
  postresult:[],
  url:"",
  loading : false,
  posturl:"",
  keyurl:"",
  keys:[]

}
// const initialState :ReadonlyArray<any>=[]
const _CommentsReducer = createReducer(
  initialState,
 // on(vendorcomments,(_state,action)=>({...action,loading:false})),
//  on(addvendorcomments,(_state,data)=>({..._state,data:data})),
  // on(vendorcommentsSuccess,(_state,action)=>({...action.res,loading:false})),
  // on(addsuccessvendorcomments,(_state,action)=>({...action.res,loading:false}))
  // on(vendorcomments,(_state,doc_refid)),
  on(vendorcommentsnull,(_state)=>({..._state,result : null,keyurl:null,keys:null,data:null,postresult:null,url:"",posturl:""})),

  on(vendorcomments,(_state,value)=>({..._state,url:value.url,postresult:null,data:null,loading:true})),
  on(vendorcommentsSuccess,(_state,res)=>({..._state,result:res,postresult:null,data:null,loading:false})),
  on(addvendorcomments,(_state,data)=>({..._state,data:data.data,posturl:data.url,loading:true})),
  on(addsuccessvendorcomments,(_state,res)=>({..._state,postresult:res,loading:false})),

  on(vendorcommentsKeys,(_state,url)=>({..._state,keyurl:url,keys:null,loading:true})),
  on(vendorcommentsKeysSuccess,(_state,res)=>({..._state,keys:res,loading:false}))

  );

export function vendorCommentsReducer(state:any, action:any) {
  return _CommentsReducer(state, action);
}