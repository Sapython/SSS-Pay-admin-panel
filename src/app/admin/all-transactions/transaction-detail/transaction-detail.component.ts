import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/structures/transaction.structure';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public transaction: Transaction) { }

  ngOnInit(): void {
  }

}
