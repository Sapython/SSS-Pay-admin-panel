import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { ManagePinComponent } from './manage-pin/manage-pin.component';
import { ManageNewsComponent } from './manage-news/manage-news.component';


@NgModule({
  declarations: [
    ManageComponent,
    ManagePinComponent,
    ManageNewsComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
