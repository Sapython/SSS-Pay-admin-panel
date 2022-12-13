import { MatIconModule } from '@angular/material/icon';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { DetailComponent } from './detail/detail.component';
import { UnreslovedComponent } from './unresloved/unresloved.component';
import { ResolvedComponent } from './resolved/resolved.component';
import { OngoingComponent } from './ongoing/ongoing.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { TicketItemComponent } from './ticket-item/ticket-item.component';
import { MatButtonModule } from '@angular/material/button';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu'; 

@NgModule({
  declarations: [
    TicketsComponent,
    DetailComponent,
    UnreslovedComponent,
    ResolvedComponent,
    OngoingComponent,
    TicketItemComponent,
    AddTicketComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    WidgetsModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class TicketsModule { }
