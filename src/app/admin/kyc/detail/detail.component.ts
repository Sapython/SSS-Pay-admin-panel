import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';
declare var UIkit:any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  name:string;
  aadhaarNumber:string;
  panCardNumber:string;
  panImage:string;
  aadhaarFront:string;
  aadhaarBack:string;
  personSelfie:string;
  shopSelfieImage:string;
  address:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.name = this.data.displayName;
    this.aadhaarNumber = this.data.aadhaarNumber;
    this.panCardNumber = this.data.panNumber;
    this.panImage = this.data.panImage;
    this.aadhaarFront = this.data.aadhaarFrontImageUrl;
    this.aadhaarBack = this.data.aadhaarBackImageUrl;
    this.personSelfie = this.data.selfieImage;
    this.shopSelfieImage = this.data.shopImage;
    this.address = this.data.address;
    
  }
  seeImages(){
    console.log([{source:this.aadhaarBack,type:'image',caption:'Aadhaar Back'},{source:this.aadhaarFront,type:'image',caption:'Aadhaar Front'},{source:this.panImage,type:'image',caption:'Pan Card'},{source:this.personSelfie,type:'image',caption:'Person Selfie'},{source:this.shopSelfieImage,type:'image',caption:'Shop Selfie'}])
    var dt = UIkit.lightboxPanel({
      items:[{source:this.aadhaarBack,type:'image',caption:'Aadhaar Back'},{source:this.aadhaarFront,type:'image',caption:'Aadhaar Front'},{source:this.panImage,type:'image',caption:'Pan Card'},{source:this.personSelfie,type:'image',caption:'Person Selfie'},{source:this.shopSelfieImage,type:'image',caption:'Shop Selfie'}]
    });
    dt.show();
  }
  
}
