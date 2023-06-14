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
import  {MatDialogModule } from '@angular/material/dialog'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SeeCommissionsComponent } from './see-commissions/see-commissions.component';
import { WalletManagementComponent } from './wallet-management/wallet-management.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    MembersComponent,
    DetailComponent,
    AddMemberComponent,
    TransferRetailerComponent,
    MessagesComponent,
    ChangeMembersComponent,
    SeeCommissionsComponent,
    WalletManagementComponent,
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    WidgetsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatButtonToggleModule
  ]
})
export class MembersModule { }
