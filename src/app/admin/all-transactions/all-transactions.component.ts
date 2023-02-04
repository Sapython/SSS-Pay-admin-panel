import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { Transaction } from 'src/app/structures/transaction.structure';
import { SeeCommissionsComponent } from './see-commissions/see-commissions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss'],
})
export class AllTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  userNames: { [key: string]: string };
  totalBalance: number = 0;
  currentField: string = ''; 
  selectedMode:'daily'|'weekly'|'monthly'|'yearly'|'all'|'none' = 'none';
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

  filterOnTime(event:any){
    if(event){
      this.filteredTransactions = []
      console.log(event)
      if(event=='daily'){
        this.selectedMode = event
        console.log("2",event)
        this.filteredTransactions = this.transactions.filter((transaction:Transaction)=>{
          var dateOne = transaction.date.toDate()
          var dateTwo = new Date()
          console.log(dateOne,dateTwo)
          return dateOne.getDate() == dateTwo.getDate() && dateOne.getMonth() == dateTwo.getMonth() && dateOne.getFullYear() == dateTwo.getFullYear()
        })
        console.log("3",this.filteredTransactions)
      } else if(event=='weekly'){
        this.selectedMode = event
        this.filteredTransactions = this.transactions.filter((transaction:Transaction)=>{
          var dateOne = transaction.date.toDate()
          var dateTwo = new Date()
          return dateOne.getDate() >= dateTwo.getDate()-7 && dateOne.getMonth() == dateTwo.getMonth() && dateOne.getFullYear() == dateTwo.getFullYear()
        })
        console.log("3",this.filteredTransactions)
      } else if(event=='monthly'){
        this.selectedMode = event
        this.filteredTransactions = this.transactions.filter((transaction:Transaction)=>{
          var dateOne = transaction.date.toDate()
          var dateTwo = new Date()
          return dateOne.getMonth() == dateTwo.getMonth() && dateOne.getFullYear() == dateTwo.getFullYear()
        })
        console.log("3",this.filteredTransactions)
      } else if(event=='yearly'){
        this.selectedMode = event
        this.filteredTransactions = this.transactions.filter((transaction:Transaction)=>{
          var dateOne = transaction.date.toDate()
          var dateTwo = new Date()
          return dateOne.getFullYear() == dateTwo.getFullYear()
        })
        console.log("3",this.filteredTransactions)
      } else if(event=='all'){
        this.selectedMode = event
        this.filteredTransactions = this.transactions
        console.log("3",this.filteredTransactions)
      } else {
        this.selectedMode = 'none'
        this.filteredTransactions = []
      }
    } else {
      this.selectedMode = 'none'
    }
  }

  filterOnType(event:any){
    console.log(event);
    if (this.filteredTransactions.length == 0){
      if(event){
        this.filteredTransactions = []
        if(event=='all'){
          this.filteredTransactions = this.transactions
        } else {
          this.filteredTransactions = this.transactions.filter((transaction:Transaction)=>{
            return transaction.type == event
          })
        }
      } else {
        this.filteredTransactions = []
      }
    } else if (this.filteredTransactions.length > 0) {
      if(event){
        if(event=='all'){
          this.filteredTransactions = this.filteredTransactions
        } else {
          this.filteredTransactions = this.filteredTransactions.filter((transaction:Transaction)=>{
            if (event == 'CW' || event == 'BE' || event == 'MS'){
              return transaction?.extraData?.aepsData?.transactionType == event
            } else {
              return transaction.type == event
            }
          })
        }
      } else {
        this.filteredTransactions = []
      }
    }
  }

  sortBy(field:string){
    if (this.selectedMode == 'none'){
      this.filteredTransactions = this.transactions
    }
    this.filteredTransactions.sort((a:Transaction,b:Transaction)=>{
      if (field=='id' && this.currentField != 'id'){
        return a.id!.localeCompare(b.id || '')
      } else if (field=='sender' && this.currentField != 'sender'){
        return a.extraData.customerId!.localeCompare(b.extraData.customerId || '')
      } else if (field=='receiver' && this.currentField != 'receiver'){
        return a.extraData.receiverId!.localeCompare(b.extraData.receiverId || '')
      } else if (field=='amount' && this.currentField != 'amount'){
        return a.amount - b.amount
      } else if (field=='date' && this.currentField != 'date'){
        return a.date.toDate().getTime() - b.date.toDate().getTime()
      } else if (field=='status' && this.currentField != 'status'){
        return a.status!.localeCompare(b.status || '')
      } else if (field=='id' && this.currentField == 'id'){
        return b.id!.localeCompare(a.id || '')
      } else if (field=='sender' && this.currentField == 'sender'){
        return b.extraData.customerId!.localeCompare(a.extraData.customerId || '')
      } else if (field=='receiver' && this.currentField == 'receiver'){
        return b.extraData.receiverId!.localeCompare(a.extraData.receiverId || '')
      } else if (field=='amount' && this.currentField == 'amount'){
        return b.amount - a.amount
      } else if (field=='date' && this.currentField == 'date'){
        return b.date.toDate().getTime() - a.date.toDate().getTime()
      } else if (field=='status' && this.currentField == 'status'){
        return b.status!.localeCompare(a.status || '')
      } else {
        return 0
      }
    })
    
    this.currentField = field
  }

  seeCommissions(commissions:any[]){
    const dialog = this.dialog.open(SeeCommissionsComponent,{data:commissions})
  }
}
