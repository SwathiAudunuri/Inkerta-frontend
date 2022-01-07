import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInvoicelistComponent } from './invoicelist/invoicelist.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { QueryComponent } from './invoicelist/components/query/query.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule, MatListOption } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgbDatepicker, NgbDatepickerModule, NgbDropdownConfig, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuerydialogComponent } from './invoicelist/components/querydialog/querydialog.component';
import { UpdatestatusComponent } from './invoicelist/components/updatestatus/updatestatus.component';
import { PaidinvoicesComponent } from './invoicelist/components/paidinvoices/paidinvoices.component';
import { NgxEditorModule } from 'ngx-editor';
//import { QuillModule } from 'ngx-quill';
import { FileUploadComponent } from './invoicelist/components/file-upload/file-upload.component';
import { HistoryComponent } from './invoicelist/components/history/history.component';
import { UnpaidinvoicesComponent } from './invoicelist/components/unpaidinvoices/unpaidinvoices.component';
import { MatSortModule } from '@angular/material/sort';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularTreeGridModule } from 'angular-tree-grid';
import { SearchComponent } from './invoicelist/components/search/search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TreeTableModule } from 'primeng/treetable';
import { MatSidenavModule } from '@angular/material/sidenav';
import { InvoicedetailsComponent } from '../invoicedetails/invoicedetails/invoicedetails.component';
import { InvoiceDetailsSidenavComponent } from './invoicelist/components/invoice-details-sidenav/invoice-details-sidenav.component';
import {MatTabsModule} from '@angular/material/tabs';
import { InvoiceHistoryComponent } from './invoicelist/components/invoice-history/invoice-history.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { InvoiceInlineComponent } from './invoicelist/components/invoice-inline/invoice-inline.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CustomerInvoiceService, CustomerInvoiceServiceDetails, CustomerInvoiceServiceHistory } from './invoicelist/invoice.service';

