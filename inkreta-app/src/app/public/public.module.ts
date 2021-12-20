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
import { CustomerOnbordingComponent } from './components/onboarding/customer-onbording/customer-onbording.component';
import { IdentificationComponent } from './components/onboarding/customer-onbording/Components/Identification.component';
import { Contact_informationComponent } from './components/onboarding/customer-onbording/Components/Contactinformation.component';
import { AdditionalDetails1Component } from './components/onboarding/customer-onbording/Components/AdditionalDetails1.component';
import { AdditionalDetails2Component } from './components/onboarding/customer-onbording/Components/AdditionalDetails2.component';
import { DialogComponent } from './components/onboarding/customer-onbording/Components/dialog.component';
import { TermsAndConditionsComponent } from './components/onboarding/customer-onbording/Components/terms-and-conditions.component';
import { AdditionalDetailsComponent } from './components/onboarding/customer-onbording/Components/additional-details.component';
import { ActivationComponent } from './components/onboarding/customer-onbording/Components/activation.component';
import { CompletionComponent } from './components/onboarding/customer-onbording/Components/completion.component';
import { CanceldialogComponent } from './components/onboarding/customer-onbording/Components/canceldialog.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ServiceService } from './components/onboarding/customer-onbording/service.service';
import { AppComponent } from '../app.component';
@NgModule({
  declarations: [
  
    EnqSuccessComponent,
    LoginComponent,
    CustomerOnbordingComponent,
    IdentificationComponent,
    Contact_informationComponent,
    AdditionalDetails1Component,
    AdditionalDetails2Component,
    DialogComponent,
    TermsAndConditionsComponent,
    AdditionalDetailsComponent,
    ActivationComponent,
    CompletionComponent,
    CanceldialogComponent,
  ],
  entryComponents : [DialogComponent],
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
    MatSlideToggleModule
  ],
  exports:[
    EnqSuccessComponent,
    LoginComponent
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
  
})
export class PublicModule { }
