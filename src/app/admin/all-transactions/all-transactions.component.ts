import { Component, OnInit } from '@angular/core';
import { transaction } from 'src/app/structures/payment.structure';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
})
export class AllTransactionsComponent implements OnInit {
  totalBalance:number  = 0;
  transactions: transaction[] = [
    {
      id:'randomID',
      amount:3824,
      merchantId:'34gjh23g4jh2g334jk',
      merchantName:'Alpha Name',
      date:new Date(),
      status:'success',
      transactionId:'fdsfsdfsdfsdf7s98df798',
      referenceId:'fdsfsdfsdfsdf7s98df798',
      merchantPhoto:'https://i.pravatar.cc/300'
    },
    {
      id:'randomID2',
      amount:3824,
      merchantId:'34gjh23g4jh2g334jk',
      merchantName:'Alpha Name',
      date:new Date(),
      status:'failed',
      transactionId:'fdsfsdfsdfsdf7s98df798',
      referenceId:'fdsfsdfsdfsdf7s98df798',
      merchantPhoto:'https://i.pravatar.cc/300'
    },
    {
      id:'randomID3',
      amount:3824,
      merchantId:'34gjh23g4jh2g334jk',
      merchantName:'Alpha Name',
      date:new Date(),
      status:'pending',
      transactionId:'fdsfsdfsdfsdf7s98df798',
      referenceId:'fdsfsdfsdfsdf7s98df798',
      merchantPhoto:'https://i.pravatar.cc/300'
    },
    {
      id:'randomID4',
      amount:3824,
      merchantId:'34gjh23g4jh2g334jk',
      merchantName:'Alpha Name',
      date:new Date(),
      status:'success',
      transactionId:'fdsfsdfsdfsdf7s98df798',
      referenceId:'fdsfsdfsdfsdf7s98df798',
      merchantPhoto:'https://i.pravatar.cc/300'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
