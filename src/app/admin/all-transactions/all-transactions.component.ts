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
  userNames: { [key: string]: string };
  totalBalance: number = 0;

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.databaseService.getTransactions().then((docs) => {
      this.transactions = [];
      this.userNames = {};
      docs.forEach((doc) => {
        const transaction = {
          transactionId: doc.id,
          ...doc.data(),
        } as Transaction;
        this.transactions.push(transaction);

        // Get sender's name
        if (!(transaction.senderId in this.userNames)) {
          this.databaseService.getUser(transaction.senderId).then((user) => {
            this.userNames[transaction.senderId] = user.data()!['name'];
          });
        }

        // Get receiver's name
        if (!(transaction.receiverId in this.userNames)) {
          this.databaseService.getUser(transaction.receiverId).then((user) => {
            this.userNames[transaction.receiverId] = user.data()!['name'];
          });
        }
      });
    });
  }
}
