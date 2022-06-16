import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-widget',
  templateUrl: './notification-widget.component.html',
  styleUrls: ['./notification-widget.component.scss']
})
export class NotificationWidgetComponent implements OnInit {
  @Input() name:string = 'Satayaprakash Tarai'
  @Input() message:string = 'Why is transferred money not showing?'
  @Input() date:string = 'Today'
  @Input() time:string = '12:45'
  constructor() { }

  ngOnInit(): void {
  }

}
