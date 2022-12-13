import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { AdminComponent } from './admin.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full',
        canActivate: [AdminGuard],
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'allTransactions',
        loadChildren: () =>
          import('./all-transactions/all-transactions.module').then(
            (m) => m.AllTransactionsModule
          ),
        canActivate: [AdminGuard],
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('./wallet/wallet.module').then((m) => m.WalletModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'members',
        loadChildren: () =>
          import('./members/members.module').then((m) => m.MembersModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'kyc',
        loadChildren: () => import('./kyc/kyc.module').then((m) => m.KycModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'manage',
        loadChildren: () =>
          import('./manage/manage.module').then((m) => m.ManageModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'bulk-sms',
        loadChildren: () =>
          import('./bulk-sms/bulk-sms.module').then((m) => m.BulkSMSModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'tickets',
        loadChildren: () =>
          import('./tickets/tickets.module').then((m) => m.TicketsModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
        canActivate: [AdminGuard],
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountModule),
        canActivate: [AdminGuard],
      },
      {
        path: 'charges',
        loadChildren: () =>
          import('./charges/charges.module').then((m) => m.ChargesModule),
      },
      {
        path: 'commission',
        loadChildren: () =>
          import('./commission/commission.module').then(
            (m) => m.CommissionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
