import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTransactionsRoutingModule } from './all-transactions-routing.module';
import { AllTransactionsComponent } from './all-transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AllTransactionsComponent,
    TransactionDetailComponent,
  ],
  imports: [
    CommonModule,
    AllTransactionsRoutingModule,
    WidgetsModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class AllTransactionsModule { }
