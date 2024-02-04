import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ToastrService, provideToastr } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType } from './services/ui/custom-toastr.service';
import { UiModule } from './ui/ui.module';
declare var $: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent,RouterModule,UiModule
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[
    provideAnimations(),
  ]
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService:CustomToastrService){
    toastrService.message("Merhaba","Gençay",ToastrMessageType.Info);
    toastrService.message("Merhaba","Gençay",ToastrMessageType.Error);
    toastrService.message("Merhaba","Gençay",ToastrMessageType.Success);
    toastrService.message("Merhaba","Gençay",ToastrMessageType.Warning);
  }
  
}

