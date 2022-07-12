import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent implements OnInit {
  kycRequests:any[] = []
  kycRequestsSubscription:Subscription = Subscription.EMPTY;
  constructor(private databaseService:DatabaseService,private dialog:MatDialog ) { }

  openDetail(kyc:any){
    const dialogRef = this.dialog.open(DetailComponent,{data: kyc});
    dialogRef.afterClosed().subscribe(result => {
      if(result==='Approve'){
        this.databaseService.approveKycRequest(kyc.id)
      } else if (result==='Deny'){
        this.databaseService.rejectKycRequest(kyc.id)
      } else {
        console.log('cancel')
      }
    });
  }
  ngOnInit(): void {
    this.databaseService.getKycRequests().subscribe((data:any)=>{
      this.kycRequests = [];
      data.forEach((doc:any)=>{
        console.log(doc.data())
        this.kycRequests.push({...doc.data(),id:doc.id})
      })
    })
  }
  ngOnDestroy(){
    
  }
}
