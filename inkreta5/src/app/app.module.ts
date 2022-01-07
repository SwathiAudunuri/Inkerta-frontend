import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule , Title} from '@angular/platform-browser';
import { ProfilemanagementModule } from './components/vendor/profilemanagement/profilemanagement.module';
import { UsermanagementModule } from './components/vendor/usermanagement/usermanagement.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import { LayoutModule } from './layout/layout.module';
//import { DashboardComponent } from './components/vendor/dashboard/dashboard/dashboard.component';
import { PaybleComponent } from './components/vendor/payble/payble.component';
import { StoreModule } from '@ngrx/store';
//import { UsersComponent } from './components/users/users.component';
import { tokenInterceptorProviders, TokenInterceptorService } from './token-interceptor.service';
import { TodolistComponent } from './components/vendor/todolist/todolist.component';
import { loginReducer } from "./reducers/login.reducer";
import { PublicModule } from './public/public.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio'
import {MatCardModule} from '@angular/material/card';
import { UpdatetodoComponent } from './components/vendor/todolist/components/updatetodo/updatetodo.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {  MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { metaReducers } from "./app.reducer";
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {MatDialogModule} from '@angular/material/dialog';
import { RecformComponent } from './components/vendor/recipientmapping/recform/recform.component';
import { RecgridComponent } from './components/vendor/recipientmapping/recgrid/recgrid.component';
import { VendormappinggridComponent } from './components/customer/vendormapping/components/vendormappinggrid/vendormappinggrid.component';
// import { VendormappingformComponent } from './components/customer/vendormapping/components/vendormappingform/vendormappingform.component';
import { VendorselectiondialogComponent } from './components/customer/vendormapping/components/vendorselectiondialog/vendorselectiondialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
// import {MatBreadcrumbModule} from "mat-breadcrumb";
import { RecviewformComponent } from './components/vendor/recipientmapping/recviewform/recviewform.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RecupdateformComponent } from './components/vendor/recipientmapping/recupdateform/recupdateform.component';
// import { Ng7BootstrapBreadcrumbModule } from 'ng7-bootstrap-breadcrumb';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InvoicelistModule } from './components/vendor/invoicelist/invoicelist.module';
import { GlobalErrorHandlerService } from './global-error-handler.service';
// import { InvoicedetailsComponent } from './components/customer/admin/invoicedetails/invoicedetails/invoicedetails.component';
//import { InvoicedetailsModule } from './components/customer/admin/invoicedetails/invoicedetails.module';
// import { invoiceListReducer } from "./components/customer/admin/invoicelist/Reducers/invoicelist.reducers";
// import {DialogexampleComponent} from "./components/vendor/recipientmapping/dialogexample/dialogexample.component"
import { NgxEditorModule } from 'ngx-editor';
// import { QuillModule } from 'ngx-quill';
import { DashboardModule } from './components/vendor/dashboard/dashboard.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
//import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { queryListReducer } from './components/vendor/invoicelist/Reducers/querylist.reducers';
import { QueryEffects } from './components/vendor/invoicelist/Effects/querylist.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularTreeGridModule } from 'angular-tree-grid';
import { InvoicedetailsModule } from './components/vendor/invoicedetails/invoicedetails.module'; 
import { ViewtodoComponent } from './components/vendor/todolist/components/viewtodo/viewtodo.component';
import { EdittodoComponent } from './components/vendor/todolist/components/edittodo/edittodo.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AudittodoComponent } from './components/vendor/todolist/components/audittodo/audittodo.component';
import {RecauditComponent} from './components/vendor/recipientmapping/recaudit/recaudit.component';
import { TaskupdatestabComponent } from './components/vendor/todolist/components/taskupdatestab/taskupdatestab.component';
import { VendormappingviewComponent } from './components/customer/vendormapping/components/vendormappingview/vendormappingview.component';
import { VendormappingeditComponent } from './components/customer/vendormapping/components/vendormappingedit/vendormappingedit.component';
import { VendormappingauditComponent } from './components/customer/vendormapping/components/vendormappingaudit/vendormappingaudit.component';
import {VendormappingComponent} from './components/customer/vendormapping/vendormapping.component'
import {TreeTableModule} from 'primeng/treetable';
import { InboxModule } from './components/vendor/inbox/inbox.module';
import { ProfileUserComponent } from './components/vendor/profile/profile/profile-user/profile-user.component';
import { TodolistModule } from './components/vendor/todolist/todolist.module';
import { InvoiceEffects } from './components/vendor/invoicelist/Effects/invoicelist.effects';
import { invoiceListReducer } from './components/vendor/invoicelist/Reducers/invoicelist.reducers';
// import { invoiceListReducer } from './components/customer/invoicelist/Reducers/invoicelist.reducers';
// import { InvoiceEffects } from './components/customer/invoicelist/Effects/invoicelist.effects';

import { invoiceListHistoryReducer } from './components/vendor/invoicelist/Reducers/invoicelisthistory.reducers';
import { InvoiceHistoryEffects } from './components/vendor/invoicelist/Effects/invoicelisthistory.effects';
import { InvoiceDetailsEffects } from './components/vendor/invoicelist/Effects/invoicelistdetails.effects';

