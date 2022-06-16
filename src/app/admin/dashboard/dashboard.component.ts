import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
