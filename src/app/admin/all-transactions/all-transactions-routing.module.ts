import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTransactionsComponent } from './all-transactions.component';

const routes: Routes = [{ path: '', component: AllTransactionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTransactionsRoutingModule { }
