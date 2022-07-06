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


@NgModule({
  declarations: [
    TicketsComponent,
    DetailComponent,
    UnreslovedComponent,
    ResolvedComponent,
    OngoingComponent,
    TicketItemComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    WidgetsModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class TicketsModule { }
