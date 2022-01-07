import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    { path: 'default', component: DashboardComponent, 

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
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class dashboardRoutingModule { }