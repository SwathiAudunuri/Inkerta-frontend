import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCard, MatCardModule } from '@angular/material/card';
import { SubmenuComponent } from './layout/components/submenu/submenu.component';
import {MatMenuModule} from '@angular/material/menu';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
//import {MatBreadcrumbModule} from "mat-breadcrumb";
//import { Ng7BootstrapBreadcrumbModule } from 'ng7-bootstrap-breadcrumb';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { NgbDropdownConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatRippleModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemingComponent } from './layout/components/theming/theming.component';
import {MatRadioModule} from '@angular/material/radio';
import { PagetitleComponent } from './layout/components/pagetitle/pagetitle.component';
import {MatExpansionModule} from '@angular/material/expansion';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  
  suppressScrollY: true

};
@NgModule({
  declarations: [
    LayoutComponent,
    SubmenuComponent,
    ThemingComponent,
    PagetitleComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    PerfectScrollbarModule,
    NgDynamicBreadcrumbModule,
    NgbModule,
    MatRippleModule,
    MatButtonModule,
    FontAwesomeModule,
    MatRadioModule,
    MatExpansionModule



  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    NgbDropdownConfig
  ],
  exports:[
    LayoutComponent
  ]})
export class LayoutModule { }
