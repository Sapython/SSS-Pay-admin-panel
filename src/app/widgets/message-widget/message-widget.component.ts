import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-widget',
  templateUrl: './message-widget.component.html',
  styleUrls: ['./message-widget.component.scss']
})
export class MessageWidgetComponent implements OnInit {
  @Input() name:string = 'Satayaprakash Tarai'
  @Input() message:string = 'Why is transferred money not showing?'
  constructor() { }

  ngOnInit(): void {
  }

}
