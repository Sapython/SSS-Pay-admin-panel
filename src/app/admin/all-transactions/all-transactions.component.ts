import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Transaction } from 'src/app/structures/transaction.structure';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss'],
})
export class AllTransactionsComponent implements OnInit {
  transactions: Transaction[];
  totalBalance: number = 0;

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.databaseService.getTransactions().then((docs) => {
      this.transactions = [];
      docs.forEach((doc) => {
        const transaction = { transactionId: doc.id, ...doc.data() } as Transaction;
        this.transactions.push(transaction);
      });
    });
  }
}
