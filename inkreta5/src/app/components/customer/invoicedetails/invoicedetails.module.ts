import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicedetailsComponent } from './invoicedetails/invoicedetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerInvoicelistModule } from '../invoicelist/invoicelist.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SupplierBuyerComponent } from './invoicedetails/Components/supplier-buyer/supplier-buyer.component';
import { PaymentDetailsComponent } from './invoicedetails/Components/payment-details/payment-details.component';
import { DispatchShiptoComponent } from './invoicedetails/Components/dispatch-shipto/dispatch-shipto.component';
import { EwayBillDetailsComponent } from './invoicedetails/Components/eway-bill-details/eway-bill-details.component';



@NgModule({
  declarations: [
    InvoicedetailsComponent,
    SupplierBuyerComponent,
    PaymentDetailsComponent,
    DispatchShiptoComponent,
    EwayBillDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    CustomerInvoicelistModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class InvoicedetailsModuleTwo { }
