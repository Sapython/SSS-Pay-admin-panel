import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { NotificationsComponent } from './notifications/notifications.component';
import {MatDialogModule} from '@angular/material/dialog'; const components = [HeaderComponent];

@NgModule({
  declarations: [components, NotificationsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports:components
})
export class WidgetsModule { }
