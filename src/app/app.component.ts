import { Component, OnInit } from '@angular/core';
import { AlertsAndNotificationsService } from './services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SSSPayAdminPanel';
  constructor(private alertify:AlertsAndNotificationsService) { }
  ngOnInit(){
    
  }
}
