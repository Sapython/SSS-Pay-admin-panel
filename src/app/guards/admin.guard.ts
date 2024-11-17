import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataProvider } from '../providers/data.provider';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private dataProvider: DataProvider,private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.dataProvider.loggedIn){
      let url =state.url.split('/')[2]
      let urls:any = this.dataProvider.allowedPanels
      console.log(url,urls,(url in urls) && urls[url].includes(this.dataProvider.userData?.access?.access || ''));
      return (url in urls) && urls[url].includes(this.dataProvider.userData?.access?.access || '')
    } else {
      this.router.navigate(['/login']);
      return false;
    };
  }
  
  
}
