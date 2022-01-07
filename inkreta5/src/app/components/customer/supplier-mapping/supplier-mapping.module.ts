import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SupplierMappingComponent} from './supplier-mapping/supplier-mapping.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { SupplierTableComponent } from './supplier-mapping/components/supplier-table/supplier-table.component';
import { SupplierDetailsComponent } from './supplier-mapping/components/supplier-details/supplier-details.component';
import { NewSupplierComponent } from './supplier-mapping/components/new-supplier/new-supplier.component';
import { SupplierDeatilsGeneralComponent } from './supplier-mapping/components/supplier-deatils-general/supplier-deatils-general.component';
import { SupplierDeatilsAuditComponent } from './supplier-mapping/components/supplier-deatils-audit/supplier-deatils-audit.component';
import { SupplierSelectComponent } from './supplier-mapping/components/supplier-select/supplier-select.component';


@NgModule({
  declarations: [
    SupplierMappingComponent,
    SupplierTableComponent,
    SupplierDetailsComponent,
    NewSupplierComponent,
    SupplierDeatilsGeneralComponent,
    SupplierDeatilsAuditComponent,
    SupplierSelectComponent
  ],
  imports: [

    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
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
    NgbModule,
    MatDialogModule
  ]
})
export class SupplierMappingModule { }
