import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UpdateUserComponent } from './usermanagement/Components/update-user/update-user.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { UpdateUserEditComponent } from './usermanagement/Components/update-user-edit/update-user-edit.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserAuditComponent } from './usermanagement/Components/user-audit/user-audit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UnpaidinvoicesComponent } from '../invoicelist/invoicelist/components/unpaidinvoices/unpaidinvoices.component';
import { CustomerInvoicelistModule } from '../invoicelist/invoicelist.module';
import {MatMenuModule} from '@angular/material/menu';
import { AddUserComponent } from './usermanagement/Components/add-user/add-user.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserTableComponent } from './usermanagement/Components/user-table/user-table.component';
import { RoleMappingComponent } from './usermanagement/Components/role-mapping/role-mapping.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserDetailsComponent } from './usermanagement/Components/user-details/user-details.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MapNewRoleComponent } from './usermanagement/Components/map-new-role/map-new-role.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResetPasswordComponent } from './usermanagement/Components/reset-password/reset-password.component';
import { ResetPasswordPopupComponent } from './usermanagement/Components/reset-password-popup/reset-password-popup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    UsermanagementComponent,
    UpdateUserComponent,
    UpdateUserEditComponent,
    UserAuditComponent,
    AddUserComponent,
    UserTableComponent,
    RoleMappingComponent,
    UserDetailsComponent,
    MapNewRoleComponent,
    ResetPasswordComponent,
    ResetPasswordPopupComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatChipsModule,
    CustomerInvoicelistModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    PerfectScrollbarModule,
    NgxPaginationModule,
    MatFormFieldModule
  ]
})
export class CustomerUsermanagementModule { }
