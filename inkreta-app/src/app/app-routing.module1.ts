// import {NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
//  import { AuthGuard } from './auth/auth.guard';
// import { DashboardComponent } from './components/vendor/dashboard/dashboard/dashboard.component';
// import { InvoicedetailsComponent } from './components/customer/admin/invoicedetails/invoicedetails/invoicedetails.component';
// import { InvoicelistComponent } from './components/vendor/invoicelist/invoicelist/invoicelist.component';
// import { PaybleComponent } from './components/vendor/payble/payble.component';

// import { TodolistComponent } from './components/todolist/todolist.component';
// import { UsersComponent } from './components/users/users.component';
// import { RecformComponent } from './components/vendor/recipientmapping/recform/recform.component';
// import { RecgridComponent } from './components/vendor/recipientmapping/recgrid/recgrid.component';
// import { RecupdateformComponent } from './components/vendor/recipientmapping/recupdateform/recupdateform.component';
// import { RecviewformComponent } from './components/vendor/recipientmapping/recviewform/recviewform.component';
// import { LayoutComponent } from './layout/layout/layout.component';
// import { VendormappingformComponent } from './components/customer/admin/vendormapping/vendormappingform/vendormappingform.component';
// import { VendormappinggridComponent } from './components/customer/admin/vendormapping/vendormappinggrid/vendormappinggrid.component';
// import { HistoricalanalysisComponent } from './components/vendor/dashboard/dashboard/components/historicalanalysis/historicalanalysis.component';
// import { ProfilemanagementComponent } from './components/vendor/profilemanagement/profilemanagement/profilemanagement.component';
// import { UsermanagementComponent } from './components/vendor/usermanagement/usermanagement/usermanagement.component';
// const routes: Routes = [
// {
//   path:'',
//   loadChildren: ()=>import('./public/public-routing.module').then(m=>m.PublicRoutingModule)
// },

// {

//   //   path:'app/vendor_manager',
// //  component:LayoutComponent,  
//   // loadChildren: ()=>import('./components/vendor/vendor.module').then(m=>m.PublicRoutingModule),

//   path:'app',
//   component:LayoutComponent,  


//   children: [
//     { 
//       path: "vendor_manager/dashboard/default",
//       component:  DashboardComponent,
//       canActivate: [AuthGuard], 

//       data: {
//         title: 'dashboard',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: ''
//           }
//         ]
//       },
//     },
//     { 
//       path: "vendor_manager/dashboard/historical_analysis",
//       component:  HistoricalanalysisComponent,

//       data: {
//         title: 'dashboard_history_1',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard/default'
//           },
//           {
//             label: 'dashboard1',
//             url: ''
//           }
//         ]
//       },
//     },
//     {
//       path: "vendor_manager/paybles",
//       component: PaybleComponent
//     },
//     {
//       path: "vendor_manager/recievable",
//       component: PaybleComponent   
//    },
  
   
//     {
//       path: "partner_manager/recgrid",
//       component:RecgridComponent,
//       data: {
//         title: 'RecgridPage',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard'
//           },
//           {
//             label: 'RecipientGrid',
//             url: 'partner_manager/recgrid'
//           }
//         ]
//       },
//     },
//     {
//       path: "partner_manager/recform",
//       component:RecformComponent,
//       data: {
//         title: 'RecgridPage',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard'
//           },
//           {
//             label: 'RecipientForm',
//             url: 'partner_manager/recform'
//           }
//         ]
//       },
//     },
//     {
//       path:"partner_manager/recviewform/:id",
//       component :RecviewformComponent,
//       data: {
//         title: 'RecgridPage',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard'
//           },
//           {
//             label: 'RecipientGrid',
//             url: 'partner_manager/recgrid'
//           },
//           {
//             label: 'RecipientView',
//             url: 'partner_manager/recviewform/:id'
//           }
//         ]
//       },
//     },
//     {
//       path:"partner_manager/recupdateform/:uid",
//       component: RecupdateformComponent,
//       data: {
//         title: 'RecgridPage',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard'
//           },
//           {
//             label: 'RecipientUpdate',
//             url: 'partner_manager/recupdateform'
//           }
//         ]
//       },
//     },



