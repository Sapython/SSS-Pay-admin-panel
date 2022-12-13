import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/structures/transaction.structure';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public transaction: Transaction) { }

  ngOnInit(): void {
  }

}
