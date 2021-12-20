import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TodoComponent } from '../common/todolist/todo/todo.component';
// import { VendormappinggridComponent } from '../customer/admin/vendormapping/components/vendormappinggrid/vendormappinggrid.component';
//import { InvoicedetailsComponent } from '../customer/admin/invoicedetails/invoicedetails/invoicedetails.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { UsersComponent } from '../users/users.component';
import { HistoricalanalysisComponent } from './dashboard/dashboard/components/historicalanalysis/historicalanalysis.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { InvoicedetailsComponent } from './invoicedetails/invoicedetails/invoicedetails.component';
import { InvoicelistComponent } from './invoicelist/invoicelist/invoicelist.component';
import { ProfileUserComponent } from './profile/profile/profile-user/profile-user.component';
import { ProfilemanagementComponent } from './profilemanagement/profilemanagement/profilemanagement.component';
import { RecformComponent } from './recipientmapping/recform/recform.component';
import { RecgridComponent } from './recipientmapping/recgrid/recgrid.component';
import { RecupdateformComponent } from './recipientmapping/recupdateform/recupdateform.component';
import { RecviewformComponent } from './recipientmapping/recviewform/recviewform.component';
import { UsermanagementComponent } from './usermanagement/usermanagement/usermanagement.component';
import { VendormappingComponent } from '../customer/admin/vendormapping/vendormapping.component';
import { InboxComponent } from '../inbox/inbox/inbox.component';
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
{ 
  path: "dashboard/historical_analysis",
  component:  HistoricalanalysisComponent,

  data: {
    title: 'dashboard_history_1',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'dashboard1',
        url: ''
      }
    ]
  },
},
{
  path: "invoice",
  component: InvoicelistComponent,
  data: {
    title: 'Invoice List',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Invoice',
        url: ''
      }
    ]
  },
},
// {
//   path: "todo",
//   component: TodoComponent,
//   data: {
//     title: 'page2',
//     breadcrumb: [
//       {
//         label: 'Home',
//         url: 'dashboard/default'
//       },
//       {
//         label: 'Todo',
//         url: ''
//       }
//     ]
//   },
// },
{
  path: "todo",
  component: TodolistComponent,
  data: {
    title: 'Todo',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Todo',
        url: ''
      }
    ]
  },
},
{
  path: "profileview",
  component: ProfileUserComponent,
},
{
  path:"invoicedetails/:id",
  component:InvoicedetailsComponent,
  data: {
    title: 'Invoice Details',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Invoice list',
        url: ''
      }
    ]
  },
},
{
  path: "mappings/recipient_mapping",
  component:RecgridComponent,
  data: {
    title: 'Recipient List',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'RecipientGrid',
        url: ''
      }
    ]
  },
},

{
  path: "recform",
  component:RecformComponent,
  data: {
    title: 'Recipient Form',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'RecipientForm',
        url: ''
      }
    ]
  },
},
{
  path:"recviewform/:id",
  component :RecviewformComponent,
  data: {
    title: 'Recipient View',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'RecipientView',
        url: ''
      }
    ]
  },
},
{
  path:"recupdateform/:uid",
  component: RecupdateformComponent,
  data: {
    title: 'Recipient Update',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'RecipientUpdate',
        url: ''
      }
    ]
  },
},
{
  path:"inbox",
  component:InboxComponent,
  data: {
    title: 'Inbox',
    breadcrumb: [
      {
        label: 'Home',
        url: 'vendor_manager/dashboard/default'
      },
      {
        label: 'inbox',
        url: ''
      }
    ]
  },
},
 {
          path: "users",
          component:UsermanagementComponent,
          data: {
            title: 'User',
            breadcrumb: [
              {
                label: 'Home',
                url: 'dashboard/default'
              },
              {
                label: 'User Management',
                url: ''
              }
            ]
          },
        },
        {
          path: "profile",
          component:ProfilemanagementComponent,
          data: {
            title: 'Profile',
            breadcrumb: [
              {
                label: 'Home',
                url: 'dashboard/default'
              },
              {
                label: 'Profile Management',
                url: ''
              }
            ]
          },
        },
{
  path: "mappings/supplier_mapping",
  component: VendormappingComponent,
  data: {
    title: 'Supplier',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Supplier',
        url: ''
      }
    ]
  },
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }


