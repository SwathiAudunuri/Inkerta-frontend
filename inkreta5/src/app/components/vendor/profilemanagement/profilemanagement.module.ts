import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilemanagementComponent } from './profilemanagement/profilemanagement.component';
import { ActivationEditComponent } from './profilemanagement/Components/activation.component';
import { AdditionalDetailsEditComponent } from './profilemanagement/Components/additional-details.component';
import { ContactInfoEditComponent } from './profilemanagement/Components/contact-info.component';
import { InfoComponent } from './profilemanagement/Components/info.component';
import { PreferencesComponent } from './profilemanagement/Components/preferences.component';
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
import { AdditionalDetailsReadonlyComponent } from './profilemanagement/Components/additional-details-readonly.component';
import { OtherGstinComponent } from './profilemanagement/Components/other-gstin.component';
import {MatDividerModule} from '@angular/material/divider';
import { HistoryComponent } from './profilemanagement/Components/history.component';
@NgModule({
  declarations: [
    ProfilemanagementComponent,
    ActivationEditComponent,
    AdditionalDetailsEditComponent,
    ContactInfoEditComponent,
    InfoComponent,
    PreferencesComponent,
    AdditionalDetailsReadonlyComponent,
    OtherGstinComponent,
    HistoryComponent
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
    MatDividerModule
  ]
})
export class ProfilemanagementModule { }
