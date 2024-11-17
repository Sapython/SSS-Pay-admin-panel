import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-widget',
  templateUrl: './ticket-widget.component.html',
  styleUrls: ['./ticket-widget.component.scss']
})
export class TicketWidgetComponent implements OnInit {
  @Input() name:string = 'Satayaprakash Tarai'
  @Input() email:string = 'ruhiarora@gmail.com'
  constructor() { }

  ngOnInit(): void {
  }

}
