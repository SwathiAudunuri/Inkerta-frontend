import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { StackedbarchartComponent } from './dashboard/components/stackedbarchart/stackedbarchart.component';
import { ChartsModule } from 'ng2-charts';
import { StackedhorizontalbarComponent } from './dashboard/components/stackedhorizontalbar/stackedhorizontalbar.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    DashboardComponent,
    StackedbarchartComponent,
    StackedhorizontalbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ChartsModule,
    NgxSpinnerModule
  ]
})
export class DashboardModule { }
