import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';
declare var alertify:any;


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private alertify:AlertifyService){

  }
  ngOnInit():void{
    
  }

  m(){
    this.alertify.message("Merhaba", MessageType.Success, Position.BottomLeft,5,true)
  }
  d(){
    alertify.dismissAll();
  }
}
