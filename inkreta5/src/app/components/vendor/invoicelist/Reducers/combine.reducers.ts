import { combineReducers } from "@ngrx/store";
import { vendorCommentsReducer } from "./comments.reducer";
import { ExternalinvoicelistdetialsReducer } from "./externalinvoicelistdetails.reducers";
import { postExternalInvoiceData } from "./externalInvoiceUpload.reducers";
import { getTemplateDetailsReducer } from "./GetTemplateDetails.reducers";
import { getTemplateNamesReducer } from "./GetTemplateNames.reducers";
import { invoiceListReducer } from "./invoicelist.reducers";
import { vendorinvoiceattachmentReducer } from "./invoicelistAttachments.reducers";
import { vendorattachmentsupportingReducer } from "./invoicelistAttachmentssupportingdoc.reducer";
import { invoiceListDetailsReducer } from "./invoicelistdetails.reducer";
import { vendorinvoiceListDetailsPdfReducer } from './invoicelistdetailsPdf.reducers';
import { invoiceListHistoryReducer } from "./invoicelisthistory.reducers";
import { vendorinvoiceListQrCodeReducer } from "./invoicelistQrcode.reducer";
import { postInvoiceData } from "./invoiceUpload.reducers";
import { vendorpaidinvoiceListReducer } from "./paidinvoicelist.reducers";
import { PaidRecordsReducer } from "./paidRecord.reducers";
import { getPatnerReducer } from "./patnerdetails.reducers";
import { PostUpdateStatusReducer } from "./postUpdateStatus.reducers";
import { vendorQueriesinvoiceListReducer } from "./queriesinvoicelist.reducer";
import { queryListReducer } from "./querylist.reducers";
import { VenSendReminderReducer } from "./sendreminder.reducer";
import { updateStatusReducer } from "./updatestatus.reducers";
 

export const veninvoicelistreducers = combineReducers({

    // comments:CommentsReducer,
    vendorcomments:vendorCommentsReducer,
    externalinvoicedetails:ExternalinvoicelistdetialsReducer,
    uploadexternalinvoice : postExternalInvoiceData,
    invoicelist:invoiceListReducer,
    vendorAttachments:vendorinvoiceattachmentReducer,
    vendorAttachmentsSupporting:vendorattachmentsupportingReducer,
    invoicedetails:invoiceListDetailsReducer,
    vendorinvoicepdf:vendorinvoiceListDetailsPdfReducer,
    invoicelisthistory:invoiceListHistoryReducer,
    vendorqrcode:vendorinvoiceListQrCodeReducer,
    uploadinvoice : postInvoiceData,
    vendorpaidinv:vendorpaidinvoiceListReducer,
    patnerdetails:getPatnerReducer,
    vendorQueries:vendorQueriesinvoiceListReducer,
    querylist:queryListReducer,
    vensendreminder:VenSendReminderReducer,
    updatestatus : updateStatusReducer,
    postupdatestatus:PostUpdateStatusReducer,
    paidrecords : PaidRecordsReducer,
    templatenames : getTemplateNamesReducer,
    templatedetails:getTemplateDetailsReducer
})