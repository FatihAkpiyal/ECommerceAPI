import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { User } from '../../../../Entities/user';
import { Create_user } from '../../../contracts/users/create_users';
import { Observable, firstValueFrom } from 'rxjs';
import { Token } from '../../../contracts/token/token';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { TokenResponse } from '../../../contracts/token/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService: HttpClientService, private toastrService : CustomToastrService) { }


  async create(user:User): Promise<Create_user>{
    const observable: Observable<Create_user | User> = this.httpClientService.post<Create_user | User>({
      controller:"users"

    },user);

    return await firstValueFrom(observable) as Create_user;
  }

  async login(userNameOrEmail:string, password:string, callBackFunction?: ()=> void): Promise<any>{
   const observable:Observable<any | TokenResponse> = this.httpClientService.post<any | TokenResponse>({
      controller:"users",
      action:"login"
    }, { userNameOrEmail, password })

    const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse;

    if(tokenResponse)
      {
        localStorage.setItem("accessToken",tokenResponse.token.accessToken);
        
        this.toastrService.message("Kullanıcı girişi başarıyla sağlanmıştır.", "Giriş Başarılı", {
          messageType:ToastrMessageType.Success,
          position:ToastrPosition.TopRight
            })
      }
    callBackFunction();
  }

}
