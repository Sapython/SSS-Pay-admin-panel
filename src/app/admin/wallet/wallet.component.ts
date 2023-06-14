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
  constructor(private databaseService: DatabaseService,private dialog:MatDialog,private dataProvider:DataProvider) { }
  transactions: WalletNarration[];
  downlineMembers:UserData[] = [];
  lastTransaction: number = 50200;
  showTransactions: boolean = false;
  filteredTransactions: WalletNarration[] = [];
  currentMember:UserData|undefined;
  canvas: any;
  ctx: any;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 0;

  seeTransactions(member:UserData){
    this.showTransactions = !this.showTransactions;
    if (this.showTransactions){
      this.currentMember = member;
      this.dataProvider.pageSetting.blur = true;
      this.databaseService.getWalletNarrations(member.userId).then((data)=>{
        this.transactions = data.docs.map((doc:any)=>{return { ...doc.data(),id:doc.id}});
        // reset page index and page size to default
        this.pageIndex = 0;
        this.pageSize = 10;
        this.filteredTransactions = this.transactions.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
      }).finally(()=>{
        this.dataProvider.pageSetting.blur = false;
      })
    }
  }

  ngOnInit(): void {
    if (this.dataProvider.userData?.access.access=='admin'){
      this.databaseService.getAgents().then((data)=>{
        this.downlineMembers = data.docs.map((doc:any)=>{return { ...doc.data(),id:doc.id}});
      }) 
    } else {
      this.databaseService.getDownlineMembers(this.dataProvider.userData!.userId).then((data)=>{
        console.log("Downline members",data.docs.map((doc)=>{return { ...doc.data(),id:doc.id}}));
        this.downlineMembers = data.docs.map((doc:any)=>{return { ...doc.data(),id:doc.id}});
      })
    }
    // this.databaseService.getWalletNarrations(this.dataProvider.userData!.userId).then((data)=>{
    //   this.transactions = []
    //   data.forEach((transaction)=>{
    //     if (transaction.data()['amount'] > 0){
    //       this.transactions.push(transaction.data() as WalletNarration);
    //     }
    //   })
    // }).catch((error)=>{
    //   console.log("Error",error);
    // })
  }

  openDetailModal(transaction:any){
    const dialog = this.dialog.open(DetailComponent,{
      data:transaction
    });
    dialog.afterClosed().subscribe((data)=>{
      console.log(`Dialog result: ${data}`)
    })
  }

  getTimeStamp(time:Timestamp){
    return time.toDate();
  }

  loadPagedData(event:any){
    console.log("Event",event);
    let start = event.pageIndex * event.pageSize;
    let pageIndex = event.pageIndex;
    let pageSize = event.pageSize;
    this.filteredTransactions = this.transactions.slice(start, start + pageSize);
  }
}

type WalletNarration ={
  amount:number;
  narration:string;
  service:string;
  transactionTime:any;
  transactionType:'credit' | 'debit';
  balance:number;
  availableBalance:number;
}