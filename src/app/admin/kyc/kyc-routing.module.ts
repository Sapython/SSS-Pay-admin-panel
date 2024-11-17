import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { KycComponent } from './kyc.component';

const routes: Routes = [
  { path: '', component: KycComponent },
  { path: 'detail', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KycRoutingModule {}
