import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../repeated/common-profile/profile/profile.component';
// import { PatnersComponent } from '../repeated/patners/patners/patners.component';
// import { PatnersComponent } from '../common/patners/patners/patners.component';
// import { OnboardingVerificationComponent } from '../system/onboarding-verification/onboarding-verification/onboarding-verification.component';
import { TodolistComponent } from '../vendor/todolist/todolist.component'; 
import { CommunicationMappingComponent } from './communication-mapping/communication-mapping.component';
import { CustomactionComponent } from './customaction/customaction/customaction.component';
import { HistoricalanalysisComponent } from './dashboard/dashboard/components/historicalanalysis/historicalanalysis.component';
// import { TodolistComponent } from '../todolist/todolist.component';
// import { HistoricalanalysisComponent } from './dashboard/dashboard/components/historicalanalysis/historicalanalysis.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { InboxComponent } from './inbox/inbox/inbox.component';
import { InvoicedetailsComponent } from './invoicedetails/invoicedetails/invoicedetails.component';
import { HistoricalComponent } from './invoicelist/Historical/historical.component';
import { CustomerInvoicelistComponent } from './invoicelist/invoicelist/invoicelist.component';
import { LogmanagementComponent } from './logmanagement/logmanagement/logmanagement.component';
import { ProfileUserComponent } from './profile/profile/profile-user/profile-user.component';
import { ProfileManagementComponent } from './profilemanagement/profile-management/profile-management.component';
// import { ProfilemanagementComponent } from './profilemanagement/profilemanagement/profilemanagement.component';
import { RolesComponent } from './roles/roles/roles.component';
import { SupplierMappingComponent } from './supplier-mapping/supplier-mapping/supplier-mapping.component';
//import { RecgridComponent } from './recipientmapping/recgrid/recgrid.component';
import { UsermanagementComponent } from './usermanagement/usermanagement/usermanagement.component';
import { VendormappingComponent } from './vendormapping/vendormapping.component';
// import { InboxComponent } from './inbox/inbox/inbox.component';
// import { InvoicelistComponent } from './invoicelist/invoicelist/invoicelist.component';
// import { LogmanagementComponent } from './logmanagement/logmanagement/logmanagement.component';
// import { ProfilemanagementComponent } from './profilemanagement/profilemanagement/profilemanagement.component';
// import { RecformComponent } from './recipientmapping/recform/recform.component';
// import { RecgridComponent } from './recipientmapping/recgrid/recgrid.component';
// import { RecupdateformComponent } from './recipientmapping/recupdateform/recupdateform.component';
// import { RecviewformComponent } from './recipientmapping/recviewform/recviewform.component';
//import { UsermanagementComponent } from './usermanagement/usermanagement/usermanagement.component';
// import { VendorInvoicelistComponent } from './vendor-invoicelist/vendor-invoicelist/vendor-invoicelist.component';
// import { TodoComponent } from '../common/todolist/todo/todo.component';
// import { VendormappinggridComponent } from '../customer/admin/vendormapping/components/vendormappinggrid/vendormappinggrid.component';
//import { InvoicedetailsComponent } from '../customer/admin/invoicedetails/invoicedetails/invoicedetails.component';

const routes: Routes = [

  { path: 'dashboard/default', component: DashboardComponent, 
    data: {
      title: 'dashboard',
      breadcrumb: [
        {
          label: 'Home',
          url: 'dashboard/default'
        },
        {
          label: 'Payables',
          url: ''
        }
      ]
    }
}, 
{ path: 'dashboard/payable_default', component: DashboardComponent, 
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
  path: "logmanagement",
  component:  LogmanagementComponent,
  data: {
    title: 'Logs',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Logs',
        url: ''
      }
    ]
  }
},
{ 
  path: "dashboard/historical_analysis",
  component:  HistoricalanalysisComponent,

  data: {
    title: 'Payables history ',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Payables Historical',
        url: ''
      }
    ]
  },
},
{ 
  path: "dashboard/payable_historical_analysis",
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
  component: CustomerInvoicelistComponent,
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
{
  path: "roles",
  component: RolesComponent,
  data: {
    // title: 'Invoice List',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Roles',
        url: ''
      }
    ]
  },
},    
{
  path: "customactions",
  component: CustomactionComponent,
  data: {
    // title: 'Invoice List',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Customactions',
        url: ''
      }
    ]
  },
},

{
  path: "historical_invoices",
  component: HistoricalComponent,
  data: {
    title: 'Invoice List',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Payables History',
        url: ''
      }
    ]
  },
}, 

{
  path: "payables",
  component: CustomerInvoicelistComponent,
  data: {
    title: 'Invoice List',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Payables',
        url: ''
      }
    ]
  },
},         

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
// { 
//   path: "todos",
//   component: TodolistComponent,
//   data: {
//     title: 'Todo',
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
  path: "profileview",
  // component: ProfileUserComponent,
  component:ProfileComponent,
  data: {
    title: 'Profile',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Profile',
        url: ''
      }
    ]
  },
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
  path: "mappings/outbound_connectors",
  // path: "mappings/recipient_mapping",
  // component:SupplierMappingComponent,
  component:CommunicationMappingComponent,
  data: {
    title: 'Outbound Connector',
    breadcrumb: [
      {
        label: 'Home',
        url: 'dashboard/default'
      },
      {
        label: 'Outbound Connector',
        url: ''
      }
    ]
  },
},

// {
//   path: "recform",
//   component:RecformComponent,
//   data: {
//     title: 'Recipient Form',
//     breadcrumb: [
//       {
//         label: 'Home',
//         url: 'dashboard/default'
//       },
//       {
//         label: 'RecipientForm',
//         url: ''
//       }
//     ]
//   },
// },
// {
//   path:"recviewform/:id",
//   component :RecviewformComponent,
//   data: {
//     title: 'Recipient View',
//     breadcrumb: [
//       {
//         label: 'Home',
//         url: 'dashboard/default'
//       },
//       {
//         label: 'RecipientView',
//         url: ''
//       }
//     ]
//   },
// },
// {
//   path:"recupdateform/:uid",
//   component: RecupdateformComponent,
//   data: {
//     title: 'Recipient Update',
//     breadcrumb: [
//       {
//         label: 'Home',
//         url: 'dashboard/default'
//       },
//       {
//         label: 'RecipientUpdate',
//         url: ''
//       }
//     ]
//   },
// },
{
  path:"inbox",
  // component:PatnersComponent,
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
          // component:ProfilemanagementComponent,
          component:ProfileManagementComponent,
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
  component:SupplierMappingComponent,
  // component: VendormappingComponent,
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
export class CustomerRoutingModule { }


