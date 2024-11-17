import { Component, Input, OnInit } from '@angular/core';
import { DataProvider } from 'src/app/providers/data.provider';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
 
  constructor(public dataProvider:DataProvider) { }

  ngOnInit(): void {
  }

}
