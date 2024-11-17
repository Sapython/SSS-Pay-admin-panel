import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProvider } from './providers/data.provider';
import { AuthenticationService } from './services/authentication.service';
import { AlertsAndNotificationsService } from './services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SSSPayAdminPanel';
  constructor(private alertify:AlertsAndNotificationsService,private authService:AuthenticationService,private router:Router,public dataProvider:DataProvider) { }
  ngOnInit(){
    if (this.authService.isLoggedIn){
      this.router.navigate(['login']);
    } else {
      if (this.authService.isLoggedIn){
        this.router.navigate(['account']);
      }
    }
  }
}
