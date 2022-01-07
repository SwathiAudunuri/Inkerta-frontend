import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { ProfileInfoComponent } from './profile-management/Components/profile-info/profile-info.component';
import { ProfileContactInfoComponent } from './profile-management/Components/profile-contact-info/profile-contact-info.component';
import { ProfilePreferencesComponent } from './profile-management/Components/profile-preferences/profile-preferences.component';
import { ProfileHistoryComponent } from './profile-management/Components/profile-history/profile-history.component';
import { ProfileOtherGstinComponent } from './profile-management/Components/profile-other-gstin/profile-other-gstin.component';
import { AdditionalDetailsReadonlyComponent } from './profile-management/Components/additional-details-readonly/additional-details-readonly.component';
import { AdditionalDetailsEditComponent } from './profile-management/Components/additional-details-edit/additional-details-edit.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SnackbarComponent } from './profile-management/Components/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    ProfileManagementComponent,
    ProfileInfoComponent,
    ProfileContactInfoComponent,
    ProfilePreferencesComponent,
    ProfileHistoryComponent,
    ProfileOtherGstinComponent,
    AdditionalDetailsReadonlyComponent,
    AdditionalDetailsEditComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class CustomerProfilemanagementModule { }
