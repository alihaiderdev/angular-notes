import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-form',
  template: `
    <h1>
      Important note: when we use ngModel directive in any element then we
      should definitely pass name attribute to it so it make a key from it
    </h1>
    <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
      <div class="form-group mb-3">
        <label for="firstName">First Name</label>
        <!-- <input
          type="text"
          class="form-control"
          id="firstName"
          name="firstName"
          placeholder="Enter first name"
          ngModel
        /> -->
        <!-- we use [(ngModel)]="name" this syntax for forms with default data on initial load  -->

        <!-- [(ngModel)]="user.firstName" -->

        <input
          type="text"
          class="form-control"
          id="firstName"
          name="firstName"
          placeholder="Enter first name"
          ngModel
          required
          minlength="5"
          maxlength="10"
          pattern="banana"
          #firstName="ngModel"
          (change)="log(firstName)"
        />
        <!-- <div *ngIf="firstName.touched && firstName.invalid">Required</div> -->
        <div *ngIf="firstName.touched && !firstName.valid">
          <div
            class="bg-danger text-white px-3 py-2"
            *ngIf="firstName.errors?.['required']"
          >
            First name is required
          </div>
          <div
            class="bg-danger text-white px-3 py-2"
            *ngIf="firstName.errors?.['minlength']"
          >
            First name should be minimum 3 characters
          </div>
          <div
            class="bg-danger text-white px-3 py-2"
            *ngIf="firstName.errors?.['pattern']"
          >
            First name doesn't match the pattern
          </div>
        </div>
      </div>
      <div class="form-group mb-3">
        <label for="lastName">Last Name</label>
        <!-- [(ngModel)]="user.lastName" -->
        <input
          type="text"
          class="form-control"
          id="lastName"
          name="lastName"
          placeholder="Enter last name"
          ngModel
          #lastName="ngModel"
          required
          minlength="5"
          maxlength="30"
        />
      </div>
      <!-- <div *ngIf="lastName.touched && !lastName.invalid">Required</div> -->

      <div class="form-group mb-3">
        <label for="email">Email</label>
        <!-- [(ngModel)]="user.email" -->
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          placeholder="Enter email"
          ngModel
          #email="ngModel"
          required
          minlength="5"
          maxlength="30"
        />
        <!-- <div *ngIf="email.touched && !email.invalid">Required</div> -->
      </div>
      <div class="form-group mb-3">
        <label for="password">Password</label>
        <!-- [(ngModel)]="user.password" -->
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          placeholder="Password"
          ngModel
          #password="ngModel"
          required
          minlength="5"
          maxlength="30"
        />
        <!-- <div *ngIf="password.touched && password.invalid">Required</div> -->
      </div>
      <!-- <div class="form-group mb-3">
        <label for="password">Gender</label> <br />
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="male"
          value="male"
          ngModel
          [(ngModel)]="user.gender"
        />
        Male
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="female"
          value="female"
          ngModel
          [(ngModel)]="user.gender"
        />
        Female
      </div>

      <div class="form-group mb-3">
        <label for="country">Country</label>
        <select
          class="form-control"
          id="country"
          name="country"
          ngModel
          [(ngModel)]="user.country"
        >
          <option *ngFor="let country of countries" [value]="country">
            {{ country }}
          </option>
        </select>
      </div> -->

      <!-- whatever name we write here will be our nested object name -->

      <!-- <div class="address px-5" ngModelGroup="address">
        <h1 class="m-0">Address:</h1>
        <div class="form-group mb-3">
          <label for="city">City</label>
          <input
            type="text"
            class="form-control"
            id="city"
            name="city"
            placeholder="Enter city"
            ngModel
            [(ngModel)]="user.address.city"
          />
        </div>
        <div class="form-group mb-3">
          <label for="street">Street</label>
          <input
            type="text"
            class="form-control"
            id="street"
            name="street"
            placeholder="Enter street"
            ngModel
            [(ngModel)]="user.address.street"
          />
        </div>
        <div class="form-group mb-3">
          <label for="pinCode">PinCode</label>
          <input
            type="text"
            class="form-control"
            id="pinCode"
            name="pinCode"
            placeholder="Enter pinCode"
            ngModel
            [(ngModel)]="user.address.pinCode"
          />
        </div>
      </div>

      <div class="form-group mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="terms"
          name="terms"
          ngModel
          [(ngModel)]="user.terms"
        />
        <label class="form-check-label" for="terms"
          >All information provided by me is correct.</label
        >
      </div>
      <p>{{ userForm.value | json }}</p>
      <p>Valid: {{ userForm.valid }}: By default form validation is true</p>
      <p>Touched: {{ userForm.touched }}</p>
      <p>Submitted: {{ userForm.submitted }}</p> -->
      <button type="submit" class="btn btn-primary">Submit</button>
      <button
        type="button"
        class="btn btn-success mx-2"
        (click)="resetForm(userForm)"
      >
        Reset
      </button>
    </form>
  `,
  styles: [
    `
      .form-control.ng-touched.ng-invalid {
        border: 2px solid red;
      }
    `,
  ],
})
export class TdfFormComponent implements OnInit {
  countries: string[] = ['Pakistan', 'India', 'China'];
  user: any;
  constructor() {}

  ngOnInit(): void {
    this.user = {
      country: 'Pakistan',
      email: 'ali.haider@socialpie.io',
      firstName: 'Ali',
      gender: 'male',
      lastName: 'Haider',
      password: 'Pa$$w0rd!',
      terms: true,
      address: {
        city: 'Karachi',
        street: 'street no 4',
        pinCode: '74200',
      },
    };
  }

  log(x: any) {
    console.log('firstName: ', x);
  }

  onSubmit(data: NgForm) {
    console.log('form', data);
  }
  // // reset all form fields
  // resetForm(userForm: NgForm) {
  //   userForm.resetForm();
  // }

  // reset form with default data
  resetForm(userForm: NgForm) {
    userForm.resetForm({
      country: 'Pakistan',
      email: 'ali.haider@socialpie.io',
      firstName: 'Ali',
      gender: 'male',
      lastName: 'Haider',
      password: 'Pa$$w0rd!',
      terms: true,
      address: {
        city: 'Karachi',
        street: 'street no 4',
        pinCode: '74200',
      },
    });
  }
}
