import { Component, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { ServerService } from 'src/app/services/server.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PromoteUserComponent } from './promote-user/promote-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  newMembers: any[] = [];

  constructor(
    private databaseService: DatabaseService,
    private dialog: MatDialog,
    private serverService: ServerService,
    private dataProvider: DataProvider
  ) {}

  ngOnInit(): void {
    this.databaseService.getCustomers().then((data: any) => {
      this.newMembers = [];
      data.forEach((element: any) => {
        this.newMembers.push(element.data());
      });
      console.log(this.newMembers);
    });
  }
  getDate(date: any) {
    if (date) {
      if (date instanceof Timestamp) {
        return date.toDate();
      }
      if (typeof date == 'string') {
        return new Date(date);
      }
      return date.toDate();
    }
  }
  editUser(userData: any) {
    this.dialog.open(EditUserComponent, {
      data: userData,
    });
  }
  lockUser(userId: string) {
    if (confirm('Are you sure you want to lock this user?')) {
      console.log(userId);
      this.dataProvider.pageSetting.blur = true;
      this.serverService
        .lockUser({ blockID: userId })
        .then((data: any) => {
          console.log(data);
          this.ngOnInit();
        })
        .catch((error: any) => {
          console.log(error);
        })
        .finally(() => {
          this.dataProvider.pageSetting.blur = false;
        });
    }
  }
  unlockUser(userId: string) {
    if (confirm('Are you sure you want to unlock this user?')) {
      console.log(userId);
      this.dataProvider.pageSetting.blur = true;
      this.serverService
        .unlockUser({ blockID: userId })
        .then((data: any) => {
          console.log(data);
          this.ngOnInit();
        })
        .catch((error: any) => {
          console.log(error);
        })
        .finally(() => {
          this.dataProvider.pageSetting.blur = false;
        });
    }
  }
  removeUser(userId: string) {
    if (confirm('Are you sure you want to remove this user?')) {
      console.log(userId);
      this.dataProvider.pageSetting.blur = true;
      this.serverService
        .deleteUser({ deleteUserId: userId })
        .then((data: any) => {
          console.log(data);
          this.ngOnInit();
        })
        .catch((error: any) => {
          console.log(error);
        })
        .finally(() => {
          this.dataProvider.pageSetting.blur = false;
        });
    }
  }
  promoteUser(user: any) {
    const dialog = this.dialog.open(PromoteUserComponent, {
      data: user,
    });
    dialog.componentInstance.emitAndSaveEvent.subscribe((data: any) => {
      this.dataProvider.pageSetting.blur = true;
      this.serverService.changeUserAccess(user.userId, data).then(() => {
        this.ngOnInit();
        dialog.close();
      }).catch((error: any) => {
        console.log(error);
      }).finally(() => {
        this.dataProvider.pageSetting.blur = false;
      })
    });
  }
  getType(object: any) {
    return typeof object;
  }
}
