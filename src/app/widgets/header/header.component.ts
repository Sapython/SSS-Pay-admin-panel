import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Functions } from '@angular/fire/functions';
import { MatDialog } from '@angular/material/dialog';
import { httpsCallable } from '@firebase/functions';
import { ServerService } from 'src/app/services/server.service';
import { NotificationsComponent } from '../notifications/notifications.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() pageName: string = 'provide page name as input';
  constructor(
    public dialog: MatDialog,
    private serverFunction: Functions,
    private serverService: ServerService
  ) {}

  ngOnInit(): void {}
  openMail() {
    //  const data = httpsCallable(this.serverFunction,'addMessage');
    //  data({message:'hello'}).then(res=>{
    //     console.log(res);
    //  })
    const dialogRef = this.dialog.open(NotificationsComponent, {
      restoreFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {})
  }
  openNotification() {
    const dialogRef = this.dialog.open(NotificationsComponent, {
      restoreFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  openSearch() {
    this.serverService.checkAuth();
  }
}
