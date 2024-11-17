import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { UserAccess } from 'src/app/structures/user.structure';
import { AddCommissionComponent } from './add-commission/add-commission.component';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss'],
})
export class CommissionComponent implements OnInit {
  commissions: Commission[] = [];
  constructor(
    private dialog: MatDialog,
    private databaseService: DatabaseService,
    private alertify: AlertsAndNotificationsService
  ) {}

  ngOnInit(): void {
    this.databaseService.getCommissions().then((commissions: any) => {
      this.commissions = [];
      commissions.forEach((commission: any) => {
        this.commissions.push({ ...commission.data(), id: commission.id });
      });
    });
  }
  addCommission() {
    const dialog = this.dialog.open(AddCommissionComponent);
    dialog.afterClosed().subscribe((result) => {
      if (result){
        this.databaseService
        .addCommission({ ...result, updateDate: new Date() })
        .then(() => {
          this.ngOnInit()
          this.alertify.presentToast('Commission added successfully');
        })
        .catch(() => {
          this.alertify.presentToast('Error adding commission', 'error');
        });
      }
    });
  }
  editCommission(data:any){
    const dialog = this.dialog.open(AddCommissionComponent,{
      data:data
    });
    dialog.afterClosed().subscribe((result) => {
      if (result){
        this.databaseService
        .updateCommission(data.id,{ ...result, updateDate: new Date() })
        .then(() => {
          this.ngOnInit()
          this.alertify.presentToast('Commission added successfully');
        })
        .catch(() => {
          this.alertify.presentToast('Error adding commission', 'error');
        });
      }
    });
  }
  deleteCommission(data:any){
    if(confirm('Are you sure you want to delete this commission?')){
      this.databaseService.deleteCommission(data.id).then(()=>{
        this.ngOnInit()
        this.alertify.presentToast('Commission deleted successfully');
      }).catch(()=>{
        this.alertify.presentToast('Error deleting commission', 'error');
      }
      )
    }
  }
}
export type Commission = {
  id?: string;
  serviceName: string;
  service: | 'payoutUpi'
  | 'expressPayoutUpi'
  | 'payoutCard'
  | 'expressPayoutCard'
  | 'aeps'
  | 'mobile_recharge'
  | 'bbps'
  | 'dth'
  | 'fastTag'
  | 'lpgGas';
  admin: number;
  superDistributor: number;
  masterDistributor: number;
  distributor: number;
  retailer: number;
  accessLevels: string[];
  type: 'percentage' | 'fixed';
  updateDate: any;
  minimumAmount?: number;
  maximumAmount?: number;
};
