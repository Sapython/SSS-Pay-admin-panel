import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { EditComponent } from './edit/edit.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AccountComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    WidgetsModule,
    MatIconModule
  ]
})
export class AccountModule { }
