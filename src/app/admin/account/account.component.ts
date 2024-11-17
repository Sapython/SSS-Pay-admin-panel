import { Component, OnInit, ViewChild } from '@angular/core';
import { DataProvider } from 'src/app/providers/data.provider';
import { ServerService } from 'src/app/services/server.service';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  @ViewChild('webRef') webRef:any;
  editMode: boolean = false;
  webLink:string = '';
  constructor(private alertService: AlertsAndNotificationsService,public dataProvider:DataProvider,private serverService:ServerService) {}

  ngOnInit(): void {}

  validateImage(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length > 0) {
      const file = target.files[0];
      var valid = false;

      if (!['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)) {
        this.alertService.presentToast(
          'Your photo should either be in .png or .jpg'
        );
      } else if (file.size > 100_000) {
        this.alertService.presentToast(
          "Your photo's size should not exceed 100 KB"
        );
      } else {
        valid = true;
      }

      if (valid) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          document.documentElement.style.setProperty(
            '--post-background',
            `url('${fileReader.result}')`
          );
        };
      } else {
        target.value = '';
        document.documentElement.style.setProperty('--post-background', '');
      }
    }
  }

  saveChanges() {
    this.editMode = false;
    document.documentElement.style.setProperty('--post-background', '');
    (document.getElementById('photo-input') as HTMLInputElement).value = '';
  }

  cancel() {
    this.editMode = false;
    document.documentElement.style.setProperty('--post-background', '');
    (document.getElementById('photo-input') as HTMLInputElement).value = '';
  }

  checkOnboardingStatus(){
    this.serverService.getAepsKycStatus().then((res:any) => {
      console.log(res)
      if (res.message){
        this.alertService.presentToast(res.message);
        if (res.response_code==0){
          this.serverService.onboardingForAepsKyc().then((onboardingRes:any) => {
            console.log("onboardingForAepsKyc",onboardingRes)
            if (onboardingRes.onboard_pending==1){
              this.alertService.presentToast("Your KYC is pending. Please complete your KYC to continue");
                 this.webLink = onboardingRes.redirecturl;
                if(this.webRef){
                  console.log("webRef",this.webRef);
                  this.webRef.nativeElement.href = this.webLink;
                  this.webRef.nativeElement.click()
                }              
            }
          })
        }
      }
    })
  }
}