import { LogmanagementModule } from './components/vendor/logmanagement/logmanagement.module';
// import { invoiceListHistoryReducer } from './components/vendor/invoicelist/Reducers/invoicelisthistory.reducers';
// import { InvoiceHistoryEffects } from './components/vendor/invoicelist/Effects/invoicelisthistory.effects';
// import { InvoiceDetailsEffects } from './components/vendor/invoicelist/Effects/invoicelistdetails.effects';
import { invoiceListDetailsReducer } from './components/vendor/invoicelist/Reducers/invoicelistdetails.reducer';
import { MatChipsModule } from '@angular/material/chips';
// import { VendorInvoicelistModule } from './components/customer/vendor-invoicelist/vendor-invoicelist.module';
// import { vendorinvoiceListReducer } from './components/customer/customer-invoicelist/Reducers/invoicelist.reducers';
// import { vendorinvoiceListHistoryReducer } from './components/customer/customer-invoicelist/Reducers/invoicelisthistory.reducers';
// import { vendorinvoiceListDetailsReducer } from './components/customer/customer-invoicelist/Reducers/invoicelistdetails.reducer';
// import { vendorqueryListReducer } from './components/customer/customer-invoicelist/Reducers/querylist.reducers';
// import { VenderInvoiceEffects } from './components/customer/customer-invoicelist/Effects/invoicelist.effects';
// import { VenderInvoiceHistoryEffects } from './components/customer/customer-invoicelist/Effects/invoicelisthistory.effects';
// import { VenderInvoiceDetailsEffects } from './components/customer/customer-invoicelist/Effects/invoicelistdetails.effects';
// import { VenderIndoxModule } from './components/customer/indox1/vender-indox.module';
import { CommunicationMappingModule } from './components/vendor/communication-mapping/communication-mapping.module';
// import { CustomerModule } from './customer/customer.module';
import { DashboardModuleTwo } from './components/customer/dashboard/dashboard.module';
import { InvoicedetailsModuleTwo } from './components/customer/invoicedetails/invoicedetails.module';
// import { VendorInvoicelistModule } from './components/customer/customer-invoicelist/customer-invoicelist.module';
import { CustomerInvoicelistModule } from './components/customer/invoicelist/invoicelist.module';
import { CustomerInboxModule } from './components/customer/inbox/inbox.module';
import { CustomerLogmanagementModule } from './components/customer/logmanagement/logmanagement.module';
import { CustomerProfileModule } from './components/customer/profile/profile/profile.module';
import { CustomerProfilemanagementModule } from './components/customer/profilemanagement/profilemanagement.module';
import { CustomerUsermanagementModule } from './components/customer/usermanagement/usermanagement.module';
import { CustomerInvoiceEffects } from './components/customer/invoicelist/Effects/invoicelist.effects';
import { CustomerInvoiceHistoryEffects } from './components/customer/invoicelist/Effects/invoicelisthistory.effects';
import { customerinvoiceListReducer } from './components/customer/invoicelist/Reducers/invoicelist.reducers';
import { customerinvoiceListHistoryReducer } from './components/customer/invoicelist/Reducers/invoicelisthistory.reducers';
import { customerinvoiceListDetailsReducer } from './components/customer/invoicelist/Reducers/invoicelistdetails.reducer';
import {CustomerInvoiceDetailsEffects} from './components/customer/invoicelist/Effects/invoicelistdetails.effects'
import { CustomerCommunicationMappingModule } from './components/customer/communication-mapping/communication-mapping.module'; 
import { VenderMappingModule } from './components/vendor/vendormapping/vender-mapping.module';
import { CustomerVenderMappingModule } from './components/customer/vendormapping/customer-vender-mapping.module';
import { customerqueryListReducer } from './components/customer/invoicelist/Reducers/querylist.reducers';
import { CustomerQueryEffects } from './components/customer/invoicelist/Effects/querylist.effects';
import { customerpaidinvoiceListReducer } from './components/customer/invoicelist/Reducers/paidinvoicelist.action';
import { CustomerPaidInvoiceEffects } from './components/customer/invoicelist/Effects/paidinvoicelist.effects';
import { CustomerInvoiceDetailsPdfEffects } from './components/customer/invoicelist/Effects/invoicelistdetailsPdf.effects';
import { customerinvoiceListDetailsPdfReducer } from './components/customer/invoicelist/Reducers/invoicelistdetailsPdf.reducer';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { customerinvoiceListQrCodeReducer } from './components/customer/invoicelist/Reducers/invoicelistQrcode.reducer';
import { CustomerInvoiceQrCodeEffects } from './components/customer/invoicelist/Effects/invoicelistQrcode.effects';
import { customerExceptioninvoiceListReducer } from './components/customer/invoicelist/Reducers/Exceptioninvoicelist.reducer';
import { CustomerExceptionInvoiceEffects } from './components/customer/invoicelist/Effects/Exceptioninvoicelist.effects';
import { CustomerInvoiceAttachmentsEffects } from './components/customer/invoicelist/Effects/invoicelistAttachments.effects';
import { customerinvoiceattachmentReducer } from './components/customer/invoicelist/Reducers/invoicelistAttachments.reducer';
import { CustomerAttachmentsSupportingDocEffects } from './components/customer/invoicelist/Effects/invoicelistAttachmentssupportingdoc.effects';
import { customerattachmentsupportingReducer } from './components/customer/invoicelist/Reducers/invoicelistAttachmentssupportingdoc.reducer';
import { vendorpaidinvoiceListReducer } from './components/vendor/invoicelist/Reducers/paidinvoicelist.reducers';
import { VendorPaidInvoiceEffects } from './components/vendor/invoicelist/Effects/paidinvoicelist.effects';
import { vendorinvoiceListQrCodeReducer } from './components/vendor/invoicelist/Reducers/invoicelistQrcode.reducer';
import { VendorInvoiceQrCodeEffects } from './components/vendor/invoicelist/Effects/invoicelistQrcode.effects';
import { vendorinvoiceListDetailsPdfReducer } from './components/vendor/invoicelist/Reducers/invoicelistdetailsPdf.reducers';
import { VendorInvoiceDetailsPdfEffects } from './components/vendor/invoicelist/Effects/invoicelistdetailsPdf.effects';
import { VendorAttachmentsSupportingDocEffects } from './components/vendor/invoicelist/Effects/invoicelistAttachmentssupportingdoc.effects';
import { VendorInvoiceAttachmentsEffects } from './components/vendor/invoicelist/Effects/invoicelistAttachments.effects';
import { vendorattachmentsupportingReducer } from './components/vendor/invoicelist/Reducers/invoicelistAttachmentssupportingdoc.reducer';
import { vendorinvoiceattachmentReducer } from './components/vendor/invoicelist/Reducers/invoicelistAttachments.reducers';
import { NetworkInterceptor } from './loading/network.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { NgxExtendedPdfViewerCommonModule } from 'ngx-extended-pdf-viewer/lib/ngx-extended-pdf-viewer-common.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { CommunicationEffects } from './components/customer/communication-mapping/Effects/Communication.effect';
import { VendorEffects } from './components/customer/vendormapping/Effects/vendormap.effects';
import { communicationListByidReducer, communicationListReducer } from './components/customer/communication-mapping/Reducers/Communication.reducer';
import { vendorDetailListReducer, vendorListReducer } from './components/customer/vendormapping/Reducers/vendormap.reducer';
import { InvoiceUploadEffect } from './components/vendor/invoicelist/Effects/invoiceUpload.effects';
import { postInvoiceData } from './components/vendor/invoicelist/Reducers/invoiceUpload.reducers';
import { ERPReducer } from './components/customer/invoicelist/Reducers/postERP.reducers';
import { PoastERPEffect } from './components/customer/invoicelist/Effects/postERP.effects';
import { MyInboxEffects } from './components/customer/invoicelist/Effects/Myinbox.effects';
import { customerMyinboxReducer } from './components/customer/invoicelist/Reducers/Myinbox.reducer';
import { ForwardReducer } from './components/customer/invoicelist/Reducers/Forward.reducer';
import { ForwardEffect } from './components/customer/invoicelist/Effects/Forward.effects';
import { CustomerCommentsEffects } from './components/customer/invoicelist/Effects/comments.effects';
import { CommentsReducer } from './components/customer/invoicelist/Reducers/comments.reducer';
import { TrackerEffects } from './components/customer/invoicelist/Effects/tracker.effects';
import { TrackerReducer } from './components/customer/invoicelist/Reducers/tracker.reducer';
import { vendorCommentsEffects } from './components/vendor/invoicelist/Effects/comments.effects';
import { vendorCommentsReducer } from './components/vendor/invoicelist/Reducers/comments.reducer';
import { Onboardreducers } from './public/components/onboarding/vender-onboarding/Reducers/Combine.reducers';
import { OnBoardCaptchaEffect } from './public/components/onboarding/vender-onboarding/Effects/onboardCaptcha.effects';
import { VerifyGstInEffect } from './public/components/onboarding/vender-onboarding/Effects/verifyGstin.effects';
import { HistoricalModule } from './components/customer/invoicelist/Historical/historical.module';
import { SendMailEffect } from './public/components/onboarding/vender-onboarding/Effects/SendMail.effects';
import { VerifyMailEffect } from './public/components/onboarding/vender-onboarding/Effects/VerifyMail.effects';
import { VerifyMobileEffect } from './public/components/onboarding/vender-onboarding/Effects/VerifyMobile.effects';
import { SendMobileEffect } from './public/components/onboarding/vender-onboarding/Effects/SendMobile.effects';
import { AdditionalDetailsEffect } from './public/components/onboarding/vender-onboarding/Effects/AddtionalDetails.effects';
import { SaveDataEffect } from './public/components/onboarding/vender-onboarding/Effects/Savedata.effects';
import { SubmitEffect } from './public/components/onboarding/vender-onboarding/Effects/Submit.effects';
// import { Onboardreducers1 } from './public/components/onboarding/customer-onboarding/Reducers/Combine.reducers';

