import { Component, OnInit } from '@angular/core';
import { AlertsAndNotificationsService } from 'src/app/services/uiService/alerts-and-notifications.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  editMode: boolean = false;

  constructor(private alertService: AlertsAndNotificationsService) {}

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
}
