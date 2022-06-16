import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';

const components = [HeaderComponent];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:components
})
export class WidgetsModule { }
