import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TicketsComponent implements OnInit {
  constructor(private dialogController:MatDialog,private databaseService:DatabaseService,private alertify:AlertsAndNotificationsService) { }

  ngOnInit(): void {
  }

  addTicket(){
    const dialog = this.dialogController.open(AddTicketComponent)
    dialog.afterClosed().subscribe(result=>{
      console.log(result)
      if (result.userId){
        this.databaseService.addTicket(result).then(()=>{
          this.alertify.presentToast('Ticket added successfully')
        }).catch(err=>{
          this.alertify.presentToast('Error adding ticket','error')
        })
      }
    })
  }
}
