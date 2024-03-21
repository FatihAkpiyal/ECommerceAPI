import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { User } from '../../../../Entities/user';
import { Create_user } from '../../../contracts/users/create_users';
import { Observable, firstValueFrom } from 'rxjs';
import { Token } from '../../../contracts/token/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService: HttpClientService) { }


  async create(user:User): Promise<Create_user>{
    const observable: Observable<Create_user | User> = this.httpClientService.post<Create_user | User>({
      controller:"users"

    },user);

    return await firstValueFrom(observable) as Create_user;
  }

  async login(userNameOrEmail:string, password:string, callBackFunction?: ()=> void): Promise<any | Token>{
   const observable:Observable<any | Token> = this.httpClientService.post<any | Token>({
      controller:"users",
      action:"login"
    }, { userNameOrEmail, password })

    const token: Token = await firstValueFrom(observable);
    callBackFunction();
  }

}
