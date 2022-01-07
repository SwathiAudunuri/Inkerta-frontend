import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomactionComponent } from './customaction/customaction/customaction.component';



@NgModule({
  declarations: [
    CustomactionComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FontAwesomeModule
  ]
})
export class CustomerModule { }
