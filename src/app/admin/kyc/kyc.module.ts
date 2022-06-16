import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KycRoutingModule } from './kyc-routing.module';
import { KycComponent } from './kyc.component';
import { DetailComponent } from './detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';
import { WidgetsModule } from 'src/app/widgets/widgets.module';



@NgModule({
  declarations: [
    KycComponent,
    DetailComponent
  ],
  imports:[
    CommonModule,
    KycRoutingModule,
    MatIconModule,
    FlexLayoutModule,
    WidgetsModule,
  ]
})
export class KycModule { }
