import { Component, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  newMembers: any[] = []

  constructor(private databaseService:DatabaseService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.databaseService.getCustomers().then((data:any)=>{
      this.newMembers = []
      data.forEach((element:any) => {
        this.newMembers.push(element.data());
      });
      console.log(this.newMembers);
    })
  }
  getDate(date:any){
    if(date){
      if (date instanceof Timestamp) {
        return date.toDate();
      }
      if(typeof date == 'string'){
        return new Date(date);
      }
      return date.toDate();
    }
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
  promoteUser(userId:string){
    
  }
}
