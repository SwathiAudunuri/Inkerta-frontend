import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicedetailsComponent } from './invoicedetails/invoicedetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvoicelistModule } from '../invoicelist/invoicelist.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    InvoicedetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    InvoicelistModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class InvoicedetailsModule { }
