import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataProvider } from '../providers/data.provider';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {
  status: boolean = false;
  loading = false;
  constructor(private activatedRoute:ActivatedRoute,private serverService:ServerService,private dataProvider:DataProvider) {
    this.dataProvider.pageSetting.blur = true;
    this.activatedRoute.params.subscribe(async (params:any) => {
      this.loading = true;
      console.log(params);
      if(params.id){
        const transactionId = params.id.split('_')[0]
        const userId = params.id.split('_')[1]
        const date = params.id.split('_')[2]
        console.log("transactionId",transactionId)
        console.log("userId",userId)
        console.log("date",date)
        this.serverService.checkUpiPaymentStatus(transactionId,userId,date).then((result:any)=>{
          console.log("result",result)
          if (result.status){
            this.status = true
          }
        }).catch((error:any)=>{
          console.log("error",error)
        }).finally(()=>{
          this.dataProvider.pageSetting.blur = false;
          this.loading = false;
        })
      }
    })
   }

  ngOnInit(): void {
  }

}
