import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  constructor(private formBuilder:FormBuilder) {}

  frm:FormGroup;

  ngOnInit(): void{
    this.frm= this.formBuilder.group({
      adSoyad: ["", [
         Validators.required,
         Validators.maxLength(50), 
         Validators.minLength(3)]],
      kullaniciAdi:["", [
        Validators.required,
        Validators.maxLength(50), 
        Validators.minLength(3)]],
      email: ["", [
        Validators.required,
        Validators.maxLength(250), 
        Validators.email]],
      sifre:[""],
      sifreTekrar:[""]
    })
  }

  get component(){
    return this.frm.controls;
  }

  submitted:boolean=false;
  onSubmit(data: any){
    this.submitted=true;
    var c = this.component
    debugger;
  }

}
