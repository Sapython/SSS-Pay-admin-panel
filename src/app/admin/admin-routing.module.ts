import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
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
      {
        path: 'kyc',
        loadChildren: () => import('./kyc/kyc.module').then((m) => m.KycModule),
      },
      {
        path: 'manage',
        loadChildren: () =>
          import('./manage/manage.module').then((m) => m.ManageModule),
      },
      {
        path: 'bulk-sms',
        loadChildren: () =>
          import('./bulk-sms/bulk-sms.module').then((m) => m.BulkSMSModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'tickets',
        loadChildren: () =>
          import('./tickets/tickets.module').then((m) => m.TicketsModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
