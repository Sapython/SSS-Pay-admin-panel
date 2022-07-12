import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() name:string;
  @Input() aadhaarNumber:string;
  @Input() panCardNumber:string;
  @Input() panImage:string;
  @Input() aadhaarImage:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.name = this.data.name;
    this.aadhaarNumber = this.data.aadhaarNumber;
    this.panCardNumber = this.data.panCardNumber;
    this.panImage = this.data.panImage;
    this.aadhaarImage = this.data.aadhaarImage;
  }
  approve(){
    console.log('approve')
  }
  deny(){
    console.log('deny')
  }
}
