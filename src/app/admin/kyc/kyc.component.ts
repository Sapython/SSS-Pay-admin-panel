import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { DetailComponent } from './detail/detail.component';
import { DataProvider } from 'src/app/providers/data.provider';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss'],
})
export class KycComponent implements OnInit {
  kycRequests: any[] = [];
  kycRequestsSubscription: Subscription = Subscription.EMPTY;
  constructor(
    private databaseService: DatabaseService,
    private dialog: MatDialog, 
    private alertify:AlertsAndNotificationsService,
    private dataProvider: DataProvider, 
  ) {}

  openDetail(kyc: any) {
    const dialogRef = this.dialog.open(DetailComponent, { data: kyc });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'Approve') {
        this.databaseService.approveKycRequest(kyc.userId).then(()=>{
          this.alertify.presentToast('KYC Request Approved');
        });
      } else if (result === 'Deny') {
        this.databaseService.rejectKycRequest(kyc.userId).then(()=>{
          this.alertify.presentToast('KYC Request Rejected');
        });
      } else {
        console.log('cancel');
      }
    });
  }
  async ngOnInit(): Promise<void> {
    let userSub:Observable<any>;
    userSub = this.databaseService.getKycRequests()
    // if(this.dataProvider.userData?.access.access == 'admin'){
    // } else {
    //   let res = await this.databaseService.getDownlineMembers(this.dataProvider.userData!.userId)
    //   userSub = this.databaseService.getKycRequests(res.docs.map((d)=>d.id))
    // }
    this.kycRequestsSubscription = userSub.subscribe((data: any) => {
      console.log("Data",data);
      this.kycRequests = [];
      data.forEach((doc: any, index: number) => {
        if (doc.exists) {
          console.log(index, doc.data());
          this.databaseService
            .getAadhaarInfo(doc.id)
            .then((aadhaarData: any) => {
              this.databaseService.getPanInfo(doc.id).then((panData: any) => {
                // remove duplicates from kycRequests
                var found = false;
                this.kycRequests.forEach(
                  (item, index) => {
                    if (item.userId == doc.id){
                      found = true;
                    }
                  }
                );
                if (!found) {
                  this.kycRequests.push({
                    ...doc.data(),
                    ...aadhaarData.data(),
                    ...panData.data(),
                  });
                }
                console.log(this.kycRequests);
              });
            });
        }
      });
    });
  }
  ngOnDestroy() {
    this.kycRequestsSubscription.unsubscribe();
  }
}
