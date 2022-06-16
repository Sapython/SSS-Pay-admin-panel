import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { DetailComponent } from './detail/detail.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';


@NgModule({
  declarations: [
    WalletComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    WidgetsModule
  ]
})
export class WalletModule { }
