import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTransactionsRoutingModule } from './all-transactions-routing.module';
import { AllTransactionsComponent } from './all-transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import { MatButtonModule } from '@angular/material/button';
import { SeeCommissionsComponent } from './see-commissions/see-commissions.component';
@NgModule({
  declarations: [
    AllTransactionsComponent,
    TransactionDetailComponent,
    SeeCommissionsComponent,
  ],
  imports: [
    CommonModule,
    AllTransactionsRoutingModule,
    WidgetsModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatButtonModule
  ]
})
export class AllTransactionsModule { }
