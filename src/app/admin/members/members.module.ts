import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { DetailComponent } from './detail/detail.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { TransferRetailerComponent } from './transfer-retailer/transfer-retailer.component';
import { MessagesComponent } from './messages/messages.component';
import { ChangeMembersComponent } from './change-members/change-members.component';


@NgModule({
  declarations: [
    MembersComponent,
    DetailComponent,
    AddMemberComponent,
    TransferRetailerComponent,
    MessagesComponent,
    ChangeMembersComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
