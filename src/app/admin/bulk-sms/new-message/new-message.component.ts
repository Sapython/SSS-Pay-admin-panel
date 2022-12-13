import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss'],
})
export class NewMessageComponent implements OnInit {
  customers: any = [];
  filteredCustomers: any[];
  customerControl = new FormControl();
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  newMessage: FormGroup = new FormGroup({
    message: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{260}$/),
    ]),
  });

  constructor(private databaseService: DatabaseService) {
    this.customerControl.valueChanges.pipe(
      startWith(null),
      map((room: string | null) =>
        room ? this._filter(room) : this.customers.slice()
      )
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    let returnResponse: any = [];
    this.customers.forEach((customer: any) => {
      if (customer.name.toLowerCase().includes(filterValue)) {
        returnResponse.push(customer);
      }
    });
    return returnResponse;
  }

  selected(event: any) {
    this.customers.forEach((customer: any, index: number) => {
      if (event.option.value === customer.id) {
        this.filteredCustomers.push(customer);
        this.customers.splice(index, 1);
      }
    });
  }
  add(event: any) {
    console.log(event);
  }
  remove(data: any) {
    this.filteredCustomers.forEach((customer: any, index: number) => {
      if (data.id === customer.id) {
        this.filteredCustomers.splice(index, 1);
        this.customers.push(customer);
      }
    });
  }
  ngOnInit(): void {
    this.databaseService.getCustomers().then((value: any) => {
      value.forEach((customer: any) => {
        if (customer.data().phoneNumber) {
          this.customers.push(customer.data());
        }
      });
      this.filteredCustomers = [];
    });
  }
  submitNewMessage() {
    alert('Functionality currently disabled because of testing mode.')
  }
}
