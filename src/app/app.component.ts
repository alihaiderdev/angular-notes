import { Component } from '@angular/core';

// here @Component is decorator and decorator is nothing but just a function that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-website-by-cwh';
  constructor() {
    // setTimeout(() => {
    //   this.title = 'angular website by cwh';
    // }, 5000);
  }
}
