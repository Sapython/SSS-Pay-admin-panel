import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { UserData } from 'src/app/structures/user.structure';
import { DetailComponent } from './detail/detail.component';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: UserData[] = []
  constructor(private databaseService:DatabaseService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.databaseService.getAgents().then((res:any)=>{
      res.forEach((element:any) => {
        console.log(element);
        this.members.push(element.data() as UserData);
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
}