import { OnBoardCaptchaEffect1 } from './public/components/onboarding/customer-onboarding/Effects/onboardCaptcha.effects';
import { VerifyGstInEffect1 } from './public/components/onboarding/customer-onboarding/Effects/verifyGstin.effects';
// import { HistoricalModule1 } from './components/customer/invoicelist/Historical/historical.module';
import { SendMailEffect1 } from './public/components/onboarding/customer-onboarding/Effects/SendMail.effects';
import { VerifyMailEffect1 } from './public/components/onboarding/customer-onboarding/Effects/VerifyMail.effects';
import { VerifyMobileEffect1 } from './public/components/onboarding/customer-onboarding/Effects/VerifyMobile.effects';
import { SendMobileEffect1 } from './public/components/onboarding/customer-onboarding/Effects/SendMobile.effects';
import { AdditionalDetailsEffect1 } from './public/components/onboarding/customer-onboarding/Effects/AddtionalDetails.effects';
import { SaveDataEffect1 } from './public/components/onboarding/customer-onboarding/Effects/Savedata.effects';
import { SubmitEffect1 } from './public/components/onboarding/customer-onboarding/Effects/Submit.effects';
import { Onboardreducers1 } from './public/components/onboarding/customer-onboarding/Reducers/Combine.reducers';
import { UserManagementReducers } from './components/customer/usermanagement/Reducers/Combine.reducers';
import { UserManagementEffects } from './components/customer/usermanagement/Effects/UserManagement.effects';
// import { ReadmoreComponent } from './readmore/readmore.component';
// import { ReadMoreModule } from 'ng-readmore';
// import { ApprovedInvoiceSidenavComponent } from './approved-invoice-sidenav/approved-invoice-sidenav.component';
// import { BuyerandsupplierModule } from './components/buyerandsupplier/buyerandsupplier.module';
// import { RecipientmappingsModule } from './components/vendor/recipientmappings/recipientmappings.module';
import { CustomactionsdetailsReducer } from './components/customer/customaction/Reducers/actiondetail.reducer';
import { StatusandroleReducer } from './components/customer/customaction/Reducers/statusandrole.reducer';
import { createactionReducer } from './components/customer/customaction/Reducers/createaction.reducer';
import { customercustomroleEffects } from './components/customer/roles/Effects/customrole.effects';
import { CustomrolesReducer } from './components/customer/roles/Reducers/customrole.reducer';
import { createroleReducer } from './components/customer/roles/Reducers/createrole.reducer';
import { CustomrolesdetailsReducer } from './components/customer/roles/Reducers/actiondetail.reducer';
import {customercustomActionEffects} from './components/customer/customaction/Effects/customaction.effects'
import { CustomactionsReducer } from './components/customer/customaction/Reducers/customaction.reducer';
import { RolesModule } from './components/customer/roles/roles.module';
import { CustomactionModule } from './components/customer/customaction/customaction.module';
import {getUsersForwardReducer} from './components/customer/invoicelist/Reducers/GetUsersForForward.reducer'
import { GetUsersForForwardEffects } from './components/customer/invoicelist/Effects/GetUsersForForward.effects';
import { FetchforInvoiceReducer } from './components/customer/invoicelist/Reducers/fetchforinvoice.reducer';
import { fetchforinvoiceEffects } from './components/customer/invoicelist/Effects/fetchforinvoice.effects';
import { ExecuteActionReducer } from './components/customer/invoicelist/Reducers/ExcuteAction.reducers';
import { ExecuteActionEffects } from './components/customer/invoicelist/Effects/ExcuteAction.effects';
import { CustQueriedReducer } from './components/customer/invoicelist/Reducers/querieslist.reducer';
import { QueriesInvoiceEffects } from './components/customer/invoicelist/Effects/querieslist.effects';
import { vendorQueriesinvoiceListReducer } from './components/vendor/invoicelist/Reducers/queriesinvoicelist.reducer';
import { VendorQueriesInvoiceEffects } from './components/vendor/invoicelist/Effects/queriesinvoicelist.effects';
import { ProfileManagementEffects } from './components/customer/profilemanagement/Effects/ProfileManagement.effects';
import { ProfileManagementReducers } from './components/customer/profilemanagement/Reducers/combine.reducers';
import { SupplierMappingModule } from './components/customer/supplier-mapping/supplier-mapping.module';
import { SupplierEffects } from './components/customer/supplier-mapping/Effects/Supplier.effects';
import { SupplierReducers } from './components/customer/supplier-mapping/Reducers/CombineReducers';
import { OnboardingVerificationModule } from './components/system/onboarding-verification/onboarding-verification.module';
import { onboardverificationreducers } from './components/system/onboarding-verification/Reducers/combine.reducers';
import { OnboardVerificationEffect } from './components/system/onboarding-verification/Effects/onboarding-verification.effects';
import { AttachmentTypeEffect } from './public/components/onboarding/vender-onboarding/Effects/AttachmentsType.effects';
import { CustAttachmentTypeEffect } from './public/components/onboarding/customer-onboarding/Effects/AttachmentType.effects';
import { LoginEffects } from './effects/Login.effects';
import { LoginReducer } from './reducers/Login.reducers';
import { getMetricsReducer } from './components/customer/dashboard/Reducers/getmetrics.reducer';
import { dashboardEffects } from './components/customer/dashboard/Effects/dashboard.effects';
import { postExternalInvoiceData } from './components/vendor/invoicelist/Reducers/externalInvoiceUpload.reducers';
import { InvoiceExternalUploadEffect } from './components/vendor/invoicelist/Effects/externalInvoiceUpload.effects';
import { ExternalinvoicelistdetialsReducer } from './components/vendor/invoicelist/Reducers/externalinvoicelistdetails.reducers';
import { ExternalInvoiceDetailsEffects } from './components/vendor/invoicelist/Effects/externalinvoicelistdetails.effects';
import { getPatnerReducer } from './components/vendor/invoicelist/Reducers/patnerdetails.reducers';
import { GetPatnerEffects } from './components/vendor/invoicelist/Effects/patnerdetails.effects';
import { CustgetPatnerReducer } from './components/customer/invoicelist/Reducers/patnerdetails.reducers';
import { CustGetPatnerEffects } from './components/customer/invoicelist/Effects/patnerdetails.effects';
import { custpostExternalInvoiceData } from './components/customer/invoicelist/Reducers/externalInvoiceUpload.reducers';
import { CustInvoiceExternalUploadEffect } from './components/customer/invoicelist/Effects/externalInvoiceUpload.effects';
import { HistoricalModuleVendor } from './components/vendor/invoicelist/Historical/historical.module';
import { customerExternalInvoiceDetailsEffects } from './components/customer/invoicelist/Effects/externalinvoicelistdetails.effects';
import { customerExternalinvoicelistdetialsReducer } from './components/customer/invoicelist/Reducers/externalinvoicelistdetails.reducers';
import { getMetricsVendorReducer } from './components/vendor/dashboard/Reducers/getmetrics.reducer';
import { dashboardVendorEffects } from './components/vendor/dashboard/Effects/dashboard.effects';
import { PatnersModule } from './components/repeated/patners/patners.module'; 
import { RepeatedModule } from './components/repeated/repeated.module';
import { PatnersReducers } from './components/repeated/patners/Reducers/combine.reducers';
import { PatnersEffects } from './components/repeated/patners/Effects/patners.effects';
import { SendReminderEffect } from './components/customer/invoicelist/Effects/sendreminder.effects';
import { SendReminderReducer } from './components/customer/invoicelist/Reducers/sendreminder.reducer';
import { VenSendReminderReducer } from './components/vendor/invoicelist/Reducers/sendreminder.reducer';
import { VenSendReminderEffect } from './components/vendor/invoicelist/Effects/sendreminder.effects';

