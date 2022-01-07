import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { EnqSuccessComponent } from './components/enq-success/enq-success.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import { CustomerOnbordingComponent } from './components/onboarding/customer-onbording/customer-onbording.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { ServiceService } from './components/onboarding/customer-onbording/service.service';
import { AppComponent } from '../app.component';
import { VenderOnboardingComponent } from './components/onboarding/vender-onboarding/vender-onboarding.component';
import { VenderActivationComponent } from './components/onboarding/vender-onboarding/Compopnents/vender-activation/vender-activation.component';
import { VenderAdditionalDetailsComponent } from './components/onboarding/vender-onboarding/Compopnents/vender-additional-details/vender-additional-details.component';
import { VenderAdditionalDetails1Component } from './components/onboarding/vender-onboarding/Compopnents/vender-additional-details1/vender-additional-details1.component';
import { VenderAdditionalDetails2Component } from './components/onboarding/vender-onboarding/Compopnents/vender-additional-details2/vender-additional-details2.component';
import { VenderCancelDialogComponent } from './components/onboarding/vender-onboarding/Compopnents/vender-cancel-dialog/vender-cancel-dialog.component';
import { VenderCompletionComponent } from './components/onboarding/vender-onboarding/Compopnents/vender-completion/vender-completion.component';
import { VenderContactInfoComponent } from './components/onboarding/vender-onboarding/Compopnents/vender-contact-info/vender-contact-info.component';
import { VenderDialogComponent } from './components/onboarding/vender-onboarding/Compopnents/vender-dialog/vender-dialog.component';
import { VenderIdentificationComponent } from './components/onboarding/vender-onboarding/Compopnents/vender-identification/vender-identification.component';
import { VenderTermaAndConditionsComponent } from './components/onboarding/vender-onboarding/Compopnents/vender-terma-and-conditions/vender-terma-and-conditions.component';
import { VenderOnboardingService } from './components/onboarding/vender-onboarding/venderOnboardingService';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VenderMobileDialogComponent } from './components/onboarding/vender-onboarding/Compopnents/vender-mobile-dialog/vender-mobile-dialog.component';
import { CustomerOnboardingComponent } from './components/onboarding/customer-onboarding/customer-onboarding.component';
import { ActivationComponent } from './components/onboarding/customer-onboarding/Components/activation/activation.component';
import { AdditionalDetailsComponent } from './components/onboarding/customer-onboarding/Components/additional-details/additional-details.component';
import { AdditionalDetails1Component } from './components/onboarding/customer-onboarding/Components/additional-details1/additional-details1.component';
import { AdditionalDetails2Component } from './components/onboarding/customer-onboarding/Components/additional-details2/additional-details2.component';
import { CancelDialogComponent } from './components/onboarding/customer-onboarding/Components/cancel-dialog/cancel-dialog.component';
import { CompletionComponent } from './components/onboarding/customer-onboarding/Components/completion/completion.component';
import { ContactInfoComponent } from './components/onboarding/customer-onboarding/Components/contact-info/contact-info.component';
import { DialogComponent } from './components/onboarding/customer-onboarding/Components/dialog/dialog.component';
import { IdentificationComponent } from './components/onboarding/customer-onboarding/Components/identification/identification.component';
import { MobileDialogComponent } from './components/onboarding/customer-onboarding/Components/mobile-dialog/mobile-dialog.component';
import { TermsAndConditionsComponent } from './components/onboarding/customer-onboarding/Components/terms-and-conditions/terms-and-conditions.component';
import { CustomerOnboardingService } from './components/onboarding/customer-onboarding/customerOnboardingService';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FontAwesomeModule ,FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { VerifydocumentsComponent } from './components/onboarding/vender-onboarding/Compopnents/verifydocuments/verifydocuments.component';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { CustVerifydocumensComponent } from './components/onboarding/customer-onboarding/Components/cust-verifydocumens/cust-verifydocumens.component';
@NgModule({
  declarations: [
  
    EnqSuccessComponent,
    LoginComponent,
    // CustomerOnbordingComponent,
    VenderOnboardingComponent,
    VenderActivationComponent,
    VenderAdditionalDetailsComponent,
    VenderAdditionalDetails1Component,
    VenderAdditionalDetails2Component,
    VenderCancelDialogComponent,
    VenderCompletionComponent,
    VenderContactInfoComponent,
    VenderDialogComponent,
    VenderIdentificationComponent,
    VenderTermaAndConditionsComponent,
    VenderMobileDialogComponent,
    CustomerOnboardingComponent,
    ActivationComponent,
    AdditionalDetailsComponent,
    AdditionalDetails1Component,
    AdditionalDetails2Component,
    CancelDialogComponent,
    CompletionComponent,
    ContactInfoComponent,
    DialogComponent,
    IdentificationComponent,
    MobileDialogComponent,
    TermsAndConditionsComponent,
    VerifydocumentsComponent,
    CustVerifydocumensComponent,
  ],
  entryComponents : [VenderDialogComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatChipsModule,
    NgbModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    FontAwesomeModule,
    MatTableModule,
    MatDividerModule
  ],
  exports:[
    EnqSuccessComponent,
    LoginComponent
  ],
  providers: [VenderOnboardingService,CustomerOnboardingService],
  bootstrap: [AppComponent]
  
})
export class PublicModule {
  constructor(library:FaIconLibrary){
    library.addIconPacks(fas)
    
  }
 }
