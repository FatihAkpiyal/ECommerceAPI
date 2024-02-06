import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersComponent,
    ProductsComponent,
    DashboardComponent,
    OrdersComponent
  ]
})
export class ComponentsModule { }
