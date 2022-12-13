import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer-retailer',
  templateUrl: './transfer-retailer.component.html',
  styleUrls: ['./transfer-retailer.component.scss'],
})
export class TransferRetailerComponent implements OnInit {
  selectedValue: string = 'Retailer';
  constructor(@Inject(MAT_DIALOG_DATA) public distributors:any[]) {}

  ngOnInit(): void {}
}
