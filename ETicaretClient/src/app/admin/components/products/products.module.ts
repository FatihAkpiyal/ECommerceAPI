import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:ProductsComponent}
      
    ])
  ]
})
export class ProductsModule { }
