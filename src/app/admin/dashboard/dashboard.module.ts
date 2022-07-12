import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { MatIconModule } from '@angular/material/icon';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PromoteUserComponent } from './promote-user/promote-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatSelectModule} from '@angular/material/select'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DashboardComponent,
    EditUserComponent,
    PromoteUserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    WidgetsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
  ]
})
export class DashboardModule { }
