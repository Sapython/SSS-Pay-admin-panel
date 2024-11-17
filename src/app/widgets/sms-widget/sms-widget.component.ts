import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-widget',
  templateUrl: './sms-widget.component.html',
  styleUrls: ['./sms-widget.component.scss']
})
export class SmsWidgetComponent implements OnInit {
  @Input() name:string = 'Satayaprakash Tarai'
  @Input() image:string = ''
  @Input() selected:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
