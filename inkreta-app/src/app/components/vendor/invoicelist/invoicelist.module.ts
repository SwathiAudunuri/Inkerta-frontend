import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    InvoiceHistoryComponent
    
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
    PerfectScrollbarModule
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
    InvoiceDetailsSidenavComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    NgbDropdownConfig
  ],
  bootstrap:[
    InvoicelistComponent

  ]
})
export class InvoicelistModule { }
