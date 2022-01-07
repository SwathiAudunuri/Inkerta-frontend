export class Constants {
    // public static BASE_URL:string ="http://localinkreta:8089/eInvoiceServices/api/"
    public static BASE_URL:string ="http://localhost:8089/eInvoiceServices/api/"
    // public static BASE_URL:string ="http://localhost:8081/eInvoiceServices/api/"
//public static BASE_URL:string ="http://localhost:8080/api/"
    //  public static BASE_URL:string ="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/"

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
    // public static VENDORUPDATE_API_END_URL :string = Constants.BASE_URL+"vendorMapping"
    public static VENDORGSEARCH_API_END_URL :string = Constants.BASE_URL+"vendorMapping/Search"
    public static TODO: string = Constants.BASE_URL + "todo"
    public static TODO_STATUS: string = Constants.BASE_URL + "todo/status/"
    public static TODO_FLAG: string = Constants.BASE_URL + "todo/flag/"
    public static TODO_PRIORITY: string = Constants.BASE_URL + "todo/priority/"
    public static TODO_STATUS_COMPLETE: string = Constants.BASE_URL + "todo/status_change"
    public static TODO_STATUS_DELETE: string = Constants.BASE_URL + "todo/status_change"
    public static TODO_COMMENTS: string = Constants.BASE_URL + "todo/comments"
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



    //onboarding vendor and customer
    // https://myinkreta.com/api/onboarding/gstn/registered/07AAGCS9294M1ZH
    // public static onboarding_baseurl = "http://164.52.217.12:7001/onboarding/"
    public static onboarding_baseurl = "https://myinkreta.com/api/onboarding/"
    public static GSTIN_DETAILS_SERVICE1 = Constants.onboarding_baseurl+"gstn/verified/"
    public static IS_VALID_DUPLICATE1 = Constants.onboarding_baseurl+"gstn/registered/"
    public static SEND_EMAIL_OTP1 = Constants.onboarding_baseurl + "notification/send/email/otp"
    public static VERIFY_EMAIL_OTP1 = Constants.onboarding_baseurl + "notification/verify/email/otp"
    public static SAVE_ONBOARDING_DETAILS1 = Constants.onboarding_baseurl + "gstn/add/gst/details"
    public static ONBOARDING_SINGUP1 = Constants.onboarding_baseurl + "submit/onboard/details"
    public static CHECK_USERNAME1 = Constants.onboarding_baseurl + "check/username/"
    public static ONBOARDING_MASTER_DROPDOWN = Constants.onboarding_baseurl + "additional/details"


    //invoicelist
    public static UnpaidInvoiceList =Constants.BASE_URL+"customerInvoiceList/Unpaid"
    public static paidInvoiceList = Constants.BASE_URL+"customerInvoiceList/Paid"
    public static Myinbox = Constants.BASE_URL+"customerInvoiceList/MyInbox"
    public static ExceptionInvoiceList = Constants.BASE_URL+"customerInvoiceList/Exceptions"
    public static QueriedInvoiceList = Constants.BASE_URL+"customerInvoiceList/Queried"
    public static InvoiceServiceDetails = Constants.BASE_URL+"getInvoiceDetails/"
    public static ExternalInvoiceServiceDetails = Constants.BASE_URL+"externalinvoice/getInvoiceDetails/"

    public static PatnerDetails = Constants.BASE_URL+"partnerdetails/partnergstndetails"

    public static InvoiceServiceHistory = Constants.BASE_URL+"invoicestatustracker/getinvoicestatusdetails/"

    public static CustInvoiceServiceHistory = Constants.BASE_URL+"invoicestatustracker/getinvoicestatusdetailsforcustomer/"

    public static ExternalCustInvoiceServiceHistory = Constants.BASE_URL+"externalinvoice/externalinvoicestatustracker/getinvoicestatusdetailsforcustomer/"

    public static VenInvoiceServiceHistory = Constants.BASE_URL+"invoicestatustracker/getinvoicestatusdetailsforvendor/"
    

    public static InvoiceAttachments = Constants.BASE_URL+"getSupportingInvoiceDocumentDetails/"
    public static ExternalInvoiceAttachments = Constants.BASE_URL+"externalinvoice/getSupportingInvoiceDocumentDetails/"

    public static InvoiceAttachmentsSupportingDoc = Constants.BASE_URL+"getSupportingInvoiceDocument/"
    public static ExternalAttachmentsSupportingDoc = Constants.BASE_URL+"externalinvoice/getSupportingInvoiceDocument/"

    // http://localhost:8080/api/invoiceworkflow/forward
    public static Forward =Constants.BASE_URL+"invoiceworkflow/forward"
    public static ExternalForward =Constants.BASE_URL+"externalinvoice/invoiceworkflow/forward"


    public static UsersForward = Constants.BASE_URL+"invoiceworkflow/getusersforforward"
    public static Release =Constants.BASE_URL+"invoiceworkflow/release"
    public static ExternalRelease =Constants.BASE_URL+"externalinvoice/invoiceworkflow/release"

    // public static VenderUpaidInvoiceList ="http://ec2-3-108-193-62.ap-south-1.compute.amazonaws.com:8080/eInvoiceServices/api/vendorInvoiceList"
    public static Updatestatus = Constants.BASE_URL+"invoicestatus/getstatusbydocument_ref_id/"

    public static PaidRecords = Constants.BASE_URL+"invoicepaid/getpaiddetails/"

    public static ExternalUpdatestatus = Constants.BASE_URL+"externalinvoice/externalinvoicestatus/getstatusbydocument_ref_id/"

    public static Invoice_Upload = Constants.BASE_URL+"invoiceUpload"

    public static Invoice_External_Upload = Constants.BASE_URL+"externalinvoice/invoiceUpload"


    public static Execute_Action = Constants.BASE_URL+"customactions/executeaction/"
    //Query list
    public static UpdateStatusSave = Constants.BASE_URL+"invoicestatustracker/statussave"
    public static PaidUpdateStatusSave = Constants.BASE_URL+"invoicepaid/save"

    public static ExternalUpdateStatusSave = Constants.BASE_URL+"externalinvoice/externalinvoicestatustracker/statussave"

    public static QUERYLIST: string = Constants.BASE_URL + 'invoicequeries/gettreebydocument_ref_id/'
    public static QUERYSAVE: string = Constants.BASE_URL + 'invoicequeries/save'

    public static PostERP : string = Constants.BASE_URL + "invoiceautopost/post/"

    public static GetTemplatenames : string = Constants.BASE_URL + "invoicereminder/gettemplatenames"
    public static GetTemplatedetails : string = Constants.BASE_URL + "invoicereminder/gettemplate/"
    public static SendReminder : string = Constants.BASE_URL + "invoicereminder/sendreminder"

    public static VenderUpaidInvoiceList =Constants.BASE_URL+"vendorInvoiceList/Unpaid"
    public static VenderPaidInvoiceList =Constants.BASE_URL+"vendorInvoiceList/Paid"
    public static VenderQueriedInvoiceList =Constants.BASE_URL+"vendorInvoiceList/Queried"
   
    public static ExternalInvoicePdf =Constants.BASE_URL+"externalinvoice/getPDFInvoiceDocument/"

    // public static ExternalInvoicePdf =Constants.BASE_URL+ "externalinvoice/getSupportingInvoiceDocumentDetails"

    public static InvoicePdf =Constants.BASE_URL+"getPDFInvoiceDocument/"
    public static InvoiceQRcode = Constants.BASE_URL+"verifyQRCode/"
    public static Comments = Constants.BASE_URL+"invoicenotes/fetchNotes/"
    public static ExternalComments = Constants.BASE_URL+"externalinvoice/invoicenotes/fetchNotes/"

    public static CommentsSave = Constants.BASE_URL+"invoicenotes/notesSave"

    public static ExternalCommentsSave = Constants.BASE_URL+"externalinvoice/invoicenotes/notesSave"

    public static CommentsKeys = Constants.BASE_URL+"getfieldmasterkeys/Invoice Notes/Notes"


 public static CustomActions = Constants.BASE_URL+"customactions/getactions"
    public static CustomActionsDetails = Constants.BASE_URL+"customactions/actiondetails"
    public static roleandstatus = Constants.BASE_URL+"customactions/getuniquerolesandinvoicestatuses"
    public static CustomCreateAction = Constants.BASE_URL+"customactions/createaction"
    public static Customrole = Constants.BASE_URL+"partnerroles/getroles"
    public static Customroledet = Constants.BASE_URL+"partnerroles/roledetails/"
    public static CustomCreateRole = Constants.BASE_URL+"partnerroles/createrole"
public static FetchForInvoice = Constants.BASE_URL+"customactions/fetchforinvoice/"
    
    //new onboarding APIS

    public static GenerateCaptcha = Constants.BASE_URL+"onboarding/generatecaptchaforgstin"
    public static VerifyGstIn = Constants.BASE_URL+"onboarding/verifycaptchaforgstin/"
    public static SendMail = Constants.BASE_URL+"onboarding/generateotpforemail/"
    public static VerifyMail = Constants.BASE_URL + "onboarding/verifyotpforemail/"
    public static SendMobile=Constants.BASE_URL +"onboarding/generateotpformobile/"
    public static VerifyMobile = Constants.BASE_URL+"onboarding/verifyotpformobile/"
    public static AdditionalDetails = Constants.BASE_URL+"getfieldmasterkeys/Vendor On Boarding/AdditionalDetails"
    public static SaveData = Constants.BASE_URL+"onboarding/savedetails/"
    public static SubmitOnBoarding = Constants.BASE_URL+"onboarding/submit/"
    public static AttachmentTypes = Constants.BASE_URL+"getfieldmasterkeys/OnBoarding/AttachmentTypes"
    
    //UserManagement APIS
    public static GetUsers = Constants.BASE_URL+"usermanagement/getusers"
    public static CreateUser = Constants.BASE_URL+"usermanagement/createuser"
    public static GetUserDetails = Constants.BASE_URL+"usermanagement/getuserdetails/"
    public static GetUserRoles = Constants.BASE_URL+"usermanagement/getunassignedroles/"
    public static MapUserRole = Constants.BASE_URL+"usermanagement/mapusertorole"
    public static UnMapUserRole = Constants.BASE_URL+"usermanagement/unmapusertorole"
    public static resetpassword = Constants.BASE_URL+"resetPassword"

    //ProfileManagement APIS
    public static GetProfile = Constants.BASE_URL+"partnerprofile/getprofiledetails"
    public static AddGstin = Constants.BASE_URL+"partnerprofile/addgstin/"
    public static SaveProfile = Constants.BASE_URL+"partnerprofile/saveprofiledetails"


    //patners
    public static GetPatners = Constants.BASE_URL+"partnerdetails/partners"
    public static GetPatnersDetails = Constants.BASE_URL+"partnerdetails/partner/"
    public static GetDocument = Constants.BASE_URL+"partnerdetails/getdocument/"
    public static SetStatusURL = Constants.BASE_URL+"partnerdetails/setstatus/"
    
public static QueryDocument=Constants.BASE_URL +"invoicequeries/findbyid/"
    public static GetQueryDocument=Constants.BASE_URL +"invoicequeries/getdocument/"


public static Getmetrics=Constants.BASE_URL +"dashboard/customer/getInvoiceOverdueTotals"    
public static Getvendormetrics=Constants.BASE_URL +"dashboard/vendor/getInvoiceOverdueTotals" 
public static Getcustomerstopten=Constants.BASE_URL +"dashboard/vendor/getVendorTop10PayablesByCustomer"    
public static Getvendorsstopten=Constants.BASE_URL +"dashboard/vendor/getCustomerTop10PayablesByVendor"    
public static Gettotalcompaniestable=Constants.BASE_URL +"dashboard/receivables/getReceivablesByAllCompanies"
public static Gettotalcompaniesstat=Constants.BASE_URL +"dashboard/receivables/getReceivablesSummary"
public static Getcompanydetailintable=Constants.BASE_URL+"dashboard/receivables/getReceivablesFromCompany/"
public static Getcompanysummary=Constants.BASE_URL+"dashboard/receivables/getReceivablesSummaryFromCompany/"
public static Getcompanycontactdetails=Constants.BASE_URL+"dashboard/getpartnercontactdetails/"
public static Getcompanyactivities=Constants.BASE_URL+"dashboard/getinvoiceactivities/"
public static Getclosedreceivablessummary=Constants.BASE_URL+"dashboard/receivables/getClosedReceivablesSummary"
public static Getclosedreceivablescompanylist=Constants.BASE_URL+"dashboard/receivables/getClosedReceivablesByAllCompanies"
public static Getpaidcompanydetailintable=Constants.BASE_URL+"dashboard/receivables/getReceivablesFromCompany/"
public static Getpaidinvreceiblesfromcompany=Constants.BASE_URL+"dashboard/receivables/getClosedReceivablesFromCompany/"


//patners
public static AddpatnerGstin=Constants.BASE_URL + "externalpartner/createpartner/"
public static SavepatnerGstin=Constants.BASE_URL +"externalpartner/savepartner"
public static GetpatnerGstin=Constants.BASE_URL +"externalpartner/getpartners"
public static GetpatnerDetails=Constants.BASE_URL +"externalpartner/getpartnerdetails/"


//profile 
public static ChangePassword=Constants.BASE_URL +"changePassword"


//simulate
public static GetCashFlow=Constants.BASE_URL +"dashboard/getcashflowresults"
public static BudgetDetails=Constants.BASE_URL +"budgetdetails/getbudgetdetails"
public static SaveBudgetDetails=Constants.BASE_URL +"budgetdetails/save"
}