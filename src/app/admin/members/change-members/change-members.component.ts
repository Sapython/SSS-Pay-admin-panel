import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData } from 'src/app/structures/user.structure';

@Component({
  selector: 'app-change-members',
  templateUrl: './change-members.component.html',
  styleUrls: ['./change-members.component.scss']
})
export class ChangeMembersComponent implements OnInit {
  changeMembershipForm:FormGroup = new FormGroup({
    memberId: new FormControl('',[Validators.required]),
    memberType:new FormControl('',[Validators.required]),
    package:new FormControl('',[Validators.required])
  })
  memberTypes:any[]=[
    {
      viewValue:  'Retailer',
      value: 'retailer'
    },
    {
      viewValue:  'Distributor',
      value: 'distributor'
    },
  ]
  packages:any[]=[
    {
      viewValue:  'Basic',
      value: 'basic'
    },
    {
      viewValue:  'Standard',
      value: 'standard'
    },
    {
      viewValue:  'Premium',
      value: 'premium'
    },
  ]
  constructor(@Inject(MAT_DIALOG_DATA) public user: UserData) { }

  ngOnInit(): void {
  } 
  changeMembership(){

  }
}
