import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../providers/data.provider';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public dataProvider:DataProvider,public authService:AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
  }
}
