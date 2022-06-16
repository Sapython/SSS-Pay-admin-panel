import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { MembersComponent } from './members.component';
import { TransferRetailerComponent } from './transfer-retailer/transfer-retailer.component';

const routes: Routes = [
  { path: '', component: MembersComponent },
  { path: 'add-member', component: AddMemberComponent },
  { path:'transferRetail', component:TransferRetailerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersRoutingModule {}
