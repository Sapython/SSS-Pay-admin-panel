import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {
  @Input() avatar:string = '';
  @Input() name:string = '';
  @Input() email:string = '';
  @Input() ticketNumber:string = '';
  @Input() ticketSummaryTitle:string = '';
  @Input() ticketSummaryBody:string = '';
  @Input() timeSummary:string = '';
  @Input() actualTime:Date = new Date();
  @Input() status:'open' | 'closed' | 'in-progress' = 'open';
  constructor() { }

  ngOnInit(): void {
    // slash ticket summary body to 120 characters
    this.ticketSummaryBody = this.ticketSummaryBody.substring(0, 120);

    // format time summary
    this.timeSummary = this.formatTimeSummary(this.actualTime);
  
  }

  // function to fomrat time as today, yesterday, or a date
  formatTimeSummary(time:Date):string {
    let today = new Date();
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    let timeSummary:string = '';
    if (time.getDate() == today.getDate() && time.getMonth() == today.getMonth() && time.getFullYear() == today.getFullYear()) {
      timeSummary = 'Today';
    } else if (time.getDate() == yesterday.getDate() && time.getMonth() == yesterday.getMonth() && time.getFullYear() == yesterday.getFullYear()) {
      timeSummary = 'Yesterday';
    } else {
      timeSummary = time.toDateString();
    }
    return timeSummary;
  }
}
