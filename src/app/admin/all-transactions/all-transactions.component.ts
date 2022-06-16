import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
})
export class AllTransactionsComponent implements OnInit {
  totalBalance:number  = 0;
  newMembers: any[] = [
    {
      name: 'Sankar Tripathi',
      age: 20,
      gender: 'Male',
      phone: '+918729249923',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Sankar Tripathi',
      age: 20,
      gender: 'Male',
      phone: '+918729249923'
    },
    {
      name: 'Sankar Tripathi',
      age: 20,
      gender: 'Male',
      phone: '+918729249923',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Sankar Tripathi',
      age: 20,
      gender: 'Male',
      phone: '+918729249923'
    },
    {
      name: 'Sankar Tripathi',
      age: 20,
      gender: 'Male',
      phone: '+918729249923'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
