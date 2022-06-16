import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkSMSRoutingModule } from './bulk-sms-routing.module';
import { BulkSMSComponent } from './bulk-sms.component';


@NgModule({
  declarations: [
    BulkSMSComponent
  ],
  imports: [
    CommonModule,
    BulkSMSRoutingModule,
    WidgetsModule
  ]
})
export class BulkSMSModule { }
