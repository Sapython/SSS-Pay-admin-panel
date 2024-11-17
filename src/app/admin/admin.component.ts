import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProvider } from '../providers/data.provider';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public dataProvider:DataProvider,public authService:AuthenticationService,private activatedRoute:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params:any) => {
    //   if (this.allowedPanels.includes(params.panel)) {
    //     this.dataProvider.page = params.panel;
    //   } else {
    //     this.dataProvider.page = 'user';
    //     this.router.navigate(['../login']);
    //   }
    // })
  }
  logout(){
    this.authService.logout();
  }
}
