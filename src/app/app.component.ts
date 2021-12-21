import { Component } from '@angular/core';

// here @Component is decorator
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
