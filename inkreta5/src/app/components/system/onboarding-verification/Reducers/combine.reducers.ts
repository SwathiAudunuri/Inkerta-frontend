import { combineReducers } from "@ngrx/store";
import { getDocumentReducer } from "./GetDocument.reducers";
import { GetPartnerDetailsReducer } from "./GetPartnerDetails.reducers";
import { GetPartnersReducer } from "./GetPartners.reducers";
import { SetStatusReducer } from "./SetStatus.reducers";

export const onboardverificationreducers = combineReducers({
    getpartners : GetPartnersReducer,
    partnerdetails : GetPartnerDetailsReducer,
    getdoc : getDocumentReducer,
    setstatus : SetStatusReducer
})