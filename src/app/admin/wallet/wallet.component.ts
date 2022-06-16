import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @Input() lastTransaction:number = 50200;
  @Input() Balance:number = 250200;
  constructor() { }

transactions=[
  {
    id:'SSS6574IND',
    amount:'1,507',
    date:'10/05/2022',
    status:'Transfered',
  },
  {
    id:'XSS6574IND',
    amount:'5,507',
    date:'10/05/2022',
    status:'Transfered',
  },
  {
    id:'SSS6574IND',
    amount:'78,807',
    date:'10/05/2022',
    status:'Transfered',
  },
  {
    id:'ADSS6SD74IND',
    amount:'1,507',
    date:'10/05/2022',
    status:'Transfered',
  },
  {
    id:'SSS6574IND',
    amount:'1,507',
    date:'10/05/2022',
    status:'Transfered',
  }
]
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              data: [0, 20, 40, 50],
              backgroundColor: "rgb(115 185 243 / 30%)",
              borderColor: "#009970",
              fill: true,
          },
         ],
          labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
      },
  });
  }


  ngOnInit(): void {
  }

}
