import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./authentication/login/login.module').then(m => m.LoginModule) }, { path: 'signup', loadChildren: () => import('./authentication/signup/signup.module').then(m => m.SignupModule) }, { path: 'forgotpassword', loadChildren: () => import('./authentication/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
