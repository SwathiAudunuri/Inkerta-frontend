import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './dashboard/components/line-chart/line-chart.component';
import { InvoicelistModule } from '../invoicelist/invoicelist.module';
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
    
    
  ],
  imports: [
    CommonModule,
    InvoicelistModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    NgxChartsModule,
    NgxPaginationModule,
    FontAwesomeModule
  ]
})
export class DashboardModule { 
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas)
    
  }

}