import { SendreminderComponent } from './invoicelist/components/sendreminder/sendreminder.component';
import { InvoiceAttachmentComponent } from './invoicelist/components/invoice-attachment/invoice-attachment.component';
import { InvoiceAttachmentPopupComponent } from './invoicelist/components/invoice-attachment-popup/invoice-attachment-popup.component';
import { InvoiceExceptionsComponent } from './invoicelist/components/invoice-exceptions/invoice-exceptions.component';
import { InvoiceQrcodePopupComponent } from './invoicelist/components/invoice-qrcode-popup/invoice-qrcode-popup.component';
// import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QrCodeModule } from 'ng-qrcode';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from 'src/app/loading/network.interceptor';
// import { NgxExtendedPdfViewerCommonModule } from 'ngx-extended-pdf-viewer/lib/ngx-extended-pdf-viewer-common.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { InvoiceDocumentPopupComponent } from './invoicelist/components/invoice-document-popup/invoice-document-popup.component';
import { PostIntoErpComponent } from './invoicelist/components/post-into-erp/post-into-erp.component';
import { InvoiceDetailsComponent } from './invoicelist/components/invoice-details/invoice-details.component';
import { PaidInvoiceSidenavComponent } from './invoicelist/components/paid-invoice-sidenav/paid-invoice-sidenav.component';
import { ExceptionInvoiceSidenavComponent } from './invoicelist/components/exception-invoice-sidenav/exception-invoice-sidenav.component';
import { GeneralInvoiceSidenavComponent } from './invoicelist/components/general-invoice-sidenav/general-invoice-sidenav.component';
import { PostforpayInvoiceSidenavComponent } from './invoicelist/components/postforpay-invoice-sidenav/postforpay-invoice-sidenav.component';
import { DraftInvoiceSidenavComponent } from './invoicelist/components/draft-invoice-sidenav/draft-invoice-sidenav.component';
import { InvoiceDiscardComponent } from './invoicelist/components/invoice-discard/invoice-discard.component';
import { AssignedtoMeComponent } from './invoicelist/components/assignedto-me/assignedto-me.component';
import { InvoiceQueriesComponent } from './invoicelist/components/invoice-queries/invoice-queries.component';
import { SubmitDialogComponent } from './invoicelist/components/submit-dialog/submit-dialog.component';
import { ForwardpopupComponent } from './invoicelist/components/forwardpopup/forwardpopup.component';
import { UserselectionComponent } from './invoicelist/components/userselection/userselection.component';
import { NgxPrintModule } from 'ngx-print';
import { AngularSplitModule } from 'angular-split';
import { CommentsComponent } from './invoicelist/components/comments/comments.component';
import { CommentstabComponent } from './invoicelist/components/commentstab/commentstab.component';
import { TimelineComponent } from './invoicelist/components/timeline/timeline.component';
import { ApprovedInvoiceSidenavComponent } from './invoicelist/components/approved-invoice-sidenav/approved-invoice-sidenav.component';
import { ReadmoreComponent } from './invoicelist/components/readmore/readmore.component';
import { CustomDialogComponent } from './invoicelist/components/custom-dialog/custom-dialog.component'; 
import { QuerydocComponent } from './invoicelist/components/querydoc/querydoc.component';
import { InvoiceUploadFormComponent } from './invoicelist/components/invoice-upload-form/invoice-upload-form.component';
import { EmailComponent } from './invoicelist/components/email/email.component';
import { MatChipsModule } from '@angular/material/chips';
import { ExternalInvoiceSidenavComponent } from './invoicelist/components/external-invoice-sidenav/external-invoice-sidenav.component';
import { ExternalInvoiceDetailsComponent } from './invoicelist/components/external-invoice-details/external-invoice-details.component';
import { ExternalUpdateStatusComponent } from './invoicelist/components/external-invoice-sidenav/components/external-update-status/external-update-status.component';
import { PartitalPaidInvoiceSidenavComponent } from './invoicelist/components/partital-paid-invoice-sidenav/partital-paid-invoice-sidenav.component';
import { PartitalUpdateStatusComponent } from './invoicelist/components/partital-update-status/partital-update-status.component';
// import { HistoricalModule } from './Historical/historical.module';
// import { ReadMoreModule } from 'ng-readmore';
// import { CustomerunpaidComponent } from './invoicelist/components/customerunpaid/customerunpaid.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  
  suppressScrollY: true

};
@NgModule({
  declarations: [
    CustomerInvoicelistComponent,
    QueryComponent,
    QuerydialogComponent,
    UpdatestatusComponent,
    PaidinvoicesComponent,
    FileUploadComponent,
    HistoryComponent,
    UnpaidinvoicesComponent,
    SearchComponent,
    InvoiceDetailsSidenavComponent,
    InvoiceHistoryComponent,
    InvoiceInlineComponent,
    SendreminderComponent,
    UnpaidinvoicesComponent,
    InvoiceAttachmentComponent,
    InvoiceAttachmentPopupComponent,
    InvoiceExceptionsComponent,
    InvoiceQrcodePopupComponent,
    InvoiceDocumentPopupComponent,
    PostIntoErpComponent,
    InvoiceDetailsComponent,
    PaidInvoiceSidenavComponent,
    ExceptionInvoiceSidenavComponent,
    GeneralInvoiceSidenavComponent,
    PostforpayInvoiceSidenavComponent,
    InvoiceDiscardComponent,
    AssignedtoMeComponent,
    InvoiceQueriesComponent,
    DraftInvoiceSidenavComponent,
    SubmitDialogComponent,
        ForwardpopupComponent,
    UserselectionComponent,
    CommentsComponent,
    CommentstabComponent,
    TimelineComponent,
    ApprovedInvoiceSidenavComponent,
    ReadmoreComponent,
    CustomDialogComponent,
    QuerydocComponent,
    InvoiceUploadFormComponent,
    EmailComponent,
    ExternalInvoiceSidenavComponent,
    ExternalInvoiceDetailsComponent,
    ExternalUpdateStatusComponent,
    PartitalPaidInvoiceSidenavComponent,
    PartitalUpdateStatusComponent
    // DraftInvoiceSidenavComponent
    // InvoicedetailsComponent
    
  ],
  entryComponents:[QuerydialogComponent,UpdatestatusComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    NgbModule,
  NgbDropdownModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    MatDialogModule,
    NgxEditorModule,
    MatSortModule,
  //  QuillModule
  FontAwesomeModule,
    NgbDatepickerModule,
    AngularTreeGridModule,
    NgxPaginationModule,
    TreeTableModule,
    MatInputModule,
    MatSidenavModule, 
    MatTabsModule,
    MatButtonToggleModule,
    PerfectScrollbarModule,
    PdfViewerModule,
    NgxPrintModule,
    QrCodeModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    NgxDocViewerModule,
    AngularSplitModule,
    MatChipsModule,
    NgbDatepickerModule
    // HistoricalModule
],
  exports:[
    CustomerInvoicelistComponent,
    QueryComponent,
    QuerydialogComponent,
    UpdatestatusComponent,
    PaidinvoicesComponent,
    FileUploadComponent,
    HistoryComponent,
    UnpaidinvoicesComponent,
    SearchComponent,
    InvoiceDetailsSidenavComponent,
    InvoiceHistoryComponent,
    InvoiceInlineComponent,
    SendreminderComponent,
    UnpaidinvoicesComponent,
    InvoiceAttachmentComponent,
    InvoiceAttachmentPopupComponent,
    InvoiceExceptionsComponent,
    InvoiceQrcodePopupComponent,
    InvoiceDocumentPopupComponent,
    PostIntoErpComponent,
    InvoiceDetailsComponent,
    PaidInvoiceSidenavComponent,
    ExceptionInvoiceSidenavComponent,
    GeneralInvoiceSidenavComponent,
    PostforpayInvoiceSidenavComponent,
    InvoiceDiscardComponent,
    AssignedtoMeComponent,
    InvoiceQueriesComponent,
    DraftInvoiceSidenavComponent,
    SubmitDialogComponent,
        ForwardpopupComponent,
    UserselectionComponent,
    CommentsComponent,
    CommentstabComponent,
    TimelineComponent,
    ApprovedInvoiceSidenavComponent,
    ReadmoreComponent,
    InvoiceUploadFormComponent,
    EmailComponent
    
    
    
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : NetworkInterceptor,
      multi : true
    },
    NgbDropdownConfig,
    CustomerInvoiceService,CustomerInvoiceServiceDetails,CustomerInvoiceServiceHistory
  ],
  bootstrap:[
    CustomerInvoicelistComponent,
SearchComponent

  ]
})
export class CustomerInvoicelistModule { }
