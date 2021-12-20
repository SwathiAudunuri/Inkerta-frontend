import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox/inbox.component';
import { InboxInvoiceComponent } from './inbox/Components/inbox-invoice/inbox-invoice.component';
import { InboxQueryComponent } from './inbox/Components/inbox-query/inbox-query.component';
import { InboxTaskComponent } from './inbox/Components/inbox-task/inbox-task.component';
import { InvoicelistModule } from '../vendor/invoicelist/invoicelist.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuerySidenavComponent } from './inbox/Components/query-sidenav/query-sidenav.component';


@NgModule({
  declarations: [
    InboxComponent,
    InboxInvoiceComponent,
    InboxQueryComponent,
    InboxTaskComponent,
    QuerySidenavComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    InvoicelistModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    NgxPaginationModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class InboxModule { }
