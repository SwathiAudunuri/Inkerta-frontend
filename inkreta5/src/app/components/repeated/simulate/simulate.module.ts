import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulateComponent } from './simulate/simulate.component';
import { MatDividerModule } from '@angular/material/divider';
import { ReceivablesSimulateComponent } from './simulate/components/receivables-simulate/receivables-simulate.component';
import { PayablesSimulateComponent } from './simulate/components/payables-simulate/payables-simulate.component';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TimeseriesComponent } from './simulate/components/timeseries/timeseries.component';
import { ChartsModule } from 'ng2-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BudgetInfoComponent } from './simulate/components/budget-info/budget-info.component';
import { BudgetTableComponent } from './simulate/components/budget-info/components/budget-table/budget-table.component';
import { MatIconModule } from '@angular/material/icon';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { CreateBudgetComponent } from './simulate/components/budget-info/components/create-budget/create-budget.component';
import { MatMenuModule } from '@angular/material/menu';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  
  suppressScrollY: true

};


@NgModule({
  declarations: [
    SimulateComponent,
    ReceivablesSimulateComponent,
    PayablesSimulateComponent,
    TimeseriesComponent,
    BudgetInfoComponent,
    BudgetTableComponent,
    CreateBudgetComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatIconModule,
    PerfectScrollbarModule,
    MatMenuModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ]
})
export class SimulateModule { }
