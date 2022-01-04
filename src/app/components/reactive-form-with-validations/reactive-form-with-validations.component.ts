import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-validations',
  styles: [
    `
      /* form p {
        margin: 0;
      } */
    `,
  ],
  template: `
    <h1 class="text-center">reactive-form-with-validations works!</h1>

    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" novalidate>
      <p>
        <label for="firstname">First Name </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          formControlName="firstname"
        />
      </p>
      <div
        *ngIf="!firstname?.valid && (firstname?.dirty || firstname?.touched)"
      >
        <div [hidden]="!firstname.errors.required">firstName is required</div>
        <div [hidden]="!firstname.errors.minlength">Min Length is 10</div>
      </div>

      <p>
        <label for="lastname">Last Name </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          formControlName="lastname"
        />
      </p>

      <div *ngIf="!lastname.valid && (lastname.dirty || lastname.touched)">
        <div [hidden]="!lastname.errors.pattern">
          Only characters are allowed
        </div>
        <div [hidden]="!lastname.errors.maxLength">
          Max length allowed is
          {{ lastname.errors.maxlength?.requiredLength }}
        </div>
        <div [hidden]="!lastname.errors.required">lastName is required</div>
      </div>

      <p>
        <label for="email">Email </label>
        <input type="text" id="email" name="email" formControlName="email" />
      </p>
      <div *ngIf="!email.valid && (email.dirty || email.touched)">
        <div [hidden]="!email.errors.required">email is required</div>
        <div [hidden]="!email.errors.email">invalid email id</div>
      </div>

      <p>
        <label for="gender">Gender </label>
        <input
          type="radio"
          value="male"
          id="gender"
          name="gender"
          formControlName="gender"
        />
        Male
        <input
          type="radio"
          value="female"
          id="gender"
          name="gender"
          formControlName="gender"
        />
        Female
      </p>
      <div *ngIf="!gender.valid && (gender.dirty || gender.touched)">
        <div [hidden]="!gender.errors.required">gender is required</div>
      </div>

      <p>
        <label for="isMarried">Married </label>
        <input
          type="checkbox"
          id="isMarried"
          name="isMarried"
          formControlName="isMarried"
        />
      </p>
      <div *ngIf="!isMarried.valid && (isMarried.dirty || isMarried.touched)">
        <div [hidden]="!isMarried.errors.required">isMarried is required</div>
      </div>

      <p>
        <label for="country">country </label>
        <select id="country" name="country" formControlName="country">
          <option [ngValue]="c.id" *ngFor="let c of countryList">
            {{ c.name }}
          </option>
        </select>
      </p>
      <div *ngIf="!country.valid && (country.dirty || country.touched)">
        <div [hidden]="!country.errors.required">country is required</div>
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
        <div *ngIf="!city.valid && (city.dirty || city.touched)">
          <div [hidden]="!city.errors.required">city is required</div>
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
        <div *ngIf="!street.valid && (street.dirty || street.touched)">
          <div [hidden]="!street.errors.required">street is required</div>
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
        <div *ngIf="!pincode.valid && (pincode.dirty || pincode.touched)">
          <div [hidden]="!pincode.errors.required">pincode is required</div>
        </div>
      </div>

      <p class="mt-5">
        <button
          type="submit"
          class="btn btn-primary"
          [disabled]="!contactForm.valid"
        >
          Submit
        </button>
      </p>
    </form>

    <h3 class="m-0 mt-5">Form Status</h3>
    <b>valid : </b>{{ contactForm.valid }} <br />
    <b>invalid : </b>{{ contactForm.invalid }} <br />
    <b>touched : </b>{{ contactForm.touched }} <br />
    <b>untouched : </b>{{ contactForm.untouched }} <br />
    <b>pristine : </b>{{ contactForm.pristine }} <br />
    <b>dirty : </b>{{ contactForm.dirty }} <br />
    <b>disabled : </b>{{ contactForm.disabled }} <br />
    <b>enabled : </b>{{ contactForm.enabled }}

    <h3 class="m-0 mt-5">Form Value</h3>
    {{ contactForm.value | json }}
  `,
})
export class ReactiveFormWithValidationsComponent implements OnInit {
  contactForm: any;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      }),
    });
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get city() {
    return this.contactForm.get('address').get('city');
  }

  get street() {
    return this.contactForm.get('address').get('street');
  }

  get pincode() {
    return this.contactForm.get('address').get('pincode');
  }

  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'England'),
  ];

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contactForm.value);
  }
}

export class Country {
  id: string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
