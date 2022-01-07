import { createReducer, on } from "@ngrx/store";
import { addCommListSucess, changeCommListStatusInActiveSucess, deleteCommSuccess, getComListIdSuccess, getCommlistSucess, updateCommListSucess } from "../Action/Communication.action";
// import { initialState } from "../communication.state";
import { Communication } from "../Model/Communication.model"

export interface CommunicationState{
    communications :ReadonlyArray<Communication>
    communicationid :ReadonlyArray<Communication>
}

const initialState:ReadonlyArray<Communication> = [];
const initialState1 :ReadonlyArray<Communication> = [];
const _communicationListReducer = createReducer(
    initialState,
    on(getCommlistSucess ,(state,action)=>{ return {
        ...state,
            ...action.communications
            // ...state,
            // communications: action.communications
        }
    }),

    on(addCommListSucess,(state,action)=>{
        return{
            ...state,
            ...action.communications
        }
    }),
    on(updateCommListSucess,(state,action)=>{
        return {
            ...state,
            ...action.communications
        }
    }),
    on(changeCommListStatusInActiveSucess,(state,action)=>{
        return {
            ...state,
            ...action.communications
        }
    }),
    on(deleteCommSuccess,(state,action)=>{
        return {
            ...state,
            ...action.communications
        }
    })
     
    //  on(getCommlistSucess,(state,action)=>[...action.communications])
    // on(getCommlistSucess,(state,action)=>{
    //     //console.log("comm reducer")
    //     // //console.log(...action.communications)
    //     return{
    //         ...state,
    //             ...action.communications
    //         // communication: action.communication
    //     }
    // })
)




 
export function  communicationListReducer (state:any,action:any){
return _communicationListReducer(state,action)
}

const _communicationListByidReducer=createReducer(
    initialState1,
    on(getComListIdSuccess ,(state,action)=>{ return {
        ...state,
            ...action.communicationid 
        }
    }),
)
export function communicationListByidReducer(state:any,action:any){
    return _communicationListByidReducer(state,action)
}