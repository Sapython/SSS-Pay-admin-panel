import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { DetailComponent } from './detail/detail.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { TransferRetailerComponent } from './transfer-retailer/transfer-retailer.component';
import { MessagesComponent } from './messages/messages.component';
import { ChangeMembersComponent } from './change-members/change-members.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog'; 

import {MatSelectModule} from '@angular/material/select';
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
    MembersRoutingModule,
    WidgetsModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class MembersModule { }
