import { Component } from '@angular/core';
import { UserService } from '../../../services/common/models/user.service';
import { BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[UserService,HttpClientService]
})
export class LoginComponent extends BaseComponent  {

  constructor(private userService:UserService,spinner:NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit():void {

  }

  async login(userNameOrEmail :string, password:string){
    this.showSpinner();
    await this.userService.login(userNameOrEmail,password, () => this.hideSpinner());
  }
}
