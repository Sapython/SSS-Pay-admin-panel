import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-see-commissions',
  templateUrl: './see-commissions.component.html',
  styleUrls: ['./see-commissions.component.scss']
})
export class SeeCommissionsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any[]) { }

  ngOnInit(): void {
  }

}
