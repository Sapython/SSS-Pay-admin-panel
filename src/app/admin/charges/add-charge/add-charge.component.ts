import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-charge',
  templateUrl: './add-charge.component.html',
  styleUrls: ['./add-charge.component.scss']
})
export class AddChargeComponent implements OnInit {
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
    {name:'Payout Card',value:'payoutCard'},
    {name:'Payout IMPS',value:'payoutImps'},
    {name:'Payout UPI',value:'payoutUPI'},
    {name:'Payout NEFT',value:'payoutNeft'},
    {name:'Express Payout NEFT',value:'expressPayoutNeft'},
    {name:'Express Payout UPI',value:'expressPayoutUpi'},
    {name:'Express Payout Card',value:'expressPayoutCard'},
    {name:'Express Payout IMPS',value:'expressPayoutImps'},
    {name:'Aadhaar Pay',value:'aadhaarPay'},
  ]
  accessLevels : string[] = [
    'admin',
    'superDistributor',
    'masterDistributor',
    'distributor',
    'retailer',
    'guest',
  ]
  accessAmountControls: {control:FormControl,name:string}[] = []
  @Output() addCharge:EventEmitter<any> = new EventEmitter();
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
    this.addCommissionForm.removeControl('admin');
    this.addCommissionForm.removeControl('superDistributor');
    this.addCommissionForm.removeControl('masterDistributor');
    this.addCommissionForm.removeControl('distributor');
    this.addCommissionForm.removeControl('retailer');
    this.addCommissionForm.removeControl('guest');
    
    event.value.forEach((value:string) => {
      const control = new FormControl('',[Validators.required,Validators.min(0)]);
      this.addCommissionForm.addControl(value,control);
      this.accessAmountControls.push({control:control,name:value});
    })
  }
  changeControlForCommission(value:string){
    if (value=='percentage'){
      this.accessAmountControls.forEach((control) => {
        control.control.setValidators([Validators.required,Validators.min(0),Validators.max(100)]);
        control.control.updateValueAndValidity();
      })
    } else {
      this.accessAmountControls.forEach((control) => {
        control.control.setValidators([Validators.required,Validators.min(0)]);
        control.control.updateValueAndValidity();
      })
    }
  }
  checkData(){
    console.log(this.addCommissionForm);
    console.log(this.accessAmountControls);
  }
}
