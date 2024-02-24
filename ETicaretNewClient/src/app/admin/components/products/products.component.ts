import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Create_Product } from '../../../contracts/create_product';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DeleteDirective } from '../../../directives/admin/delete.directive';
import { AlertifyService } from '../../../services/admin/alertify.service';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../../dialogs/delete-dialog/delete-dialog.component';
import { SelectProductImageDialogComponent } from '../../../dialogs/select-product-image-dialog/select-product-image-dialog.component';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, MatSidenavModule,CreateComponent,ListComponent,
    DeleteDialogComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [HttpClientService,AlertifyService,NgxSpinnerService]
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner();
    
  }

  @ViewChild(ListComponent) listComponents:ListComponent;
  createdProduct(createdProduct:Create_Product){
    this.listComponents.getProducts();
  }
}

// this.httpClientService.get<Product[]>({
//   controller: "product"

// }).subscribe(data => console.log(data));



// this.httpClientService.post({
//   controller:"product"
// },{
//   name:"Montesorri",
//   stock:100,
//   price:15
// }).subscribe();

// this.httpClientService.put({
//   controller:"product",
// },{
//   id:"57094168-16d9-4c3d-9158-98e8aaabce7e",
//   name:"HEBELE",
//   stock:31,
//   price:12
// }).subscribe()

// this.httpClientService.delete({
//   controller:"product/"},"ae907d4f-3f8a-4eeb-9a49-5e800bfda57f").subscribe();

// this.httpClientService.get({
//   baseUrl:"https://jsonplaceholder.typicode.com",
//   controller:"posts"
// }).subscribe(data=> console.log(data));