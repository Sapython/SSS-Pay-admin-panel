import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() username:string = 'User Name'
  @Input() email:string = 'saptampro123@gmail.com'
  constructor() { }

  ngOnInit(): void {
  }

}
