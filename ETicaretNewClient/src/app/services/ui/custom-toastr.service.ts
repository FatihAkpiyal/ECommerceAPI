import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr:ToastrService) {}

  message(message:string, title:string, toastrOptions:Partial<ToastrOptions>){
    this.toastr[toastrOptions.messageType](message,title,{
      positionClass:toastrOptions.position
    });
  }
}

export class ToastrOptions{
  messageType:ToastrMessageType;
  position:ToastrPosition
}

export enum ToastrMessageType{
  Success="success",
  Info ="info",
  Error="error",
  Warning="warning",
}

export enum ToastrPosition{
  TopRight="toast-top-right",
  BottomRight="toast-bottom-right",

}
