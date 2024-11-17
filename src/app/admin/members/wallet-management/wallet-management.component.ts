import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-wallet-management',
  templateUrl: './wallet-management.component.html',
  styleUrls: ['./wallet-management.component.scss']
})
export class WalletManagementComponent implements OnInit {
  walletForm: FormGroup = new FormGroup({
    amount: new FormControl('',Validators.required),
    narration: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }

  addMoney(){
    
  }

}
