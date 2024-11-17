import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataProvider } from '../providers/data.provider';

@Injectable({
  providedIn: 'root'
})
export class MasterDistributorGuard implements CanActivate {
  constructor(private dataProvider:DataProvider){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.dataProvider.userData?.access.access =='masterDistributor' || this.dataProvider.userData?.access.access =='superDistributor' || this.dataProvider.userData?.access.access =='distributor' || this.dataProvider.userData?.access.access =='admin';
  }
  
}
