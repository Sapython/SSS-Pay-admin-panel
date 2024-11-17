import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() status:string = 'Website is Down'
  @Input() email:string = 'ruhiarora@gmail.com'
  @Input() name:string = 'Satayaprakash Tarai'
  @Input() date:string = 'Today'
  @Input() time:string = '12:45'
  @Input() info:string = 'Website is down for several hours please fix it.A lot of my work is pending due to this problem.'
  @Input() reply:string = 'HI, your concern is important to us. Kindly allow us some time to investigate the issue internally and we will reach out to you as soon as we have an update.'
  statusOptions: any[] = ['Unresolved', 'Ongoing', 'Resolved'];
  constructor() { }

  ngOnInit(): void {
  }

}
