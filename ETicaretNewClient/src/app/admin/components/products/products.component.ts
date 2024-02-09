import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers:[HttpClientService]
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService, private httpClientService:HttpClientService){
    super(spinner)
  }

  ngOnInit(): void {
      this.showSpinner();
      this.httpClientService.get({
        controller:"product"
      
      }).subscribe(data => console.log(data));

      // this.httpClientService.post({
      //   controller:"product"
      // },{
      //   name:"Montesorri",
      //   stock:100,
      //   price:15
      // }).subscribe();

      this.httpClientService.put({
        controller:"product",
      },{
        id:"57094168-16d9-4c3d-9158-98e8aaabce7e",
        name:"HEBELE",
        stock:31,
        price:12
      }).subscribe()
  }
}
