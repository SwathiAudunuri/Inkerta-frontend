import { combineReducers } from "@ngrx/store";
import { CommentsReducer } from "./comments.reducer";
import { customerExceptioninvoiceListReducer } from "./Exceptioninvoicelist.reducer";
import { ExecuteActionReducer } from "./ExcuteAction.reducers";
import { customerExternalinvoicelistdetialsReducer } from "./externalinvoicelistdetails.reducers";
import { custpostExternalInvoiceData } from "./externalInvoiceUpload.reducers";
import { FetchforInvoiceReducer } from "./fetchforinvoice.reducer";
import { ForwardReducer } from "./Forward.reducer";
import { getUsersForwardReducer } from "./GetUsersForForward.reducer";
import { customerinvoiceListReducer } from "./invoicelist.reducers";
import { customerinvoiceattachmentReducer } from "./invoicelistAttachments.reducer";
import { customerattachmentsupportingReducer } from "./invoicelistAttachmentssupportingdoc.reducer";
import { customerinvoiceListDetailsReducer } from "./invoicelistdetails.reducer";
import { customerinvoiceListDetailsPdfReducer } from "./invoicelistdetailsPdf.reducer";
import { customerinvoiceListHistoryReducer } from "./invoicelisthistory.reducers";
import { customerinvoiceListQrCodeReducer } from "./invoicelistQrcode.reducer";
import { customerMyinboxReducer } from "./Myinbox.reducer";
import { customerpaidinvoiceListReducer } from "./paidinvoicelist.action";
import { PaidRecordsReducer } from "./paidRecord.reducers";
import { CustgetPatnerReducer } from "./patnerdetails.reducers";
import { ERPReducer } from "./postERP.reducers";
import { PostUpdateStatusReducer } from "./postUpdateStatus.reducers";
import { CustQueriedReducer } from "./querieslist.reducer";
import { customerqueryListReducer } from "./querylist.reducers";
import { SendReminderReducer } from "./sendreminder.reducer";
import { TrackerReducer } from "./tracker.reducer";
import { customerupdateStatusReducer } from "./updatestatus.reducers";
import {getTemplateNamesReducer} from './GetTemplateNames.reducers'
import { getTemplateDetailsReducer } from "./GetTemplateDetails.reducers";
export const custinvoicelistreducers = combineReducers({

    comments:CommentsReducer,
    customerExceptions:customerExceptioninvoiceListReducer,
    executeaction:ExecuteActionReducer,
    custexternalinvoicedetails:customerExternalinvoicelistdetialsReducer,
    custuploadexternalinvoice : custpostExternalInvoiceData,
    fetchforinvoice:FetchforInvoiceReducer,
    forward:ForwardReducer,
    usersforforward:getUsersForwardReducer,
    customerinvoicelist:customerinvoiceListReducer,
    customerAttachments:customerinvoiceattachmentReducer,
    customerAttachmentsSupporting:customerattachmentsupportingReducer,
    customerinvoicedetails:customerinvoiceListDetailsReducer,
    customerinvoicepdf:customerinvoiceListDetailsPdfReducer,
    customerinvoicelisthistory:customerinvoiceListHistoryReducer,
    customerqrcode:customerinvoiceListQrCodeReducer,
    myinbox:customerMyinboxReducer,
    customerpaidinvoicelist:customerpaidinvoiceListReducer,
    custpatnerdetails:CustgetPatnerReducer,
    erp:ERPReducer,
    Queried:CustQueriedReducer,
    querylist1:customerqueryListReducer,
    sendreminder:SendReminderReducer,
    tracker:TrackerReducer,
    updatestatus:customerupdateStatusReducer,
    postupdatestatus:PostUpdateStatusReducer,
    paidrecords : PaidRecordsReducer,
    templatenames : getTemplateNamesReducer,
    templatedetails:getTemplateDetailsReducer
});