import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NotificationsComponent } from '../notifications/notifications.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() pageName:string = 'provide page name as input';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}
  openMail(){}
  openNotification(){
    const dialogRef = this.dialog.open(NotificationsComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(result => {})
  }
  openSearch(){}
}
