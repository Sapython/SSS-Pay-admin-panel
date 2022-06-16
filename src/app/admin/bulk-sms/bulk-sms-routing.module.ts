import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkSMSComponent } from './bulk-sms.component';

const routes: Routes = [{ path: '', component: BulkSMSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkSMSRoutingModule { }
