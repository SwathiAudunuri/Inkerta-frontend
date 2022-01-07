import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PatnersComponent } from  './patners/patners/patners.component'
import { RepeatedRoutingModule } from './repeated-routing.module';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatIconModule } from '@angular/material/icon';
import { DashboardModule } from './dashboard/dashboard.module';
import { ChartsModule } from 'ng2-charts';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    // PatnersComponent
  
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    RepeatedRoutingModule,
    MatIconModule,
    DashboardModule,
    ChartsModule,
    NgxSpinnerModule
  ]
})
export class RepeatedModule { }
