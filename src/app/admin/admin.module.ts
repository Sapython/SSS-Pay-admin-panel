import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatIconModule } from '@angular/material/icon';
import { WidgetsModule } from '../widgets/widgets.module';
@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, MatIconModule, WidgetsModule],
})
export class AdminModule {}
