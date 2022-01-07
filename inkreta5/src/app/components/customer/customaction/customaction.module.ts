import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomactionComponent } from './customaction/customaction.component';
import { CustomactionsidenavComponent } from './customaction/Components/customactionsidenav/customactionsidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { NewactionComponent } from './customaction/Components/newaction/newaction.component';
import { CustomactionsComponent } from './customaction/Components/customactions/customactions.component';
import { ActiondetailsComponent } from './customaction/Components/actiondetails/actiondetails.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfigDetailsComponent } from './customaction/Components/config-details/config-details.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  
  suppressScrollY: true

};

@NgModule({
  declarations: [
    CustomactionComponent,
    CustomactionsidenavComponent,
    NewactionComponent,
    CustomactionsComponent,
    ActiondetailsComponent,
    ConfigDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,  
    MatIconModule,
    NgxPaginationModule,
    MatChipsModule,
    MatRadioModule,
    MatDividerModule,
MatTabsModule,
NgMultiSelectDropDownModule,
ReactiveFormsModule,
FormsModule,
MatSelectModule,
PerfectScrollbarModule,
MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ],
})
export class CustomactionModule { 

  constructor(library:FaIconLibrary){
    library.addIconPacks(fas)
    
  }

}
