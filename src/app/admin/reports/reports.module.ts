import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ViewComponent } from './view/view.component';
import { DownloadComponent } from './download/download.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ReportsComponent,
    ViewComponent,
    DownloadComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    WidgetsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class ReportsModule { }
