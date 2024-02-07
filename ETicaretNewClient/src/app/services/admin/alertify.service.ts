import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message:string, messageType:MessageType, position:Position,delay:number=3,
    dismissOthers:boolean=false){
    alertify.set('notifier','delay', delay);
    alertify.set('notifier','position', position);
    const msj = alertify[messageType](message);
    if(dismissOthers)
    msj.dismissOthers();
  }

  dismiss(){
    alertify.dismissAll();
  }
}

export enum MessageType{
  Success="success",
  Error ="error",
  Message ="message",
  Notify="notify",
  Warning ="warning",
}

export enum Position{
  BottomLeft="bottom-left",
  TopRight="top-right",

}