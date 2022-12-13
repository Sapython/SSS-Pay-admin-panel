import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { ServerService } from 'src/app/services/server.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { UserData } from 'src/app/structures/user.structure';
import { EditUserComponent } from '../dashboard/edit-user/edit-user.component';
import { PromoteUserComponent } from '../dashboard/promote-user/promote-user.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { ChangeMembersComponent } from './change-members/change-members.component';
import { DetailComponent } from './detail/detail.component';
import { TransferRetailerComponent } from './transfer-retailer/transfer-retailer.component';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: any[] = []
  selectable:boolean = false;
  mainSelected:string = '';
  constructor(private databaseService:DatabaseService,public dialog: MatDialog,private serverService:ServerService,private alertify:AlertsAndNotificationsService) { }

  ngOnInit(): void {
    this.databaseService.getAgents().then((res:any)=>{
      res.forEach((element:any) => {
        console.log(element);
        this.members.push({...element.data(),id:element.id , selected:false});
      });
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
  editUser(userData:any){
    this.dialog.open(EditUserComponent,{
      data:userData
    })
  }
  lockUser(userId:string){
    
  }
  removeUser(userId:string){
    
  }
  promoteUser(user:any){
    const dialog = this.dialog.open(PromoteUserComponent,{
      data:user,
    })
    dialog.componentInstance.emitAndSaveEvent.subscribe((data:any)=>{
      this.serverService.changeUserAccess(user.uid,data.accessLevel);   
    })
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

  getType(object:any){
    return typeof object
  }
}
