import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {
  userFormGroup: FormGroup = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    photoURL: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    access: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    pinCode: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  accesses: string[] = [
    'admin',
    'superDistributor',
    'masterDistributor',
    'distributor',
    'retailer',
    'guest',
  ];
  genders: string[] = ['male','female','other','not-specified'];
  constructor() {}

  ngOnInit(): void {}
  addUser() {    
  }
}
