import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationMappingRoutingModule } from './communication-mapping-routing.module';
import { CommapauditComponent } from './components/commapaudit/commapaudit.component';
import { CommapviewComponent } from './components/commapview/commapview.component';
import { CommapeditComponent } from './components/commapedit/commapedit.component';
import { CommapgridComponent } from './components/commapgrid/commapgrid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { CommunicationMappingComponent } from './communication-mapping.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    CommapauditComponent,
    CommapviewComponent,
    CommapeditComponent,
    CommapgridComponent,
    CommunicationMappingComponent
  ],
  imports: [
    BrowserAnimationsModule,
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
    NgxPaginationModule,
    Ng2SearchPipeModule,
    CommunicationMappingRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CommunicationMappingModule { }
