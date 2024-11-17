import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedirectRoutingModule } from './redirect-routing.module';
import { RedirectComponent } from './redirect.component';
import { UpiCompleteComponent } from './upi-complete/upi-complete.component';


@NgModule({
  declarations: [
    RedirectComponent,
    UpiCompleteComponent
  ],
  imports: [
    CommonModule,
    RedirectRoutingModule
  ]
})
export class RedirectModule { }
