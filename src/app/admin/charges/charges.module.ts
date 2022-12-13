import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChargesRoutingModule } from './charges-routing.module';
import { ChargesComponent } from './charges.component';
import { AddChargeComponent } from './add-charge/add-charge.component';
import { MatIconModule } from '@angular/material/icon';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ChargesComponent,
    AddChargeComponent
  ],
  imports: [
    CommonModule,
    ChargesRoutingModule,
    WidgetsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule
  ]
})
export class ChargesModule { }
