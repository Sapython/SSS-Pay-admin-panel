import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ViewComponent } from './view/view.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [
    ReportsComponent,
    ViewComponent,
    DownloadComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
