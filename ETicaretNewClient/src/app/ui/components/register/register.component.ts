import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../../../../Entities/user';
import { UserService } from '../../../services/common/models/user.service';
import { Create_user } from '../../../contracts/users/create_users';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';
import { HttpClientService } from '../../../services/common/http-client.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers:[UserService,HttpClientService]
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private toastService: CustomToastrService) { }

  frm: FormGroup;

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      nameSurname: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)]],
      userName: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)]],
      email: ["", [
        Validators.required,
        Validators.maxLength(250),
        Validators.email]],
      password: ["", [
        Validators.required
      ]],
      passwordConfirm: ["", [
        Validators.required
      ]]
    }, {
      validators: (group: AbstractControl): ValidationErrors | null => {

        let sifre = group.get("password").value;
        let sifreTekrar = group.get("passwordConfirm").value;
        return sifre === sifreTekrar ? null : { notSame: true };

        return null;
      }
    })
  }

  get component() {
    return this.frm.controls;
  }

  submitted: boolean = false;
  async onSubmit(user: User) {
    this.submitted = true;

    if (this.frm.invalid)
      return;

    const result: Create_user = await this.userService.create(user);
    if (result.succeeded)
      this.toastService.message(result.message, "Kullanıcı Kaydı Başarılı", {
        messageType: ToastrMessageType.Success,
        position: ToastrPosition.TopRight
      })
    else
      this.toastService.message(result.message, "Hata", {
        messageType: ToastrMessageType.Error,
        position: ToastrPosition.TopRight
      })
  }

}
