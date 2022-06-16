import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-retailer',
  templateUrl: './transfer-retailer.component.html',
  styleUrls: ['./transfer-retailer.component.scss'],
})
export class TransferRetailerComponent implements OnInit {
  retailers = [
    {
      id: 1,
      name: 'Bharat Sahoo',
      image: 'https://i.pravatar.cc/300',
      distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
    {
      id: 2,
      name: 'Mahata Sahoo',
      image: 'https://i.pravatar.cc/300',
      distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
    {
      id: 3,
      name: 'Rajesh Sahoo',
      image: 'https://i.pravatar.cc/300',
        distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
    {
      id: 4,
      name: 'Kamala Khan',
      image: 'https://i.pravatar.cc/300',
        distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
    {
      id: 5,
      name: 'Bharat Sahoo',
      image: 'https://i.pravatar.cc/300',
        distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
    {
      id: 6,
      name: 'Johney Depp',
      image: 'https://i.pravatar.cc/300',
        distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
    {
      id: 7,
      name: 'Amber Heard',
      image: 'https://i.pravatar.cc/300',
        distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
    {
      id: 9,
      name: 'Dummy Sahoo',
      image: 'https://i.pravatar.cc/300',
        distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
    {
      id: 8,
      name: 'Dummy Sahoo',
      image: 'https://i.pravatar.cc/300',
        distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
    {
      id: 8,
      name: 'Dummy Sahoo',
      image: 'https://i.pravatar.cc/300',
        distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
    {
      id: 8,
      name: 'Dummy Sahoo',
      image: 'https://i.pravatar.cc/300',
        distributer: [
        {
          id: 2,
          name: 'Mahata Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 3,
          name: 'Rajesh Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 4,
          name: 'Kamala Khan',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 5,
          name: 'Bharat Sahoo',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 6,
          name: 'Johney Depp',
          image: 'https://i.pravatar.cc/300',
        },
        {
          id: 7,
          name: 'Amber Heard',
          image: 'https://i.pravatar.cc/300',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
