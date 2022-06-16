import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { NotificationsComponent } from './notifications/notifications.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SmsWidgetComponent } from './sms-widget/sms-widget.component';
import { MessageWidgetComponent } from './message-widget/message-widget.component';
import { NotificationWidgetComponent } from './notification-widget/notification-widget.component'; 
const components = [HeaderComponent, SmsWidgetComponent, MessageWidgetComponent,
NotificationWidgetComponent];

@NgModule({
  declarations: [components, NotificationsComponent, MessageWidgetComponent, NotificationWidgetComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports:[components]
})
export class WidgetsModule {}
