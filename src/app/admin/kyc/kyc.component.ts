import { Component, OnInit } from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss']
})
export class KycComponent implements OnInit {
  mediaSub:Subscription | undefined;
  constructor(public mediaObserver:MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{console.log(result.mqAlias);})
  }
  ngOnDestroy(){
    this.mediaSub?.unsubscribe();
  }
}
