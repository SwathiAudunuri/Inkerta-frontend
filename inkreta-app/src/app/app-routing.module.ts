import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/vendor/dashboard/dashboard/dashboard.component';
//import { InvoicedetailsComponent } from './components/customer/admin/invoicedetails/invoicedetails/invoicedetails.component';
import { InvoicelistComponent } from './components/vendor/invoicelist/invoicelist/invoicelist.component';
import { PaybleComponent } from './components/vendor/payble/payble.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { UsersComponent } from './components/users/users.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HistoricalanalysisComponent } from './components/vendor/dashboard/dashboard/components/historicalanalysis/historicalanalysis.component';
//import { InvoicedetailsComponent } from './components/vendor/invoicedetails/invoicedetails/invoicedetails.component';
import { InboxComponent } from './components/inbox/inbox/inbox.component';
const routes: Routes = [
{
  path:'',
  loadChildren: ()=>import('./public/public-routing.module').then(m=>m.PublicRoutingModule)
},
{
  path:'app/vendor_manager',
  component:LayoutComponent,  
  loadChildren: ()=>import('./components/vendor/vendor-routing.module').then(m=>m.VendorRoutingModule)

},
 
// {
//   path:'app/vendor_manager',
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
//       path: "partner_manager/enquires",
//       component:EnquirylistsComponent
//     },
//    /*  {
//       path: "/partner_manager/enquiryview/:uid",
//       component: <PrivateRoute component={Enquiryviewsaga} path="/partner_manager/enquiryview/:uid" />
//     }, {
//       path: "/partner_manager/paybles",
//       component: <PrivateRoute component={Payble} path="/partner_manager/paybles" />
//     }, */
   
//    {
//       path: "vendor_manager/recipients",
//       component: RecipientstestComponent
//     },
//    {
//       path: "vendor_manager/users",
//       component:UsersComponent 
//     },
//    {
//       path: "vendor_manager/knowledge",
//       component: KnowledgeComponent
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
//     // {
//     //   path:"vendor_manager/invoicedetails/:id",
//     //   component:InvoicedetailsComponent,
//     //   data: {
//     //     title: 'page5',
//     //     breadcrumb: [
//     //       {
//     //         label: 'Home',
//     //         url: 'vendor_manager/dashboard/default'
//     //       },
//     //       {
//     //         label: 'Invoice list',
//     //         url: ''
//     //       }
//     //     ]
//     //   },
//     // },

    
    
//     /*  {
//       path: "/vendor_manager/newrecipientform",
//       component: <PrivateRoute component={RecipientNewform} path="/vendor_manager/newrecipientform" />
//     },

//     {
//       path: "/vendor_manager/recipientview/:uid",
//       component: <PrivateRoute component={RecipientView} path="/customer_admin/recipientview/:uid" />
//     },
//     {
//       path: "/partner_manager/dashboard",
//       component: <PrivateRoute component={Dashboard} path="/partner_manager/dashboard" />
//     },
//     {
//       path: "/partner_manager/partners",
//       component: <PrivateRoute component={Partners} path="/partner_manager/partners" />
//     },
//     {
//       path: "/partner_manager/invite_partner",
//       component: <PrivateRoute component={PartnerInviteSaga} path="/partner_manager/invite_partner" />
//     },
//     // {
//     //   path: "/partner_manager/invite_partner",
//     //   component: <PrivateRoute component={PartnerInvite} path="/partner_manager/invite_partner" />
//     // },
//     // {
//     //     path: "/partner_manager/todo",
//     //     component: <PrivateRoute component={TodoList} path="/partner_manager/todo" />
//     //   },
//     {
//       path: "/partner_manager/todo",
//       component: <PrivateRoute component={Todolistsaga} path="/partner_manager/todo" />
//     },
//     {
//       path: "/customer_admin/todo",
//       component: <PrivateRoute component={TodoList} path="/customer_admin/todo" />
//     },
//     {
//       path: "/partner_manager/todo",
//       component: <PrivateRoute component={TodoList} path="/partner_manager/todo" />
//     },
//     {
//       path: "/customer_admin/todo_update/:id",
//       component: <PrivateRoute component={UpdateToDo} path="/customer_admin/todo_update/:id" />
//     },
//     {
//       path: "/customer_manager/dashboard",
//       component: <PrivateRoute component={Dashboard} path="/customer_manager/dashboard" />
//     },
 
//     {
//       path: "/customer_manager/recipient_mapping",
//       component: <PrivateRoute component={Recipientstest} path="/customer_manager/recipient_mapping" />
//     },
//     {
//       path: "/vendor_manager/dashboard",
//       component: <PrivateRoute component={Dashboard} path="/vendor_manager/dashboard" />
//     },
//     {
//       path: "/vendor_manager/todo",
//       component: <PrivateRoute component={Todolistsaga} path="/vendor_manager/todo" />
//     },
//     {
//       path: "/vendor_manager/recipients",
//       component: <PrivateRoute component={Recipientstest} path="/vendor_manager/recipients" />
//     },
//     {
//       path: "/vendor_manager/invoice_list",
//       component: <PrivateRoute component={Invoice} path="/vendor_manager/dashboard" />
//     },
//     {
//       path: "/vendor_manager/invoice_upload",
//       component: <PrivateRoute component={UploadInvoice} path="/vendor_manager/invoice_upload" />
//     },
//      {
//               path: "/vendor_manager%20/product_catalogue",
//               component: <PrivateRoute component={ProductCatalogue} path="/vendor_manager/dashboard" />
//           },
    
//       {
//               path: "/vendor_manager/json_upload",
//               component: <PrivateRoute component={UploadJsonInvoice} path="/vendor_manager/json_upload" />
//           },
//     {
//       path: "/vendor_manager/invoice_upload/:refId",
//       component: <PrivateRoute component={UploadInvoice} path="/vendor_manager/invoice_upload" />
//     },
//     {
//       path: "/vendor_manager/invoice_view/:refId",
//       component: <PrivateRoute component={ViewInvoice} path="/vendor_manager/invoice_view" />
//     },
//     {
//       path: "/partner_manager/partners/view_invitation/:registrartionId",
//       component: <PrivateRoute component={ViewInvitation} path="/partner/invitations/view_invitation/:registrartionId" />
//     },
//     {
//       path: "/vendor_manager/vendorform",
//       component: <PrivateRoute component={Vendorform} path="/vendor_manager/vendorform" />
//     },
//     {
//       path: "/vendor_manager/vendorform/:uid",
//       component: <PrivateRoute component={Vendorform} path="/vendor_manager/vendorform/:uid " />
//     },
//     {
//       path: "/vendor_manager/vendorgrid",
//       component: <PrivateRoute component={VendorGrid} path="/vendor_manager/vendorgrid" />
//     },
//     {
//       path: "/vendor_manager/MappedVendorList",
//       component: <PrivateRoute component={MappedVendorsList} path="/vendor_manager/MappedVendorList" />
//     },
//     {
//       path: "/vendor_manager/vendorsearch",
//       component: <PrivateRoute component={VendorSearch} path="/vendor_manager/vendorsearch" />
//     }, */
//   ]
// },
// {
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
//       path: "partner_manager/enquires",
//       component:EnquirylistsComponent
//     },
//    /*  {
//       path: "/partner_manager/enquiryview/:uid",
//       component: <PrivateRoute component={Enquiryviewsaga} path="/partner_manager/enquiryview/:uid" />
//     }, {
//       path: "/partner_manager/paybles",
//       component: <PrivateRoute component={Payble} path="/partner_manager/paybles" />
//     }, */
   
//    {
//       path: "vendor_manager/recipients",
//       component: RecipientstestComponent
//     },
//    {
//       path: "vendor_manager/users",
//       component:UsersComponent 
//     },
//    {
//       path: "vendor_manager/knowledge",
//       component: KnowledgeComponent
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
//     // {
//     //   path:"vendor_manager/invoicedetails/:id",
//     //   component:InvoicedetailsComponent,
//     //   data: {
//     //     title: 'page5',
//     //     breadcrumb: [
//     //       {
//     //         label: 'Home',
//     //         url: 'vendor_manager/dashboard/default'
//     //       },
//     //       {
//     //         label: 'Invoice list',
//     //         url: ''
//     //       }
//     //     ]
//     //   },
//     // },

    
    
//     /*  {
//       path: "/vendor_manager/newrecipientform",
//       component: <PrivateRoute component={RecipientNewform} path="/vendor_manager/newrecipientform" />
//     },

//     {
//       path: "/vendor_manager/recipientview/:uid",
//       component: <PrivateRoute component={RecipientView} path="/customer_admin/recipientview/:uid" />
//     },
//     {
//       path: "/partner_manager/dashboard",
//       component: <PrivateRoute component={Dashboard} path="/partner_manager/dashboard" />
//     },
//     {
//       path: "/partner_manager/partners",
//       component: <PrivateRoute component={Partners} path="/partner_manager/partners" />
//     },
//     {
//       path: "/partner_manager/invite_partner",
//       component: <PrivateRoute component={PartnerInviteSaga} path="/partner_manager/invite_partner" />
//     },
//     // {
//     //   path: "/partner_manager/invite_partner",
//     //   component: <PrivateRoute component={PartnerInvite} path="/partner_manager/invite_partner" />
//     // },
//     // {
//     //     path: "/partner_manager/todo",
//     //     component: <PrivateRoute component={TodoList} path="/partner_manager/todo" />
//     //   },
//     {
//       path: "/partner_manager/todo",
//       component: <PrivateRoute component={Todolistsaga} path="/partner_manager/todo" />
//     },
//     {
//       path: "/customer_admin/todo",
//       component: <PrivateRoute component={TodoList} path="/customer_admin/todo" />
//     },
//     {
//       path: "/partner_manager/todo",
//       component: <PrivateRoute component={TodoList} path="/partner_manager/todo" />
//     },
//     {
//       path: "/customer_admin/todo_update/:id",
//       component: <PrivateRoute component={UpdateToDo} path="/customer_admin/todo_update/:id" />
//     },
//     {
//       path: "/customer_manager/dashboard",
//       component: <PrivateRoute component={Dashboard} path="/customer_manager/dashboard" />
//     },
 
//     {
//       path: "/customer_manager/recipient_mapping",
//       component: <PrivateRoute component={Recipientstest} path="/customer_manager/recipient_mapping" />
//     },
//     {
//       path: "/vendor_manager/dashboard",
//       component: <PrivateRoute component={Dashboard} path="/vendor_manager/dashboard" />
//     },
//     {
//       path: "/vendor_manager/todo",
//       component: <PrivateRoute component={Todolistsaga} path="/vendor_manager/todo" />
//     },
//     {
//       path: "/vendor_manager/recipients",
//       component: <PrivateRoute component={Recipientstest} path="/vendor_manager/recipients" />
//     },
//     {
//       path: "/vendor_manager/invoice_list",
//       component: <PrivateRoute component={Invoice} path="/vendor_manager/dashboard" />
//     },
//     {
//       path: "/vendor_manager/invoice_upload",
//       component: <PrivateRoute component={UploadInvoice} path="/vendor_manager/invoice_upload" />
//     },
//      {
//               path: "/vendor_manager%20/product_catalogue",
//               component: <PrivateRoute component={ProductCatalogue} path="/vendor_manager/dashboard" />
//           },
    
//       {
//               path: "/vendor_manager/json_upload",
//               component: <PrivateRoute component={UploadJsonInvoice} path="/vendor_manager/json_upload" />
//           },
//     {
//       path: "/vendor_manager/invoice_upload/:refId",
//       component: <PrivateRoute component={UploadInvoice} path="/vendor_manager/invoice_upload" />
//     },
//     {
//       path: "/vendor_manager/invoice_view/:refId",
//       component: <PrivateRoute component={ViewInvoice} path="/vendor_manager/invoice_view" />
//     },
//     {
//       path: "/partner_manager/partners/view_invitation/:registrartionId",
//       component: <PrivateRoute component={ViewInvitation} path="/partner/invitations/view_invitation/:registrartionId" />
//     },
//     {
//       path: "/vendor_manager/vendorform",
//       component: <PrivateRoute component={Vendorform} path="/vendor_manager/vendorform" />
//     },
//     {
//       path: "/vendor_manager/vendorform/:uid",
//       component: <PrivateRoute component={Vendorform} path="/vendor_manager/vendorform/:uid " />
//     },
//     {
//       path: "/vendor_manager/vendorgrid",
//       component: <PrivateRoute component={VendorGrid} path="/vendor_manager/vendorgrid" />
//     },
//     {
//       path: "/vendor_manager/MappedVendorList",
//       component: <PrivateRoute component={MappedVendorsList} path="/vendor_manager/MappedVendorList" />
//     },
//     {
//       path: "/vendor_manager/vendorsearch",
//       component: <PrivateRoute component={VendorSearch} path="/vendor_manager/vendorsearch" />
//     }, */
//   ]
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
