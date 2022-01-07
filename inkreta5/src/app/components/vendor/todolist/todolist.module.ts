import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewtodoComponent } from './components/viewtodo/viewtodo.component';
import { EdittodoComponent } from './components/edittodo/edittodo.component';
import { AudittodoComponent } from './components/audittodo/audittodo.component';
import { TodolistComponent } from './todolist.component';
import { UpdatetodoComponent } from './components/updatetodo/updatetodo.component';
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
import { TaskupdatestabComponent } from './components/taskupdatestab/taskupdatestab.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ViewtodoComponent,
    EdittodoComponent,
    AudittodoComponent,
    TodolistComponent,
    UpdatetodoComponent,
    TaskupdatestabComponent
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
    NgbModule
  ],
  exports:[
    ViewtodoComponent,
    EdittodoComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TodolistModule { }
