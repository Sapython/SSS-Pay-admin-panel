import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTransactionsRoutingModule } from './all-transactions-routing.module';
import { AllTransactionsComponent } from './all-transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';


@NgModule({
  declarations: [
    AllTransactionsComponent,
    TransactionDetailComponent
  ],
  imports: [
    CommonModule,
    AllTransactionsRoutingModule
  ]
})
export class AllTransactionsModule { }
