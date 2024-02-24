import { Component, Inject, OnInit, Output } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadComponent, FileUploadOptions } from '../../services/common/file-upload/file-upload.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListComponent } from '../../admin/components/products/list/list.component';
import { ProductService } from '../../services/common/models/product.service';
import { HttpClientService } from '../../services/common/http-client.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { List_Product_Image } from '../../contracts/list_product_image';





@Component({
  selector: 'app-select-product-image-dialog',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatDialogModule, MatButtonModule, 
    FileUploadComponent, HttpClientModule,CommonModule],
  templateUrl: './select-product-image-dialog.component.html',
  styleUrl: './select-product-image-dialog.component.scss',
  providers:[HttpClientService, ProductService,
    {provide:"baseUrl",useValue:"https://localhost:7092/api", multi: true}
  ]
})
export class SelectProductImageDialogComponent extends BaseDialog<SelectProductImageDialogComponent> implements OnInit {
    constructor(dialogRef:MatDialogRef<SelectProductImageDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: SelectProductImageState | string,
      private productService:ProductService){
      super(dialogRef)
    }
  

    

   @Output() options: Partial<FileUploadOptions>={
    controller:"product",
     action: "upload",
     queryString: `id=${this.data}`,
     explanation:"Ürün Resimini seçin Veya buraya sürükkleyin..",
     accept:".png, .jpg, .jpeg, .gif",
     isAdminPage:true,
    };

    images:List_Product_Image[];

    async ngOnInit() {
      this.images= await this.productService.readImages(this.data as string);
    }
}

export enum SelectProductImageState{
  Close
}