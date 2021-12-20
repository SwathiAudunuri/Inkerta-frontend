export class Constants {
    // public static BASE_URL = window["cfgApiBaseUrl"]+"/api"
    // public static BASE_URL: string = "http://localhost:8080/api/"

    // public static BASE_URL:string   = "http://183.83.219.159:7001/eInvoiceServices/api/"
     public static BASE_URL:string ="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/"
    // public static BASE_URL:string   = "http://172.16.6.25:8080/eInvoiceServices/api/"
    public static ALFRESCO_BASE_URL: string = "http://172.16.6.25:8080/alfresco/api/"
    public static LOGIN_API_END_URL: string = Constants.BASE_URL + "login"
    public static TOKEN_REFRESH_API_END_URL: string = Constants.BASE_URL + "refresh_token";
    public static GET_NAVIGATION_ITEMS: string = Constants.BASE_URL + "navitems";
    public static INVITE_PARTNER: string = Constants.BASE_URL + "partnerInvitation";
    public static GET_ALL_INVITATIONS: string = Constants.BASE_URL + "partnerInvitation"
    public static GET_REGISTRATION_DETAILS: string = Constants.BASE_URL + "registrationDetails/"
    public static POST_REGISTRATION_DETAILS: string = Constants.BASE_URL + "profileActivity/"
    public static LOOKUP_FIELDS: string = Constants.BASE_URL + "lookup"
    public static ENQUIRY_API_END_URL: string = Constants.BASE_URL + "enquiry"
    public static ENQUIRYGET_API_END_URL: string = Constants.BASE_URL + "enquiries"
    public static RECIPIENT_API_END_URL: string = Constants.BASE_URL + "reciepientMapping"
    public static RECIPIENTACTIVE_API_END_URL : string = Constants.BASE_URL +"activeReciepent"
    public static RECIPIENTINACTIVE_API_END_URL : string = Constants.BASE_URL +"inactiveReciepent"
    public static GSTIN_MAPPING: string = Constants.BASE_URL + "getGstnList"
    public static RECIPIENTID_API_END_URL: string = Constants.BASE_URL + "getReciepientId"
    public static ALLVENDORS_API_END_URL: string = Constants.BASE_URL + "allVendors"
    public static VENDORS_API_END_URL: string = Constants.BASE_URL + "mappedVendors"
    public static VENDORSEARCH_API_END_URL: string = Constants.BASE_URL + "allVendors/"
    public static NEW_VENDOR_MAPPING: string = Constants.BASE_URL + "newVendorMapping"
    public static VENDORINACTIVE_API_END_URL :string = Constants.BASE_URL+"inactiveVendor"
    public static VENDORACTIVE_API_END_URL :string = Constants.BASE_URL+"activeVendor"
    public static VENDORDELETE_API_END_URL :string = Constants.BASE_URL+"vendorMapping"
    public static VENDORGSEARCH_API_END_URL :string = Constants.BASE_URL+"vendorMapping/Search"
    public static TODO: string = Constants.BASE_URL + "todo"
    public static TODO_STATUS: string = Constants.BASE_URL + "todo/status/"
    public static TODO_FLAG: string = Constants.BASE_URL + "todo/flag/"
    public static TODO_PRIORITY: string = Constants.BASE_URL + "todo/priority/"

    public static API_CHECK: string = Constants.BASE_URL + "http://localhost:8080/eInvoice_1/v1/web/rest/get_message";
    public static ROLE_ACCESS_CHECK: string = Constants.BASE_URL + "private_access";
    public static ADD_DOCUMENTS: string = Constants.ALFRESCO_BASE_URL + "addDocuments"
    public static DELETE_DOCUMENT: string = Constants.ALFRESCO_BASE_URL + "deleteDocument"
    public static GET_DOCUMENT_CONTENT: string = Constants.ALFRESCO_BASE_URL + "getDocumentContent"
    public static GET_ALL_INVOICES: string = Constants.BASE_URL + "invoiceList"
    public static UPLOAD_INVOICE: string = Constants.BASE_URL + "invoiceUpload"
    public static GET_INVOICE_DETAILS: string = Constants.BASE_URL + "getInvoiceDetails"
    public static SEARCH_RECIPIENTS: string = Constants.BASE_URL + "myReciepeints"
    // public static BASE_URL:string INV_JSON_UPLOAD = BASE_URL+ "inv/json"
    public static INV_JSON_UPLOAD: string = Constants.BASE_URL + "inv/jsonConvert"
    public static GSTIN_DETAILS_SERVICE: string = "http://183.83.219.159:7001/gstnDetails/api/gstn/"
    // public static BASE_URL:string GSTIN_DETAILS_SERVICE = "http://172.16.6.25:8080/gstnDetails/api/gstn/"
    public static GSTIN_DETAILS_POST: string = Constants.BASE_URL + "signup"
    public static SIGNUP_SEND_OPT: string = Constants.BASE_URL + "otp/generate"
    public static OTP_VALID: string = Constants.BASE_URL + "otp/validate"
    public static IS_VALID_EMAIL: string = Constants.BASE_URL + 'isDuplicateemail/'
    public static IS_VALID_MOBILE: string = Constants.BASE_URL + 'isDuplicatephone/'
    public static IS_VALID_DUPLICATE: string = Constants.BASE_URL + 'isDuplicategstn/'

}