import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterComponent,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:"", component:RegisterComponent}
    ])
  ]
})
export class RegisterModule { }
