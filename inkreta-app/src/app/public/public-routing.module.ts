import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnqSuccessComponent } from './components/enq-success/enq-success.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerOnbordingComponent } from './components/onboarding/customer-onbording/customer-onbording.component';

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
    component: CustomerOnbordingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}