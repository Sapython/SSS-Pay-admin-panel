import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { UserData } from 'src/app/structures/user.structure';
import { Ticket } from '../tickets.structure';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent implements OnInit {
  users:UserData[] = []
  ticket:Ticket;
  valid:boolean = false;
  constructor(private databaseService:DatabaseService) { }
  ticketForm:FormGroup = new FormGroup({
    problem: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    user: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required]),
  })
  ngOnInit(): void {
    this.databaseService.getCustomers().then(users=>{
      users.forEach(user=>{
        this.users.push(user.data() as UserData)
      })
    })
    this.ticketForm.valueChanges.subscribe(()=>{
      this.addTicket()
    })
  }

  addTicket(){
    if (this.ticketForm.valid){
      this.valid = true;
      this.ticket = {
        problem:{
          subject:this.ticketForm.get('problem')?.value,
          description:this.ticketForm.get('description')?.value,
          log:[]
        },
        avatar:this.ticketForm.get('user')?.value.photoURL,
        displayName:this.ticketForm.get('user')?.value.displayName,
        date:new Date(),
        email:this.ticketForm.get('user')?.value.email,
        status:this.ticketForm.get('status')?.value,
        userId:this.ticketForm.get('user')?.value.userId
      }
    } else {
      this.valid = false;
    }
  }
}
