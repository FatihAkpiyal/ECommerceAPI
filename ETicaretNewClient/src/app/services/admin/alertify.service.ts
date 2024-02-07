import { Injectable } from '@angular/core';
declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message:string, options:Partial<AlertifyOptions> ){
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position', options.position);
    const msj = alertify[options.messageType](message);
    if(options.dismissOthers)
    msj.dismissOthers();
  }

  dismiss(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  messageType:MessageType=MessageType.Success;
  position:Position= Position.BottomLeft;
  delay:number=3;
  dismissOthers:boolean=false;

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