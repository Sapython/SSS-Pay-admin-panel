import { MatIconModule } from '@angular/material/icon';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatDividerModule,
    MatListModule,
    MatSlideToggleModule,
    WidgetsModule,
    MatIconModule
  ]
})
export class SettingsModule { }
