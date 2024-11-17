import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkSMSRoutingModule } from './bulk-sms-routing.module';
import { BulkSMSComponent } from './bulk-sms.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
@NgModule({
  declarations: [
    BulkSMSComponent,
    NewMessageComponent
  ],
  imports: [
    CommonModule,
    BulkSMSRoutingModule,
    WidgetsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule
  ]
})
export class BulkSMSModule { }
