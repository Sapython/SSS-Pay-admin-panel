import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { DetailComponent } from './detail/detail.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
  declarations: [
    WalletComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    WidgetsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class WalletModule { }