import { gettoptencustomersReducer } from './components/vendor/dashboard/Reducers/topten.reducer';
import { gettoptenvendorsReducer } from './components/customer/dashboard/Reducers/top10.reducer';
import { customerHistoryReducer } from './components/customer/dashboard/Reducers/history.reducers';
import {vendorHistoryReducer} from './components/vendor/dashboard/Reducers/history.reducer'
import { custinvoicelistreducers } from './components/customer/invoicelist/Reducers/combinereducers.reducer';
import { UpdateStatusEffects } from './components/customer/invoicelist/Effects/updatestatus.effects';
import { PostUpdateStatusEffect } from './components/customer/invoicelist/Effects/postUpdateStatus.effects';
import { veninvoicelistreducers } from './components/vendor/invoicelist/Reducers/combine.reducers';
import { UpdatStatusEffects } from './components/vendor/invoicelist/Effects/updatestatus.effects';
import { VendorPostUpdateStatusEffect } from './components/vendor/invoicelist/Effects/postUpdateStatus.effects';
import { PaidRecordsEffects } from './components/customer/invoicelist/Effects/paidRecord.effects';
import { VenPaidRecordsEffects } from './components/vendor/invoicelist/Effects/paidRecord.effects';
import { gettotalcompanieslistReducer } from './components/vendor/dashboard/Reducers/totalcompanieslist.reducer';
import { gettotalcompaniesstatReducer } from './components/vendor/dashboard/Reducers/gettotalcompanystat.reducer';
import {getTemplateNamesEffects} from './components/customer/invoicelist/Effects/GetTemplateNames.effects'
import { getTemplateDetailsEffects } from './components/customer/invoicelist/Effects/GetTemplateDetails.effects';
import { vendorgetTemplateNamesEffects } from './components/vendor/invoicelist/Effects/GetTemplateNames.effects';
import { vendorgetTemplateDetailsEffects } from './components/vendor/invoicelist/Effects/GetTemplateDetails.effects';
import { SimulateModule } from './components/repeated/simulate/simulate.module';
import { getCompanyTableReducer } from './components/vendor/dashboard/Reducers/getcompanytable.reducer';
import { getCompanySummaryReducer } from './components/vendor/dashboard/Reducers/getcompanysummary.reducer';
import { getCompanyContactReducer } from './components/vendor/dashboard/Reducers/getcompanycontactdetails.reducer';
import { getCompanyActivityReducer } from './components/vendor/dashboard/Reducers/getcompanyactivity.reducer';
import { ChartsModule } from 'ng2-charts';
import { CommonProfileModule } from './components/repeated/common-profile/common-profile.module';
import { CommonProfileEffects } from './components/repeated/common-profile/Effects/common-profile.effects';
import { CommonProfileReducers } from './components/repeated/common-profile/Reducers/profile-combine.reducers';
import { getcashflowReducers } from './components/repeated/simulate/Reducers/simulateCombine.reducers';
// import { CKEditorModule } from 'ng2-ckeditor';
import { EditorModule } from '@tinymce/tinymce-angular';
import {SimulateEffects} from './components/repeated/simulate/Effects/simulate.effects'
// import { combinereducers } from './app.reducer1';
import { getCompanyClosedSummaryReducer } from './components/vendor/dashboard/Reducers/getcompanyclosedsummary.reducer';
import { gettotalcompaniesclosedinvlistReducer } from './components/vendor/dashboard/Reducers/totalcompanyclosedinvlist.reducer';
import { getclosedinvlistfromcompanyReducer } from './components/vendor/dashboard/Reducers/getinvlistfromcompany.reducer';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


