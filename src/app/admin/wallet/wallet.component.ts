import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'chart.js';
import { DataProvider } from 'src/app/providers/data.provider';
import { DatabaseService } from 'src/app/services/database.service';
import { Transaction } from 'src/app/structures/transaction.structure';
import { UserData } from 'src/app/structures/user.structure';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  // @Input() lastTransaction: number = 50200;
  @Input() Balance: number = 250200;
  constructor(private databaseService: DatabaseService,private dilaog:MatDialog,private dataProvider:DataProvider) { }
  transactions: WalletNarration[];
  downlineMembers:UserData[] = [];
  lastTransaction: number = 50200;

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          data: [0, 20, 40, 50],
          backgroundColor: "rgb(115 185 243 / 30%)",
          borderColor: "#009970",
          fill: true,
        },
        ],
        labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
      },
    });
  }


  ngOnInit(): void {
    this.databaseService.getDownlineMembers(this.dataProvider.userData!.userId).then((data)=>{
      console.log("Downline members",data.docs.map((doc)=>{return { ...doc.data(),id:doc.id}}));
    })
    this.databaseService.getWalletNarrations(this.dataProvider.userData!.userId).then((data)=>{
      this.transactions = []
      data.forEach((transaction)=>{
        if (transaction.data()['amount'] > 0){
          this.transactions.push(transaction.data() as WalletNarration);
        }
      })
    }).catch((error)=>{
      console.log("Error",error);
    })
  }

  openDetailModal(transaction:any){
    const dialog = this.dilaog.open(DetailComponent,{
      data:transaction
    });
    dialog.afterClosed().subscribe((data)=>{
      console.log(`Dialog result: ${data}`)
    })
  }

  getTimeStamp(time:Timestamp){
    return time.toDate();
  }
}

type WalletNarration ={
  amount:number;
  narration:string;
  service:string;
  transactionTime:any;
  transactionType:'credit' | 'debit';
  balance:number;
}