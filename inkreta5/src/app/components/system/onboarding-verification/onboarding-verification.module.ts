import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingVerificationComponent } from './onboarding-verification/onboarding-verification.component';
import { UsersTableComponent } from './onboarding-verification/components/users-table/users-table.component';
import { UserDetailsComponent } from './onboarding-verification/components/user-details/user-details.component';
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
import { GstinDetailsComponent } from './onboarding-verification/components/gstin-details/gstin-details.component';
import { ContactDetailsComponent } from './onboarding-verification/components/contact-details/contact-details.component';
import { AdditionalDetailsComponent } from './onboarding-verification/components/additional-details/additional-details.component';
import { AttachmentDetailsComponent } from './onboarding-verification/components/attachment-details/attachment-details.component';
import { AttachmentPopupComponent } from './onboarding-verification/components/attachment-popup/attachment-popup.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    OnboardingVerificationComponent,
    UsersTableComponent,
    UserDetailsComponent,
    GstinDetailsComponent,
    ContactDetailsComponent,
    AdditionalDetailsComponent,
    AttachmentDetailsComponent,
    AttachmentPopupComponent
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
    MatDialogModule,
    PerfectScrollbarModule,
    PdfViewerModule,
    NgxPaginationModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class OnboardingVerificationModule { }