//import { reducers,metaReducers } from './app.reducer1';
@NgModule({
  declarations: [
    AppComponent, 
    PaybleComponent,
    
    // TodolistComponent,
    // UpdatetodoComponent,
    RecformComponent,
    RecgridComponent,
    // VendormappinggridComponent,
    // VendormappingformComponent,
    // VendorselectiondialogComponent,
    RecviewformComponent,
    RecupdateformComponent,
    // ViewtodoComponent,
    // EdittodoComponent,
    // AudittodoComponent,  
    // VendormappingComponent,
    ProfileUserComponent,
    RecauditComponent,
    // ReadmoreComponent
    // ApprovedInvoiceSidenavComponent,
    
    // VendormappingviewComponent, VendormappingeditComponent, VendormappingauditComponent, 
  ],
  // DialogexampleComponent
  entryComponents :[],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LogmanagementModule,
    FormsModule,
    AuthModule,
    MatSortModule,
    NgMultiSelectDropDownModule,
    CoreModule,
    HttpClientModule,
    LayoutModule,
    PublicModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    //customer
    // StoreModule.forRoot({login:LoginReducer,loginReducer,invoicelist:invoiceListReducer,invoicelisthistory:invoiceListHistoryReducer,invoicedetails:invoiceListDetailsReducer,querylist:queryListReducer,querylist1:customerqueryListReducer,customerinvoicelist:customerinvoiceListReducer,customerpaidinvoicelist:customerpaidinvoiceListReducer,customerinvoicelisthistory:customerinvoiceListHistoryReducer,customerinvoicedetails:customerinvoiceListDetailsReducer,customerinvoicepdf:customerinvoiceListDetailsPdfReducer,vendorinvoicepdf:vendorinvoiceListDetailsPdfReducer,customerqrcode:customerinvoiceListQrCodeReducer,vendorqrcode:vendorinvoiceListQrCodeReducer,customerExceptions:customerExceptioninvoiceListReducer,customerAttachments:customerinvoiceattachmentReducer,vendorAttachments:vendorinvoiceattachmentReducer,customerAttachmentsSupporting:customerattachmentsupportingReducer,vendorAttachmentsSupporting:vendorattachmentsupportingReducer,vendorpaidinv:vendorpaidinvoiceListReducer,communications : communicationListReducer , suppliers:vendorListReducer ,supplierDetail :vendorDetailListReducer,uploadinvoice : postInvoiceData,erp:ERPReducer,myinbox:customerMyinboxReducer,forward:ForwardReducer, comments:CommentsReducer,communicationid: communicationListByidReducer,tracker:TrackerReducer,vendorcomments:vendorCommentsReducer,OnBoard:Onboardreducers,OnBoard1:Onboardreducers1,UserManagement:UserManagementReducers,
    // customercustomactions:CustomactionsReducer,actiondetail:CustomactionsdetailsReducer,statusandrole:StatusandroleReducer,
    //   createaction:createactionReducer,role:CustomrolesReducer,addrole:createroleReducer,
    //   roledetail:CustomrolesdetailsReducer,usersforforward:getUsersForwardReducer,
    //   fetchforinvoice:FetchforInvoiceReducer,executeaction:ExecuteActionReducer,
    //   Queried:CustQueriedReducer,vendorQueries:vendorQueriesinvoiceListReducer,profilemanagement:ProfileManagementReducers,
    //   Supplier:SupplierReducers,patners:onboardverificationreducers,metrics:getMetricsReducer,
    //   uploadexternalinvoice : postExternalInvoiceData,externalinvoicedetails:ExternalinvoicelistdetialsReducer,
    //   patnerdetails:getPatnerReducer,custpatnerdetails:CustgetPatnerReducer,
    //   custuploadexternalinvoice : custpostExternalInvoiceData,
    //   custexternalinvoicedetails:customerExternalinvoicelistdetialsReducer,
    //   vendormetrics:getMetricsVendorReducer,commonpatners:PatnersReducers,sendreminder:SendReminderReducer,
    //   vensendreminder:VenSendReminderReducer,top10customers:gettoptencustomersReducer,      top10vendors:gettoptenvendorsReducer,

    //   diashistory:customerHistoryReducer,vendiashistory:vendorHistoryReducer


    // },{metaReducers}),
    //vendor
    // StoreModule.forRoot({login:LoginReducer,loginReducer,invoicelist:invoiceListReducer,invoicelisthistory:invoiceListHistoryReducer,invoicedetails:invoiceListDetailsReducer,querylist:queryListReducer,vendorinvoicepdf:vendorinvoiceListDetailsPdfReducer,vendorqrcode:vendorinvoiceListQrCodeReducer,vendorAttachments:vendorinvoiceattachmentReducer,vendorAttachmentsSupporting:vendorattachmentsupportingReducer,vendorpaidinv:vendorpaidinvoiceListReducer,communications : communicationListReducer , suppliers:vendorListReducer ,supplierDetail :vendorDetailListReducer,uploadinvoice : postInvoiceData,communicationid: communicationListByidReducer,vendorcomments:vendorCommentsReducer,OnBoard:Onboardreducers,OnBoard1:Onboardreducers1,UserManagement:UserManagementReducers,
    //   customercustomactions:CustomactionsReducer,actiondetail:CustomactionsdetailsReducer,statusandrole:StatusandroleReducer,
    //     createaction:createactionReducer,role:CustomrolesReducer,addrole:createroleReducer,
    //     roledetail:CustomrolesdetailsReducer,
        
    //     vendorQueries:vendorQueriesinvoiceListReducer,profilemanagement:ProfileManagementReducers,
    //     Supplier:SupplierReducers,patners:onboardverificationreducers,metrics:getMetricsReducer,
    //     uploadexternalinvoice : postExternalInvoiceData,externalinvoicedetails:ExternalinvoicelistdetialsReducer,
    //     patnerdetails:getPatnerReducer,
        
    //     vendormetrics:getMetricsVendorReducer,commonpatners:PatnersReducers,
    //     vensendreminder:VenSendReminderReducer,top10customers:gettoptencustomersReducer,      top10vendors:gettoptenvendorsReducer,
  
    //     diashistory:customerHistoryReducer,vendiashistory:vendorHistoryReducer,
    //     payablesinvoicelist:custinvoicelistreducers
  
      
    //   },{metaReducers}),

    StoreModule.forRoot({login:LoginReducer,loginReducer,communications : communicationListReducer , suppliers:vendorListReducer ,supplierDetail :vendorDetailListReducer,communicationid: communicationListByidReducer,OnBoard:Onboardreducers,OnBoard1:Onboardreducers1,UserManagement:UserManagementReducers,
      customercustomactions:CustomactionsReducer,actiondetail:CustomactionsdetailsReducer,statusandrole:StatusandroleReducer,
        createaction:createactionReducer,role:CustomrolesReducer,addrole:createroleReducer,
        roledetail:CustomrolesdetailsReducer,
        profilemanagement:ProfileManagementReducers,
        Supplier:SupplierReducers,patners:onboardverificationreducers,metrics:getMetricsReducer,
        vendormetrics:getMetricsVendorReducer,commonpatners:PatnersReducers,
        top10customers:gettoptencustomersReducer,top10vendors:gettoptenvendorsReducer,
        diashistory:customerHistoryReducer,vendiashistory:vendorHistoryReducer,
        receivablesinvoicelist:veninvoicelistreducers,
	   
        payablesinvoicelist:custinvoicelistreducers,
     companylist: gettotalcompanieslistReducer,totalcompanystat:gettotalcompaniesstatReducer,
     companytable:getCompanyTableReducer,companysummary:getCompanySummaryReducer,
     companycontactdetails:getCompanyContactReducer,companyactivity:getCompanyActivityReducer,profile:CommonProfileReducers,
     simulate:getcashflowReducers,companyclosedinvoicesummary:getCompanyClosedSummaryReducer,closedcompanytable:gettotalcompaniesclosedinvlistReducer,
     closedinvfromcompany:getclosedinvlistfromcompanyReducer,
      },{metaReducers}),
    EffectsModule.forRoot([LoginEffects,QueryEffects,CustomerInvoiceEffects,CustomerPaidInvoiceEffects,CustomerInvoiceHistoryEffects,CustomerInvoiceDetailsEffects,InvoiceEffects,InvoiceHistoryEffects,InvoiceDetailsEffects,CustomerQueryEffects,CustomerInvoiceDetailsPdfEffects,CustomerInvoiceQrCodeEffects,CustomerExceptionInvoiceEffects,CustomerInvoiceAttachmentsEffects,CustomerAttachmentsSupportingDocEffects,VendorPaidInvoiceEffects,VendorInvoiceQrCodeEffects,VendorInvoiceDetailsPdfEffects,VendorAttachmentsSupportingDocEffects,VendorInvoiceAttachmentsEffects,CommunicationEffects,VendorEffects,InvoiceUploadEffect,PoastERPEffect,MyInboxEffects,ForwardEffect,CustomerCommentsEffects,TrackerEffects,vendorCommentsEffects,OnBoardCaptchaEffect,VerifyGstInEffect,SendMailEffect,VerifyMailEffect,SendMobileEffect,VerifyMobileEffect,AdditionalDetailsEffect,SaveDataEffect,SubmitEffect,OnBoardCaptchaEffect1,VerifyGstInEffect1,SendMailEffect1,VerifyMailEffect1,SendMobileEffect1,VerifyMobileEffect1,AdditionalDetailsEffect1,SaveDataEffect1,SubmitEffect1,UserManagementEffects,
      customercustomActionEffects,VendorPostUpdateStatusEffect,
      customercustomroleEffects,GetUsersForForwardEffects,fetchforinvoiceEffects,ExecuteActionEffects,
      CustAttachmentTypeEffect,QueriesInvoiceEffects,VendorQueriesInvoiceEffects,ProfileManagementEffects,SupplierEffects,OnboardVerificationEffect,AttachmentTypeEffect,
      dashboardEffects,InvoiceExternalUploadEffect,ExternalInvoiceDetailsEffects,GetPatnerEffects,PaidRecordsEffects,
      CustGetPatnerEffects,CustInvoiceExternalUploadEffect,UpdateStatusEffects,PostUpdateStatusEffect,UpdatStatusEffects,
      customerExternalInvoiceDetailsEffects,dashboardVendorEffects,PatnersEffects,SendReminderEffect,VenSendReminderEffect,
      VenPaidRecordsEffects,getTemplateNamesEffects,getTemplateDetailsEffects,vendorgetTemplateNamesEffects,vendorgetTemplateDetailsEffects,
      CommonProfileEffects,SimulateEffects
    ]),
    // ,InvoiceEffects,InvoiceHistoryEffects,InvoiceDetailsEffects
    // StoreModule.forRoot({loginReducer,invoicelist:invoiceListReducer,invoicelisthistory:invoiceListHistoryReducer,invoicedetails:invoiceListDetailsReducer,querylist:queryListReducer,stepper: gstreducer,emailver,otp:emailverotp,save:saveonbording,venderstepper: vendergstreducer,venderemailver,venderotp:venderemailverotp,vendersave:vendersaveonbording,vendorinvoicelist:vendorinvoiceListReducer,vendorinvoicelisthistory:vendorinvoiceListHistoryReducer,vendorinvoicedetails:vendorinvoiceListDetailsReducer,vendorquerylist:vendorqueryListReducer},{metaReducers}),
    // EffectsModule.forRoot([QueryEffects,Effects,Effects1,Effects2,Effect3,InvoiceEffects,InvoiceHistoryEffects,InvoiceDetailsEffects,veder_onboarding_save,veder_otp_verify,vender_email_verify,vender_gst_verify,VenderInvoiceEffects,VenderInvoiceHistoryEffects,VenderInvoiceDetailsEffects,CustomerCommentsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
     // logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    LayoutModule,
    PerfectScrollbarModule,
    MatSortModule,
    NgDynamicBreadcrumbModule,
    NgbModule,
    InvoicelistModule,
    InvoicedetailsModule,
    MatButtonModule,
     NgxEditorModule,
     AngularEditorModule,
      DashboardModule,
      DashboardModuleTwo,
      NgxChartsModule,
    NgxPaginationModule,
         FontAwesomeModule,
    AngularTreeGridModule,
    TreeTableModule,
     InboxModule,
     TodolistModule,
     MatChipsModule,
  
     InvoicedetailsModuleTwo,
    //  VendorInvoicelistModule,
     CustomerInvoicelistModule,
     CustomerInboxModule,
     CustomerLogmanagementModule,
     CustomerProfileModule,
     CustomerProfilemanagementModule,
     CustomerUsermanagementModule,
     CustomerCommunicationMappingModule,
     VenderMappingModule,
     CustomerVenderMappingModule,
     MatProgressSpinnerModule,
     HttpClientModule,
     NgxExtendedPdfViewerModule,
     NgxDocViewerModule,
     HistoricalModule,
     RolesModule,
     CustomactionModule,
     SupplierMappingModule,
     OnboardingVerificationModule,
     HistoricalModuleVendor,
     PatnersModule,
     RepeatedModule,
     SimulateModule,
     CommonProfileModule,
     EditorModule
    //  CKEditorModule
    //  ReadMoreModule
    //  CommunicationMappingModule1
   
   ],
   exports:[

   ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass : NetworkInterceptor,
    //   multi : true
    // },



  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }


