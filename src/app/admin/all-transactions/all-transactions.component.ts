import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { Transaction } from 'src/app/structures/transaction.structure';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss'],
})
export class AllTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  userNames: { [key: string]: string };
  totalBalance: number = 0;

  constructor(
    private databaseService: DatabaseService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.transactions = [];
    this.databaseService.getCustomers().then((customers: any) => {
      customers.forEach((customer: any) => {
        this.databaseService
          .getTransactions(customer.id)
          .then((transactions: any) => {
            transactions.forEach((transaction: any) => {
              this.transactions.push({
                id: transaction.id,
                ...transaction.data(),
              });
            });
          });
      });
    });
  }
  viewDetails(transaction: any) {
    this.dialog.open(TransactionDetailComponent, { data: transaction });
  }
}
