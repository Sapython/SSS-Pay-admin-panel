import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.scss']
})
export class ResolvedComponent implements OnInit {
  @Input() status:string = 'Website is Down'
  @Input() status_info:string = 'Website is down for several hours please fix....'
  @Input() date:string = 'Today'
  @Input() time:string = '12:45'

  items = [
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },
    {
      status:'Website is Down',
      status_info: 'Website is down for several hours please fix....',
      date:'Today',
      time:'12:45'

    },

]
  constructor() { }

  ngOnInit(): void {
  }

}
