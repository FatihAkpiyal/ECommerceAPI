import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet} from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { ComponentsModule } from './admin/components/components.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule,} from '@angular/common/http';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { SelectProductImageDialogComponent } from './dialogs/select-product-image-dialog/select-product-image-dialog.component';
import { JWT_OPTIONS, JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { Router } from 'express';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    LayoutComponent,ComponentsModule,RouterModule,NgxSpinnerModule,
    HttpClientModule,DeleteDialogComponent,SelectProductImageDialogComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[
    {provide:"baseUrl",useValue:"https://localhost:7092/api", multi: true}
  ] 
})
export class AppComponent {
  title = 'ETicaretNewClient';

  constructor(){
    
  }

  

}

