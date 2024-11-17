import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { EditComponent } from './edit/edit.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AccountComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    WidgetsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AccountModule { }
