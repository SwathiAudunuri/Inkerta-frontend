import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./common-profile/profile/profile.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { PatnersComponent } from "./patners/patners/patners.component";
import { BudgetInfoComponent } from "./simulate/simulate/components/budget-info/budget-info.component";
import { SimulateComponent } from "./simulate/simulate/simulate.component";

const routes: Routes = [
    { path: 'Partners', component:PatnersComponent ,
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
    { path: 'dashboard', component:DashboardComponent ,
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
    { path: 'simulate', component:SimulateComponent ,
    data: {
        title: 'Simulate cash flows',
        breadcrumb: [
          {
            label: 'Home',
            url: ''
          },
          {
            label: 'Simulate',
            url: ''
          }
        ]
      }
    },
    { path: 'simulate/budget', component:BudgetInfoComponent ,
    data: {
        title: 'Budget Details',
        breadcrumb: [
          {
            label: 'Home',
            url: ''
          },
          {
            label: 'Simulate',
            url: 'common/simulate'
          },
          {
            label: 'Budget',
            url: ''
          }
        ]
      }
    },
    { path: 'profile', component:ProfileComponent,
    data: {
        title: 'Profile',
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
  export class RepeatedRoutingModule { }


