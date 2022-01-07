import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "../customer/dashboard/dashboard/dashboard.component";
import { InboxComponent } from "../customer/inbox/inbox/inbox.component";
// import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { OnboardingVerificationComponent } from "./onboarding-verification/onboarding-verification/onboarding-verification.component";



const routes: Routes = [

  { path: 'dashboard/default', component: DashboardComponent, 
    data: {
      title: 'dashboard',
      breadcrumb: [
        {
          label: 'Home',
          url: ''
        }
      ]
    }
}, 
{ path: 'inbox', component: InboxComponent, 
data: {
  title: 'dashboard',
  breadcrumb: [
    {
      label: 'Home',
      url: ''
    }
  ]
}
}, 
{ path: 'Partners', component: OnboardingVerificationComponent, 
data: {
  title: 'dashboard',
  breadcrumb: [
    {
      label: 'Home',
      url: ''
    }
  ]
}
}, 



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SystemRoutingModule { }