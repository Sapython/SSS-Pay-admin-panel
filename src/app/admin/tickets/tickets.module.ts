import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { DetailComponent } from './detail/detail.component';
import { UnreslovedComponent } from './unresloved/unresloved.component';
import { ResolvedComponent } from './resolved/resolved.component';
import { OngoingComponent } from './ongoing/ongoing.component';


@NgModule({
  declarations: [
    TicketsComponent,
    DetailComponent,
    UnreslovedComponent,
    ResolvedComponent,
    OngoingComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule { }
