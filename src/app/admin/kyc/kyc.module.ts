import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KycRoutingModule } from './kyc-routing.module';
import { KycComponent } from './kyc.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    KycComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    KycRoutingModule
  ]
})
export class KycModule { }
