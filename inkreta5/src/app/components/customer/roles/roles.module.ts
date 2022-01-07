import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolessidenavComponent } from './roles/Components/rolessidenav/rolessidenav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RolestabComponent } from './roles/Components/rolestab/rolestab.component';
import { RoledetailsComponent } from './roles/Components/roledetails/roledetails.component';
import { UserdetailsComponent } from './roles/Components/userdetails/userdetails.component';
import { NewroleComponent } from './roles/Components/newrole/newrole.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    RolesComponent,
    RolessidenavComponent,
    RolestabComponent,
    RoledetailsComponent,
    UserdetailsComponent,
    NewroleComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,  
    MatIconModule,
    NgxPaginationModule,
    MatChipsModule,
    MatRadioModule,
    MatDividerModule,
    NgbModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class RolesModule { }
