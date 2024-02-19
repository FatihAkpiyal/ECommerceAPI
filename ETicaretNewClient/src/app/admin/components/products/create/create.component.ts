import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { FileUploadComponent, FileUploadOptions } from '../../../../services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule,FileUploadComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  providers:[ProductService,NgxSpinnerService,AlertifyService]
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(private productService: ProductService, spiner: NgxSpinnerService,
    private alertify: AlertifyService) {
    super(spiner)
  }
  ngOnInit(): void {

  }

  
  @Output() createdProduct:EventEmitter<Create_Product> = new EventEmitter();
  @Output() fileUploadOptions: Partial<FileUploadOptions> = {
    action:"upload",
    controller:"product",
    explanation:"Resimleri Sürükleyin veya seçin..",
    isAdminPage:true,
    accept:".png, .jpg, .jpeg, .json"
  };

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner();
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);
     
    this.productService.create(create_product, () => {
      this.hideSpinner();
      this.alertify.message("Ürün Başarıyla eklenmiştir.", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
      this.createdProduct.emit(create_product);
    }, errorMessage=>{
      this.alertify.message(errorMessage, 
        {
        dismissOthers:true,
        messageType:MessageType.Error,
        position:Position.TopRight
      });
    });
  }
}

    // if(!name.value){
    //   this.alertify.message("Lütfen ürün adı giriniz!", 
    //     {
    //     dismissOthers:true,
    //     messageType:MessageType.Error,
    //     position:Position.TopRight
    //   });
    //   return;
    // }

    // if(parseInt(stock.value)){
    //   this.alertify.message("Lütfen Stok bilgisi giriniz!", 
    //     {
    //     dismissOthers:true,
    //     messageType:MessageType.Error,
    //     position:Position.TopRight
    //   });
    //   return;
    // }

    

 