//     // {
//     //   path: "vendor_manager/mappings/recipient_mapping",
//     //   component:RecgridComponent,
//     //   data: {
//     //     title: 'RecgridPage',
//     //     breadcrumb: [
//     //       {
//     //         label: 'Home',
//     //         url: 'vendor_manager/dashboard'
//     //       },
//     //       {
//     //         label: 'RecipientGrid',
//     //         url: ''
//     //       }
//     //     ]
//     //   },
//     // },
//     {
//       path:'',
//       loadChildren: ()=>import('../app/components/vendor/recipientmappings/recipientmappings-routing.module').then(m=>m.RecipientmappingsRoutingModule)
//     },
//     // {
//     //   path: "vendor_manager/recform",
//     //   component:RecformComponent,
//     //   data: {
//     //     title: 'RecgridPage',
//     //     breadcrumb: [
//     //       {
//     //         label: 'Home',
//     //         url: 'vendor_manager/dashboard'
//     //       },
//     //       {
//     //         label: 'RecipientForm',
//     //         url: ''
//     //       }
//     //     ]
//     //   },
//     // },
//     {
//       path:"vendor_manager/recviewform/:id",
//       component :RecviewformComponent,
//       data: {
//         title: 'RecgridPage',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard'
//           },
//           {
//             label: 'RecipientView',
//             url: ''
//           }
//         ]
//       },
//     },
//     {
//       path:"vendor_manager/recupdateform/:uid",
//       component: RecupdateformComponent,
//       data: {
//         title: 'RecgridPage',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard'
//           },
//           {
//             label: 'RecipientUpdate',
//             url: ''
//           }
//         ]
//       },
//     },
 
   
  
//    {
//       path: "vendor_manager/users",
//       // component:UsersComponent 
//       component:UsermanagementComponent,
//       data: {
//         title: 'page6',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard/default'
//           },
//           {
//             label: 'User Management',
//             url: ''
//           }
//         ]
//       },
//     },
//     {
//       path: "vendor_manager/profile",
//       component:ProfilemanagementComponent,
//       data: {
//         title: 'page6',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard/default'
//           },
//           {
//             label: 'Profile Management',
//             url: ''
//           }
//         ]
//       },
//     },
   
//         {
//       path: "vendor_manager/todo",
//       component: TodolistComponent,
//       data: {
//         title: 'page2',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard/default'
//           },
//           {
//             label: 'Todo',
//             url: ''
//           }
//         ]
//       },
//     },
   
    

//     {
//       path: "vendor_manager/invoice_list",
//       component: InvoicelistComponent,
//       data: {
//         title: 'page3',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard/default'
//           },
//           {
//             label: 'Invoice',
//             url: ''
//           }
//         ]
//       },
//     },
//     {
//       path:"vendor_manager/invoicedetails/:id",
//       component:InvoicedetailsComponent,
//       data: {
//         title: 'page5',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard/default'
//           },
//           {
//             label: 'Invoice list',
//             url: ''
//           }
//         ]
//       },
//     },
//     {
//       path: "vendor_manager/mappings/supplier_mapping",
//       component: VendormappinggridComponent,
//       data: {
//         title: 'page3',
//         breadcrumb: [
//           {
//             label: 'Home',
//             url: 'vendor_manager/dashboard'
//           },
//           {
//             label: 'Supplier',
//             url: ''
//           }
//         ]
//       },
//     },
  
 
//         {
//       path: "vendor_manager/vendorform",
//       component: VendormappingformComponent
//     },
//         {
//       path: "vendor_manager/vendorgrid",
//       component: VendormappinggridComponent
//     },
//      {
//       path:"vendor_manager/invoicedetails/:id",
//       component:InvoicedetailsComponent
//     },
  
//   ]
// }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
