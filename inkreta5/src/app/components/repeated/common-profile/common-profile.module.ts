import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {ProfileTabComponent} from './profile/components/profile-tab/profile-tab.component'
import {AuditTabComponent} from './profile/components/audit-tab/audit-tab.component';
import { ProfileTabEditComponent } from './profile/components/profile-tab-edit/profile-tab-edit.component';
import { ChangePasswordComponent } from './profile/components/change-password/change-password.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileTabComponent,
    AuditTabComponent,
    ProfileTabEditComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule,
    MatTabsModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class CommonProfileModule { }
