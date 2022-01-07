import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendormappingComponent } from './vendormapping.component';
import { VendorselectiondialogComponent } from './components/vendorselectiondialog/vendorselectiondialog.component';
import { VendormappingeditComponent } from './components/vendormappingedit/vendormappingedit.component';
// import { VendormappingformComponent } from './components/vendormappingform/vendormappingform.component';
import { VendormappinggridComponent } from './components/vendormappinggrid/vendormappinggrid.component';
import { VendormappingviewComponent } from './components/vendormappingview/vendormappingview.component';
import { VendormappingauditComponent } from './components/vendormappingaudit/vendormappingaudit.component';
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
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    VendormappingComponent,
    VendorselectiondialogComponent,
    VendormappingviewComponent,
    VendormappinggridComponent,
    // VendormappingformComponent,
    VendormappingeditComponent,
    VendormappingauditComponent
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
    MatDialogModule
  ]
})
export class CustomerVenderMappingModule { }
