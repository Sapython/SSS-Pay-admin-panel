import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { UserData } from 'src/app/structures/user.structure';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-bulk-sms',
  templateUrl: './bulk-sms.component.html',
  styleUrls: ['./bulk-sms.component.scss'],
})
export class BulkSMSComponent implements OnInit {
  customers: any = [];
  constructor(
    public dialog: MatDialog,
    private databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.databaseService.getCustomers().then((docs: any) => {
      docs.forEach((customer: any) => {
        if (customer.data().phoneNumber) {
          this.customers.push({...customer.data(),selected:false});
        }
      });
    });
  }
  openMessage() {
    const dialogRef = this.dialog.open(NewMessageComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  selectAll(){
    this.customers.forEach((customer:any)=>{
      customer.selected = true;
    })
  }
  
}
