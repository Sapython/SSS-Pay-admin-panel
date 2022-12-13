import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { Ticket } from '../tickets.structure';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.scss']
})
export class ResolvedComponent implements OnInit, OnDestroy {
  items: Ticket[] = [];
  constructor(
    private databaseService: DatabaseService,
    private alertify: AlertsAndNotificationsService
  ) {}
  ticketSubscription:Subscription = Subscription.EMPTY;
  ngOnDestroy(): void {
    this.ticketSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.databaseService.getTickets('resolved').subscribe((data: any) => {
      this.items = [];  
      data.forEach((doc: any) => {
        this.items.push({ ...doc.data(), id: doc.id });
      });
    });
  }

  setStatus(id: string, status: 'ongoing' | 'unresolved' | 'resolved') {
    if (id && status) {
      this.databaseService
        .setStatus(id, status)
        .then(() => {
          this.alertify.presentToast('Status Updated');
        })
        .catch((err) => {
          this.alertify.presentToast('Error Updating Status');
        });
    }
  }
}