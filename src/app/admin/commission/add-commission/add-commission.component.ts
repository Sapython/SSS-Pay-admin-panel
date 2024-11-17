import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-commission',
  templateUrl: './add-commission.component.html',
  styleUrls: ['./add-commission.component.scss']
})
export class AddCommissionComponent implements OnInit {
  addCommissionForm:FormGroup = new FormGroup({
    serviceName: new FormControl('',[Validators.required]),
    service: new FormControl('',[Validators.required]),
    accessLevels: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    minimumAmount: new FormControl('',[Validators.required,Validators.min(0)]),
    maximumAmount: new FormControl('',[Validators.required,Validators.min(0)]),
  })
  commissionTypes:string[] = [
    'percentage',
    'fixed'
  ]
  services:any[] = [
    {name:'AEPS',value:'aeps'},
    {name:'Mobile Recharge',value:'mobile_recharge'},
    {name:'BBPS',value:'bbps'},
    {name:'DTH',value:'dth'},
    {name:'Fast Tag',value:'fastTag'},
    {name:'Lpg Gas',value:'lpgGas'},
  ]
  accessAmountControls: {control:FormControl,name:string}[] = []
  accessLevels : string[] = [
    'admin',
    'superDistributor',
    'masterDistributor',
    'distributor',
    'retailer',
    'guest',
  ]
  @Output() addCommission:EventEmitter<any> = new EventEmitter();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data){
      this.data.accessLevels.forEach((value:string) => {
        const control = new FormControl('',[Validators.required,Validators.min(0)]);
        this.addCommissionForm.addControl(value,control);
        this.accessAmountControls.push({control:control,name:value});
      })
      this.addCommissionForm.patchValue(this.data);
    }
  }
  setControls(event:any){
    console.log(event);
    this.accessAmountControls = [];
    event.value.forEach((value:string) => {
      const control = new FormControl('',[Validators.required,Validators.min(0)]);
      this.addCommissionForm.addControl(value,control);
      this.accessAmountControls.push({control:control,name:value});
    })
  }
  submit(){
    console.log(this.addCommissionForm);
    console.log(this.accessAmountControls);
  }
  changeControlForCommission(value:string){

    if (value=='percentage'){
      this.accessAmountControls.forEach((control:any) => {
        control.control.setValidators([Validators.required,Validators.min(0),Validators.max(100)]);
      })
    } else {
      this.accessAmountControls.forEach((control:any) => {
        control.control.setValidators([Validators.required,Validators.min(0)]);
      })
    }
  }
}
