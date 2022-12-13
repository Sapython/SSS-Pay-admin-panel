import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-promote-user',
  templateUrl: './promote-user.component.html',
  styleUrls: ['./promote-user.component.scss']
})
export class PromoteUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  @Output() emitAndSaveEvent = new EventEmitter<any>();
  ngOnInit(): void {
  }
  emitAndSave(event:any){
    console.log(event)
    this.emitAndSaveEvent.emit(event.value);
  }
}
