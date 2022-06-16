import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./authentication/login/login.module').then(m => m.LoginModule) }, { path: 'signup', loadChildren: () => import('./authentication/signup/signup.module').then(m => m.SignupModule) }, { path: 'forgotpassword', loadChildren: () => import('./authentication/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule) }, { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: 'allTransactions', loadChildren: () => import('./all-transactions/all-transactions.module').then(m => m.AllTransactionsModule) }, { path: 'wallet', loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
