import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnqSuccessComponent } from './components/enq-success/enq-success.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerOnboardingComponent } from './components/onboarding/customer-onboarding/customer-onboarding.component';
// import { CustomerOnbordingComponent } from './components/onboarding/customer-onbording/customer-onbording.component';
import { VenderOnboardingComponent } from './components/onboarding/vender-onboarding/vender-onboarding.component';

const routes: Routes = [
  { path: '', component: LoginComponent, 

  data:{
    title:"Login"
  }
}, 
   { path: 'contact/success', component: EnqSuccessComponent, 
   data:{
    title:"Contact"
  }
  
  },
   {
    path: "error",
    component:ErrorComponent
  },
  {
    path: "customer_onboarding",
    component: CustomerOnboardingComponent
  },
  {
    path:"vender_onboarding",
    component:VenderOnboardingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}