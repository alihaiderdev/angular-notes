import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  template: `
    <!-- <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()">
      <div class="form-group mb-3">
        <label for="name">Name:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          placeholder="Enter name"
          formControlName="name"
        />
      </div>
      <div class="form-group mb-3">
        <label for="designation">Designation:</label>
        <input
          type="text"
          class="form-control"
          id="designation"
          name="designation"
          placeholder="Enter designation"
          formControlName="designation"
        />
      </div>
      <h1>Address:</h1>
      <div class="form-group mb-3">
        <label for="country">Country:</label>
        <input
          type="text"
          class="form-control"
          id="country"
          name="country"
          placeholder="Enter country"
          formControlName="country"
        />
      </div>
      <div class="form-group mb-3">
        <label for="city">City:</label>
        <input
          type="text"
          class="form-control"
          id="city"
          name="city"
          placeholder="Enter city"
          formControlName="city"
        />
      </div>
      <button type="submit">Submit</button>
    </form> -->

    <!-- <div class="form-group mb-3">
      <label for="firstName">First Name</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        name="firstName"
        placeholder="Enter first name"
        [formControl]="firstName"
      />
    </div>
    <p>Entered first name: {{ firstName.value }}</p>
    <button class="btn btn-primary" (click)="updateFirstName()">Refresh</button> -->

    <!-- <form>
      <div class="form-group mb-3">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          name="lastName"
          placeholder="Enter last name"
          [formControl]="lastName"
        />
      </div>
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          placeholder="Enter email"
          [formControl]="email"
        />
      </div>
      <div class="form-group mb-3">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          placeholder="Password"
          [formControl]="password"
        />
      </div>
    </form> -->

    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="firstname">First Name: </label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          name="firstname"
          formControlName="firstname"
        />
      </div>

      <div class="form-group">
        <label for="lastname">Last Name: </label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          name="lastname"
          formControlName="lastname"
        />
      </div>

      <div class="form-group">
        <label for="email">Email: </label>
        <input
          type="text"
          class="form-control"
          id="email"
          name="email"
          formControlName="email"
        />
      </div>

      <label for="gender">Gender: </label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          value="male"
          id="male"
          name="gender"
          formControlName="gender"
        />
        <label class="form-check-label" for="male"> Male </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          value="female"
          id="female"
          name="gender"
          formControlName="gender"
        />
        <label class="form-check-label" for="female"> Female </label>
      </div>

      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="isMarried"
          name="isMarried"
          formControlName="isMarried"
        />
        <label class="form-check-label" for="isMarried">Married</label>
      </div>

      <div class="form-group">
        <label for="country">country: </label>
        <select
          class="form-control"
          id="country"
          name="country"
          formControlName="country"
        >
          <option [ngValue]="c.id" *ngFor="let c of countryList">
            {{ c.name }}
          </option>
        </select>
      </div>

      <div formGroupName="address">
        <div class="form-group">
          <label for="city">City</label>
          <input
            type="text"
            class="form-control"
            name="city"
            formControlName="city"
          />
        </div>

        <div class="form-group">
          <label for="street">Street</label>
          <input
            type="text"
            class="form-control"
            name="street"
            formControlName="street"
          />
        </div>

        <div class="form-group">
          <label for="pincode">Pin Code</label>
          <input
            type="text"
            class="form-control"
            name="pincode"
            formControlName="pincode"
          />
        </div>
      </div>

      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  `,
  styles: [],
})
export class ReactiveFormComponent implements OnInit {
  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();
  password = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  // updateFirstName() {
  //   this.firstName.setValue('Ali');
  // }

  // employeeForm = new FormGroup({
  //   name: new FormControl(''),
  //   designation: new FormControl(''),

  //   address: new FormGroup({
  //     country: new FormControl(''),
  //     city: new FormControl(''),
  //   }),
  // });

  // onSubmit() {
  //   this.employeeForm.value;
  // }

  countryList = [
    { id: 1, name: 'Pakistan' },
    { id: 2, name: 'Uk' },
    { id: 3, name: 'China' },
  ];

  contactForm = new FormGroup({
    // firstname: new FormControl(),
    // firstname: new FormControl('Ali Haider'),
    // firstname: new FormControl({ value: 'Ali Haider', disabled: true }),
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl(),
    }),
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
