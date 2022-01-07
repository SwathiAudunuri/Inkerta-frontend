import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogmanagementComponent } from './logmanagement/logmanagement.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LogmanagementComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSidenavModule,
    FormsModule,
    MatTableModule,
    MatRadioModule,
    MatPaginatorModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule, NgbDropdownModule
  ],
  providers: [
    NgbDropdownConfig
  ],
  bootstrap:[
    LogmanagementComponent

  ]
})
export class LogmanagementModule { }
