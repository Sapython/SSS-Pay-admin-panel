import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { OngoingComponent } from './ongoing/ongoing.component';
import { TicketsComponent } from './tickets.component';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [{ path: '', component: TicketsComponent },
{path: 'detail', component:DetailComponent},
{path: 'ongoing', component:OngoingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes),
  MatSelectModule],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
