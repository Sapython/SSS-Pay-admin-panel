import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  services:any[] = []
  constructor(private alertify:AlertsAndNotificationsService,private serverService:ServerService) { }
  range:FormGroup = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  })
  serviceForm:FormGroup = new FormGroup({
    range:this.range,
    type:new FormControl(null,[Validators.required])
  })
  ngOnInit(): void {
  }
  getReport(){
    if (this.serviceForm.valid){
      console.log(this.serviceForm.value)
      const data = {
        startDate:this.serviceForm.value.range.start.toISOString(),
        endDate:this.serviceForm.value.range.end.toISOString(),
        type:this.serviceForm.value.type
      }
      this.serverService.getReport(data).then((res:any)=>{
        this.services = res.transactions
      })
    } else {
      this.alertify.presentToast("Please fill all the fields",'error')
    }
  }

}
