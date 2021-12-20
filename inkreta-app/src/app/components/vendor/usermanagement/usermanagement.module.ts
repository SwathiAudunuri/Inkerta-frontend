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
import { InvoicelistModule } from '../invoicelist/invoicelist.module';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    UsermanagementComponent,
    UpdateUserComponent,
    UpdateUserEditComponent,
    UserAuditComponent
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
    // MatSnackBarModule,
    InvoicelistModule,
    MatMenuModule
  ]
})
export class UsermanagementModule { }
