import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'allTransactions',
    loadChildren: () =>
      import('./all-transactions/all-transactions.module').then(
        (m) => m.AllTransactionsModule
      ),
  },
  {
    path: 'wallet',
    loadChildren: () =>
      import('./wallet/wallet.module').then((m) => m.WalletModule),
  },
  {
    path: 'members',
    loadChildren: () =>
      import('./members/members.module').then((m) => m.MembersModule),
  },
  { path: 'kyc', loadChildren: () => import('./kyc/kyc.module').then(m => m.KycModule) },
  { path: 'manage', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
