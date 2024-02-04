import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { LayoutComponent } from './layout.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    MatSidenavModule,
    RouterOutlet,
    LayoutComponent
  ]
})
export class LayoutModule { }
