import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authentication/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./authentication/signup/signup.module').then(
        (m) => m.SignupModule
      ),
  },
  {
    path: 'forgotpassword',
    loadChildren: () =>
      import('./authentication/forgotpassword/forgotpassword.module').then(
        (m) => m.ForgotpasswordModule
      ),
  },
  {
    path: ':panel',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  },
  { path: 'r', loadChildren: () => import('./redirect/redirect.module').then(m => m.RedirectModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
