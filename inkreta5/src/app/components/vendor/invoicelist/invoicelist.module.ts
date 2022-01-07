import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';
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
import { InvoiceService } from './invoicelist/invoice.service';
import { NgxPrintModule } from 'ngx-print';
import { InboxModule } from '../inbox/inbox.module';
import { SendreminderComponent } from './invoicelist/components/sendreminder/sendreminder.component';
import { InvoiceAttachmentComponent } from './invoicelist/components/invoice-attachment/invoice-attachment.component';
import { InvoiceAttachmentPopupComponent } from './invoicelist/components/invoice-attachment-popup/invoice-attachment-popup.component';
// import { InvoiceExceptionsComponent } from './invoicelist/components/invoice-exceptions/invoice-exceptions.component';
import { InvoiceQrcodePopupComponent } from './invoicelist/components/invoice-qrcode-popup/invoice-qrcode-popup.component';
// import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QrCodeModule } from 'ng-qrcode';
import { InvoiceDocumentPopupComponentComponent } from './invoicelist/components/invoice-document-popup-component/invoice-document-popup-component.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UploadInvoiceComponent } from './invoicelist/components/upload-invoice/upload-invoice.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { InvoiceDiscardComponent } from './invoicelist/components/invoice-discard/invoice-discard.component';
import { InvoiceDetailsComponent } from './invoicelist/components/invoice-details/invoice-details.component';
import { PaidInvoiceSidenavComponent } from './invoicelist/components/paid-invoice-sidenav/paid-invoice-sidenav.component';
import { ExceptionInvoiceSidenavComponent } from './invoicelist/components/exception-invoice-sidenav/exception-invoice-sidenav.component'; 
import { CommentstabComponent } from './invoicelist/components/commentstab/commentstab.component';
import { GeneralInvoiceSidenavComponent } from './invoicelist/components/general-invoice-sidenav/general-invoice-sidenav.component';
import { DraftInvoiceSidenavComponent } from './invoicelist/components/draft-invoice-sidenav/draft-invoice-sidenav.component';
import { ApprovedInvoiceSidenavComponent } from './invoicelist/components/approved-invoice-sidenav/approved-invoice-sidenav.component';
import { PostforpaymentInvoiceSidenavComponent } from './invoicelist/components/postforpayment-invoice-sidenav/postforpayment-invoice-sidenav.component';
import { QueriesinvoiceComponent } from './invoicelist/components/queriesinvoice/queriesinvoice.component';
import { InvoiceUploadFormComponent } from './invoicelist/components/invoice-upload-form/invoice-upload-form.component';
import { InvoiceUploadFormNoComponent } from './invoicelist/components/invoice-upload-form-no/invoice-upload-form-no.component';
import { InvoiceUploadFormYesComponent } from './invoicelist/components/invoice-upload-form-yes/invoice-upload-form-yes.component';
import { EmailComponent } from './invoicelist/components/email/email.component';
import { MatChipInput, MatChipsModule } from '@angular/material/chips';
import { ExternalInvoiceSidenavComponent } from './invoicelist/components/external-invoice-sidenav/external-invoice-sidenav.component';
import { ExternalInvoiceDetailsComponent } from './invoicelist/components/external-invoice-details/external-invoice-details.component';
import { QueryfileuploadComponent } from './invoicelist/components/queryfileupload/queryfileupload.component';
import {QuerydocComponent} from './invoicelist/components/querydoc/querydoc.component';
import { ExternalInvoiceStatusComponent } from './invoicelist/components/external-invoice-sidenav/components/external-invoice-status/external-invoice-status.component';
import { PartitalUpdateStatusComponent } from './invoicelist/components/partital-update-status/partital-update-status.component';
import { PartitalPaidInvoiceSidenavComponent } from './invoicelist/components/partital-paid-invoice-sidenav/partital-paid-invoice-sidenav.component'
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// import { CKEditorModule } from 'ng2-ckeditor';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ChipsModule } from 'primeng/chips';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  
  suppressScrollY: true

};
@NgModule({
  declarations: [
    InvoicelistComponent,
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
    // InvoiceExceptionsComponent,
    InvoiceQrcodePopupComponent,
    InvoiceDocumentPopupComponentComponent,
    UploadInvoiceComponent,
    InvoiceDiscardComponent,
    InvoiceDetailsComponent,
    PaidInvoiceSidenavComponent,
    ExceptionInvoiceSidenavComponent,
    CommentstabComponent,
    GeneralInvoiceSidenavComponent,
    DraftInvoiceSidenavComponent,
    ApprovedInvoiceSidenavComponent,
    PostforpaymentInvoiceSidenavComponent,
    QueriesinvoiceComponent,
    InvoiceUploadFormComponent,
    InvoiceUploadFormNoComponent,
    InvoiceUploadFormYesComponent,
    EmailComponent,
    ExternalInvoiceSidenavComponent,
    ExternalInvoiceDetailsComponent,
    QueryfileuploadComponent,
    QuerydocComponent,
    ExternalInvoiceStatusComponent,
    PartitalUpdateStatusComponent,
    PartitalPaidInvoiceSidenavComponent
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
    MatIconModule,
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
    NgxCsvParserModule,
    MatChipsModule,
    NgbDatepickerModule,
    EditorModule,
    ChipsModule
    // CKEditorModule
    // CKEditorModule
],
  exports:[
    InvoicelistComponent,
    QueryComponent,
    QuerydialogComponent,
    HistoryComponent,
    UnpaidinvoicesComponent,
    PaidinvoicesComponent,
    SearchComponent,
     InvoiceHistoryComponent,
    InvoiceDetailsSidenavComponent,
    InvoiceUploadFormNoComponent,
    EmailComponent
    // SendreminderComponent
  ], 
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    NgbDropdownConfig,
    InvoiceService,
    DatePipe
  ],
  bootstrap:[
    InvoicelistComponent,
SearchComponent

  ]
})
export class InvoicelistModule { }
