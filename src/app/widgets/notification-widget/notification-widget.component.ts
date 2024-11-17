import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-widget',
  templateUrl: './notification-widget.component.html',
  styleUrls: ['./notification-widget.component.scss']
})
export class NotificationWidgetComponent implements OnInit {
  @Input() name:string = 'Satayaprakash Tarai';
  @Input() message:string = 'Why is transferred money not showing?';
  @Input() date:Date = new Date();
  @Input() id:string = "dsf7sd8fs5oi6456nm"
  @Input() avatar:string = 'https://i.pravatar.cc/300';
  constructor() { }

  ngOnInit(): void {
  }

}
