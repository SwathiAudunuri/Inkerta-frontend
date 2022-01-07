import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalComponent } from './historical.component'; 
// import { CustomerInvoicelistModule } from '../invoicelist.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NgbDatepickerModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QrCodeModule } from 'ng-qrcode';
import { NgxPrintModule } from 'ngx-print';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TreeTableModule } from 'primeng/treetable';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularTreeGridModule } from 'angular-tree-grid';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSortModule } from '@angular/material/sort';
import { NgxEditorModule } from 'ngx-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InvoicelistModule } from '../invoicelist.module';



@NgModule({
  declarations: [
    HistoricalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    NgbModule,
  NgbDropdownModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    ReactiveFormsModule,
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
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    NgxDocViewerModule,
    InvoicelistModule
    // CustomerInvoicelistModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HistoricalModuleVendor { }
