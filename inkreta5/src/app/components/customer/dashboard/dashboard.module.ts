import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './dashboard/components/line-chart/line-chart.component';
import { CustomerInvoicelistModule } from '../invoicelist/invoicelist.module';
import { MatMenuModule } from '@angular/material/menu';
import { NotificationComponent } from './dashboard/components/notification/notification.component';
import { InvoicenotificationComponent } from './dashboard/components/invoicenotification/invoicenotification.component';
import { query } from '@angular/animations';
import { QuerynotificationComponent } from './dashboard/components/querynotification/querynotification.component';
import { TasknotificationComponent } from './dashboard/components/tasknotification/tasknotification.component';
import {  MatIconModule } from '@angular/material/icon';
import { HistoricalanalysisComponent } from './dashboard/components/historicalanalysis/historicalanalysis.component';
import { BarchartComponent } from './dashboard/components/barchart/barchart.component';
import { PiechartComponent } from './dashboard/components/piechart/piechart.component';
import { Linechart1Component } from './dashboard/components/linechart1/linechart1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HorizontalbarchartComponent } from './dashboard/components/horizontalbarchart/horizontalbarchart.component';
import { CustomtableComponent } from './dashboard/components/customtable/customtable.component';
import { FormsModule } from '@angular/forms';
import { Piechart1Component } from './dashboard/components/piechart1/piechart1.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { PaidanalysisComponent } from './dashboard/components/paidanalysis/paidanalysis.component';
import { AginganalysisComponent } from './dashboard/components/aginganalysis/aginganalysis.component';
import { TreemapComponent } from './dashboard/components/treemap/treemap.component';
import { DonutComponent } from './dashboard/components/donut/donut.component';
import { DisputeanalysisComponent } from './dashboard/components/disputeanalysis/disputeanalysis.component';
import { NgxlinechartComponent } from './dashboard/components/ngxlinechart/ngxlinechart.component';
import { MaindashboardComponent } from './dashboard/components/maindashboard/maindashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule ,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { UnpaidComponent } from './dashboard/components/unpaid/unpaid.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MainchartComponent } from './dashboard/components/mainchart/mainchart.component';
import { Ng2lineareaComponent } from './dashboard/components/ng2linearea/ng2linearea.component';
import { ChartsModule } from 'ng2-charts';
import { BarComponent } from './dashboard/components/bar/bar.component';
import { Ng2areaComponent } from './dashboard/ng2area/ng2area.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Ng2pieComponent } from './dashboard/components/ng2pie/ng2pie.component';
import { Ng2stackedbarComponent } from './dashboard/components/ng2stackedbar/ng2stackedbar.component';
import { Ng2horizontalComponent } from './dashboard/components/ng2horizontal/ng2horizontal.component';
import { MatTabsModule } from '@angular/material/tabs';
import { Ng2donutComponent } from './dashboard/components/ng2donut/ng2donut.component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { BarlineComponent } from './dashboard/components/barline/barline.component';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { Top10outstandingamountComponent } from './dashboard/components/top10outstandingamount/top10outstandingamount.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InvoiceHistoryComponent } from './dashboard/components/invoice-history/invoice-history.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  
  suppressScrollY: true

};
@NgModule({
  declarations: [
    DashboardComponent,
    LineChartComponent,
    NotificationComponent,
    InvoicenotificationComponent,
    QuerynotificationComponent,
    TasknotificationComponent,
    HistoricalanalysisComponent,
    BarchartComponent,
    PiechartComponent,
    Linechart1Component,
    HorizontalbarchartComponent,
    CustomtableComponent,
    Piechart1Component,
    PaidanalysisComponent,
    AginganalysisComponent,
    TreemapComponent,
    DonutComponent,
    DisputeanalysisComponent,
    NgxlinechartComponent,
    MaindashboardComponent,
    UnpaidComponent,
    MainchartComponent,
    Ng2lineareaComponent,
    BarComponent,
    Ng2areaComponent,
    Ng2pieComponent,
    Ng2stackedbarComponent,
    Ng2horizontalComponent,
    Ng2donutComponent,
    BarlineComponent,
    Top10outstandingamountComponent,
    InvoiceHistoryComponent
    
  ],
  imports: [
    CommonModule,
    CustomerInvoicelistModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    NgxChartsModule,
    NgxPaginationModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MatTableModule,
    ChartsModule,
    MatSidenavModule,
    MatTabsModule,
    PerfectScrollbarModule,
    dashboardRoutingModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    
  ],
})
export class DashboardModuleTwo { 
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas)
    
  }

}
