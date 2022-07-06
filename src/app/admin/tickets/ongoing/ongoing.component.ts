import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrls: ['./ongoing.component.scss']
})
export class OngoingComponent implements OnInit {
  items = [1,2,3,4,5]
  constructor() { }

  ngOnInit(): void {
  }

}
