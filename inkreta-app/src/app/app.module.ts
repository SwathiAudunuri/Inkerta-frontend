import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule , Title} from '@angular/platform-browser';
import { ProfilemanagementModule } from './components/vendor/profilemanagement/profilemanagement.module';
import { UsermanagementModule } from './components/vendor/usermanagement/usermanagement.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import { LayoutModule } from './layout/layout.module';
//import { DashboardComponent } from './components/vendor/dashboard/dashboard/dashboard.component';
import { PaybleComponent } from './components/vendor/payble/payble.component';
import { StoreModule } from '@ngrx/store';
import { UsersComponent } from './components/users/users.component';
import { tokenInterceptorProviders, TokenInterceptorService } from './token-interceptor.service';
import { TodolistComponent } from './components/todolist/todolist.component';
import { loginReducer } from "./reducers/login.reducer";
import { PublicModule } from './public/public.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio'
import {MatCardModule} from '@angular/material/card';
import { UpdatetodoComponent } from './components/todolist/components/updatetodo/updatetodo.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {  MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { metaReducers } from "./app.reducer";
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {MatDialogModule} from '@angular/material/dialog';
import { RecformComponent } from './components/vendor/recipientmapping/recform/recform.component';
import { RecgridComponent } from './components/vendor/recipientmapping/recgrid/recgrid.component';
import { VendormappinggridComponent } from './components/customer/admin/vendormapping/components/vendormappinggrid/vendormappinggrid.component';
import { VendormappingformComponent } from './components/customer/admin/vendormapping/components/vendormappingform/vendormappingform.component';
import { VendorselectiondialogComponent } from './components/customer/admin/vendormapping/components/vendorselectiondialog/vendorselectiondialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
// import {MatBreadcrumbModule} from "mat-breadcrumb";
import { RecviewformComponent } from './components/vendor/recipientmapping/recviewform/recviewform.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RecupdateformComponent } from './components/vendor/recipientmapping/recupdateform/recupdateform.component';
// import { Ng7BootstrapBreadcrumbModule } from 'ng7-bootstrap-breadcrumb';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InvoicelistModule } from './components/vendor/invoicelist/invoicelist.module';
import { GlobalErrorHandlerService } from './global-error-handler.service';
// import { InvoicedetailsComponent } from './components/customer/admin/invoicedetails/invoicedetails/invoicedetails.component';
//import { InvoicedetailsModule } from './components/customer/admin/invoicedetails/invoicedetails.module';
import { invoiceListReducer } from "./components/customer/admin/invoicelist/Reducers/invoicelist.reducers";
import {DialogexampleComponent} from "./components/vendor/recipientmapping/dialogexample/dialogexample.component"
import { NgxEditorModule } from 'ngx-editor';
// import { QuillModule } from 'ngx-quill';
import { DashboardModule } from './components/vendor/dashboard/dashboard.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
//import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { queryListReducer } from './components/vendor/invoicelist/Reducers/querylist.reducers';
import { QueryEffects } from './components/vendor/invoicelist/Effects/querylist.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularTreeGridModule } from 'angular-tree-grid';
import { Effect3, Effects, Effects1, Effects2 } from './public/components/onboarding/customer-onbording/store/Effects';
import { emailverotp, gstreducer, saveonbording,emailver } from './public/components/onboarding/customer-onbording/store/Reducer';
import { InvoicedetailsModule } from './components/vendor/invoicedetails/invoicedetails.module';
import { ViewtodoComponent } from './components/todolist/components/viewtodo/viewtodo.component';
import { EdittodoComponent } from './components/todolist/components/edittodo/edittodo.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AudittodoComponent } from './components/todolist/components/audittodo/audittodo.component';
import {RecauditComponent} from './components/vendor/recipientmapping/recaudit/recaudit.component';
import { TaskupdatestabComponent } from './components/todolist/components/taskupdatestab/taskupdatestab.component';
import { VendormappingviewComponent } from './components/customer/admin/vendormapping/components/vendormappingview/vendormappingview.component';
import { VendormappingeditComponent } from './components/customer/admin/vendormapping/components/vendormappingedit/vendormappingedit.component';
import { VendormappingauditComponent } from './components/customer/admin/vendormapping/components/vendormappingaudit/vendormappingaudit.component';
import {VendormappingComponent} from './components/customer/admin/vendormapping/vendormapping.component'
import {TreeTableModule} from 'primeng/treetable';
import { InboxModule } from './components/inbox/inbox.module';
import { ProfileUserComponent } from './components/vendor/profile/profile/profile-user/profile-user.component';
// import { RecipientmappingsModule } from './components/vendor/recipientmappings/recipientmappings.module';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


//import { reducers,metaReducers } from './app.reducer1';
@NgModule({
  declarations: [
    AppComponent, 
    PaybleComponent,
    UsersComponent,
    TodolistComponent,
    UpdatetodoComponent,
    RecformComponent,
    DialogexampleComponent,
    RecgridComponent,
    VendormappinggridComponent,
    VendormappingformComponent,
    VendorselectiondialogComponent,
    RecviewformComponent,
    RecupdateformComponent,
    ViewtodoComponent,
    EdittodoComponent,
    AudittodoComponent, 
    VendormappingComponent,
    ProfileUserComponent,
    RecauditComponent, TaskupdatestabComponent, VendormappingviewComponent, VendormappingeditComponent, VendormappingauditComponent, 
  ],
  entryComponents :[DialogexampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    MatSortModule,
    NgMultiSelectDropDownModule,
    CoreModule,
    HttpClientModule,
    LayoutModule,
    PublicModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    StoreModule.forRoot({loginReducer,invoicelist:invoiceListReducer,querylist:queryListReducer,stepper: gstreducer,emailver,otp:emailverotp,save:saveonbording},{metaReducers}),
    EffectsModule.forRoot([QueryEffects,Effects,Effects1,Effects2,Effect3]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
     // logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
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
    LayoutModule,
    PerfectScrollbarModule,
    MatSortModule,
    NgDynamicBreadcrumbModule,
    NgbModule,
    InvoicelistModule,
    InvoicedetailsModule,
    MatButtonModule,
     NgxEditorModule,
     AngularEditorModule,
      DashboardModule,
      NgxChartsModule,
    NgxPaginationModule,
         FontAwesomeModule,
    AngularTreeGridModule,
    TreeTableModule,
     InboxModule
   
   ],
   exports:[
     UsersComponent
   ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },



  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }


