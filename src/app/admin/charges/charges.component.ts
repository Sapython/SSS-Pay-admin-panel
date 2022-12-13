import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
import { AddCommissionComponent } from '../commission/add-commission/add-commission.component';
import { AddChargeComponent } from './add-charge/add-charge.component';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})
export class ChargesComponent implements OnInit {
  charges: Commission[] = [];
  constructor(
    private dialog: MatDialog,
    private databaseService: DatabaseService,
    private alertify: AlertsAndNotificationsService
  ) {}

  ngOnInit(): void {
    this.databaseService.getCharges().then((commissions: any) => {
      this.charges = [];
      commissions.forEach((commission: any) => {
        this.charges.push({ ...commission.data(), id: commission.id });
      });
    });
  }
  addCommission() {
    const dialog = this.dialog.open(AddChargeComponent);
    dialog.afterClosed().subscribe((result) => {
      if (result){
        this.databaseService
        .addCharge({ ...result, updateDate: new Date() })
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
    const dialog = this.dialog.open(AddChargeComponent,{
      data:data
    });
    dialog.afterClosed().subscribe((result) => {
      if (result){
        this.databaseService
        .updateCharge(data.id,{ ...result, updateDate: new Date() })
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
      this.databaseService.deleteCharge(data.id).then(()=>{
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
  admin: number;
  superDistributor: number;
  masterDistributor: number;
  distributor: number;
  retailer: number;
  service: | 'payoutUpi'
  | 'expressPayoutUpi'
  | 'payoutCard'
  | 'expressPayoutCard'
  | 'aeps'
  | 'mobile_recharge'
  | 'bbps'
  | 'dth'
  | 'fastTag'
  | 'lpgGas'
  | 'aadhaarPay';
  accessLevels: string[];
  type: 'percentage' | 'fixed';
  updateDate: any;
  minimumAmount?: number;
  maximumAmount?: number;
};
