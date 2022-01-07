import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatnersComponent } from './patners/patners.component';
import { NewPatnerComponent } from './patners/components/new-patner/new-patner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { PatnersSidenavComponent } from './patners/components/patners-sidenav/patners-sidenav.component';
import { PatnerDetailsComponent } from './patners/components/patners-sidenav/components/patner-details/patner-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PatnerTableComponent } from './patners/components/patner-table/patner-table.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { InvoicelistModule } from '../../vendor/invoicelist/invoicelist.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditPatnerComponent } from './patners/components/patners-sidenav/components/edit-patner/edit-patner.component';


@NgModule({
  declarations: [
    PatnersComponent,
    NewPatnerComponent,
    PatnersSidenavComponent,
    PatnerDetailsComponent,
    PatnerTableComponent,
    EditPatnerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    PerfectScrollbarModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    InvoicelistModule,
    MatFormFieldModule
  ]
})
export class PatnersModule { }
