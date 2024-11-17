import { Component, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { ServerService } from 'src/app/services/server.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { UserData } from 'src/app/structures/user.structure';
import { EditUserComponent } from '../dashboard/edit-user/edit-user.component';
import { PromoteUserComponent } from '../dashboard/promote-user/promote-user.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { ChangeMembersComponent } from './change-members/change-members.component';
import { DetailComponent } from './detail/detail.component';
import { SeeCommissionsComponent } from './see-commissions/see-commissions.component';
import { TransferRetailerComponent } from './transfer-retailer/transfer-retailer.component';
import { WalletManagementComponent } from './wallet-management/wallet-management.component';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Member[] = []
  selectable:boolean = false;
  mainSelected:string = '';
  
  constructor(private databaseService:DatabaseService,public dialog: MatDialog,private serverService:ServerService,private alertify:AlertsAndNotificationsService,public dataProvider: DataProvider) { }

  ngOnInit(): void {
    this.databaseService.getAgents().then((res:any)=>{
      this.members = []
      res.forEach(async (element:any) => {
        console.log(element);
        this.members.push({...element.data(),id:element.id , selected:false, balance:this.databaseService.getUserBalance(element.id),commission:this.databaseService.getUserCommission(element.id)});
      });
    })
  }

  addMoney(user:UserData){
    const dialogRef = this.dialog.open(WalletManagementComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if (result.type == 'credit') {
          this.databaseService.addWalletNarration(result.amount,result.narration,user.userId).then((res:any)=>{
            console.log(res);
            this.alertify.presentToast('Wallet credited successfully');
          }).catch((error:any)=>{
            console.log(error); 
            this.alertify.presentToast(error.message,'error');
          })
        } else {
          this.databaseService.deductWalletNarration(result.amount,result.narration,user.userId).then((res:any)=>{
            console.log(res);
            this.alertify.presentToast('Wallet debited successfully');
          }).catch((error:any)=>{
            console.log(error);
            this.alertify.presentToast('Insufficient balance','error');
          })
        }
      }
    })
  }
  moreDetail(user:UserData){
    const dialogRef = this.dialog.open(DetailComponent,{
      data:user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  changeMembership(){
    const dialogRef = this.dialog.open(ChangeMembersComponent,{
      data:this.members
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  transferRetail(){
    // filter out members with distributors level access
    const distributors = this.members.filter((member:any)=>member.access.access == 'distributor');
    console.log(distributors);
    if (distributors.length > 0) {
      const dialog = this.dialog.open(TransferRetailerComponent,{
        data:{distributors:distributors,type:''},
      })
    } else {
      this.alertify.presentToast('No distributor found','error');
    }
  }
  selectCounter(){
    const count = this.members.filter((member:any)=>member.selected).length;
    console.log('count==>',count)
    return count
  }

  addMember(){
    const dialog = this.dialog.open(AddMemberComponent,{
      data:{}
    })
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

  showCommissions(members:any[]){
    const dialog = this.dialog.open(SeeCommissionsComponent,{data:members})
  }
}

interface Member extends UserData {
  commission:Promise<any[]>;
  balance:Promise<number|string>;
  selected:boolean;
  id:string;
}