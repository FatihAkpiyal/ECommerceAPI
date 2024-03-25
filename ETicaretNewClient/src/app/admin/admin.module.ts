import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsModule } from './components/components.module';
import { JwtModule } from '@auth0/angular-jwt';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    LayoutComponent,
    ComponentsModule,
    // JwtModule.forRoot({
    //   config:{
    //     tokenGetter:()=> localStorage.getItem("accessToken"),
    //     allowedDomains:["localhost:7092"]
    //   }
    // })
  ]
})
export class AdminModule { }
