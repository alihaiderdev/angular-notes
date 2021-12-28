import { Employee } from './../../models/employee';
import { EmployeeService } from './../../services/employee.service';
import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-practice',
  // template: `<app-interpolation></app-interpolation> `,
  styles: [
    `
      p {
        margin: 0;
      }
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
  template: `<h1>Interpolation:</h1>
    <p>Interpolation: bind data from class to html</p>
    <h5>Things that we do using interpolation</h5>
    <p>Welcome Codevolution</p>
    <p>Welcome {{ fullName }}</p>
    <p>{{ fullName.toUpperCase() + ' ' + fullName.length }}</p>
    <p>{{ 20 * 20 }}</p>
    <p>{{ greetUser('hasnain anwar') }}</p>
    <p>{{ greetUser('usman anwar') | capitalizeFirstLetter }}</p>
    <p>{{ 'Multiple of 20: ' + 20 * 20 }}</p>
    <p>{{ 'siteUrl: ' + siteUrl }}</p>
    <h5>
      Things that we don't do using interpolation: (can't assign variables and
      can't get global variables
    </h5>
    <!-- <p>{{a=100+100}}</p>  -->
    <!-- <p>{{ window.location.href }}</p>  -->

    <h1>Binding: (property, class, style, event)</h1>
    <h5 [class]="successClass">Property binding</h5>
    <h6>difference between html attribute and DOM property</h6>
    <p>
      attributes (initialize value) <br />
      properties (current values) <br />
      attributes and properties are not the same
      <br />
      attributes are defined by HTML <br />properties are defined by DOM <br />
      attributes initialize DOM properties and then they are done, attribute
      values can't change once they are initialize <br />
      properties values however can change
    </p>
    <input [id]="myId" type="text" value="Ali Haider" />
    <!-- property binding using interpolation (limitation: only works with string values)  -->
    <!-- disabled to false or true not working using interpolation and not using
    normal HTML way -->
    <input
      disabled="{{ false }}"
      id="{{ myId }}"
      type="text"
      value="Ali Haider"
    />
    <input [disabled]="false" id="{{ myId }}" type="text" value="Ali Haider" />
    <input
      [disabled]="isDisabled"
      id="{{ myId }}"
      type="text"
      value="Ali Haider"
    />
    <!-- another way of property binding  -->
    <input
      bind-disabled="isDisable"
      id="{{ myId }}"
      type="text"
      value="Ali Haider"
    />

    <h5 [class]="successClass">Class binding</h5>
    <p class="text-danger">Class Binding</p>
    <p [class]="successClass">Class Binding</p>
    <p class="text-special" [class]="successClass">Class Binding</p>
    <!-- another way of class binding  -->
    <p [class.text-danger]="hasError">Class Binding</p>
    <!-- apply multiple classes angular provides ngClass directives  -->
    <p [ngClass]="messageClasses">Class Binding</p>

    <h5 [class]="successClass">Style binding</h5>
    <p [style.color]="'orange'">Style Binding</p>
    <p [style.color]="hasError ? 'red' : 'green'">Style Binding</p>
    <p [style.color]="highlightColor">Style Binding</p>
    <!-- apply multiple styles angular provides ngStyles directives  -->
    <p [ngStyle]="titleStyle">Style Binding</p>

    <h5 [class]="successClass">Event binding</h5>
    <!-- <button (click)="greet()">Greet</button> -->
    <!-- by using $event we can get access to all the properties of the DOm event of
    current element -->
    <!-- <button (click)="greet($event)">Greet</button> -->
    <button (click)="greeting = 'Welcome Ali Haider'">Greet</button>
    <p *ngIf="greeting !== ''; else hide">{{ greeting }}</p>
    <ng-template #hide></ng-template>
    <!-- <p>{{ greeting }}</p> -->

    <h1>Template Reference Variables</h1>
    <p>Template reference variables is used for Referencing HTML elements</p>
    <!-- here #myInput is Template Reference Variable  -->
    <input #myInput type="text" />
    <button (click)="logMessage(myInput)">Log</button>

    <h1>Two Way Binding</h1>
    <p>
      view and model should always be in sink for Two Way Binding Angular
      provides another directive namely ngModel directive
      <br />
      ngModel: update property value and at the same time display the value of
      the property
    </p>

    <!-- here [] or square brackets for property binding which is data flow from a class to a template and we have () or parenthesis for event binding so the data flow from the template to the class -->
    <input [(ngModel)]="name" type="text" />
    <span class="text-danger">{{ name }}</span>

    <h1>Structural Directives</h1>
    <p>
      add and remove HTML elements from the DOM <br />
      3 common built-in structural directives
    </p>
    <ol>
      <li>ngIf</li>
      : used for conditionally render HTML elements
      <li>ngSwitch</li>
      : used for conditionally render HTML elements
      <li>ngFor</li>
      : used to render list of HTML elements
    </ol>
    <h5 [class]="successClass">ngIf Directive</h5>

    <p *ngIf="false">hasnain</p>
    <p *ngIf="true">ali haider</p>
    <!-- <p *ngIf="displayName">ali haider</p> -->

    <p *ngIf="displayName; else hidden">ali haider</p>
    <ng-template #hidden>
      <p>Name is hidden</p>
    </ng-template>

    <!-- another way of using *ngIf directive  -->
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <p>Codevolution</p>
    </ng-template>
    <ng-template #elseBlock>
      <p>Hidden</p>
    </ng-template>

    <h5 [class]="successClass">ngSwitch Directive</h5>
    <span [ngSwitch]="color">
      <p *ngSwitchCase="'red'">You picked red color</p>
      <p *ngSwitchCase="'blue'">You picked blue color</p>
      <p *ngSwitchCase="'green'">You picked green color</p>
      <p *ngSwitchDefault>
        The color you picked is not match with our color range
      </p>
    </span>
    <h5 [class]="successClass">ngFor Directive</h5>
    <!-- <div *ngFor="let color of colors; let i = index">
      <p>{{ i + 1 + '- ' + color }}</p>
    </div>  -->
    <h3 class="text-danger">for index</h3>
    <div *ngFor="let color of colors; index as i">
      <p>{{ i + 1 + '- ' + color }}</p>
    </div>

    <h3 class="text-danger">for first</h3>
    <div *ngFor="let color of colors; first as f">
      <p>{{ f + '- ' + color }}</p>
    </div>
    <h3 class="text-danger">for last</h3>
    <div *ngFor="let color of colors; last as l">
      <p>{{ l + '- ' + color }}</p>
    </div>

    <h3 class="text-danger">for odd</h3>
    <div *ngFor="let color of colors; odd as o">
      <p>{{ o + '- ' + color }}</p>
    </div>

    <h3 class="text-danger">for even</h3>
    <div *ngFor="let color of colors; even as e">
      <p>{{ e ? 'even' + '- ' + color : 'odd' + '- ' + color }}</p>
    </div>

    <h1>Component Interaction</h1>
    <p>
      parent component might be passing some data to child component and also
      child component might be passing some data to parent component and in
      angular we can do this by using input and output decorators <br />
      using @Input decorator the child can accept input from the parent <br />
      using @Output decorator the child will send out events to parent to
      indicate something
    </p>
    <h5>
      first sending data from parent to child component (todos Component ->
      todo-item Component)
    </h5>

    <h1>Pipes</h1>
    <p>pipes allow us to transform data before displaying them in a view</p>

    <p>
      Pipes that are applicable for strings and objects <br />
      {{ message }}<br />
      {{ message | lowercase }} <br />
      {{ message | uppercase }} <br />
      {{ message | titlecase }} <br />
      {{ message | slice: 5 }} <br />
      {{ message | slice: 5:10 }} <br />
      {{ person }} <br />
      {{ person | json }} <br />
      Pipes that are applicable for numbers <br />
      {{ 5.678 }} <br />
      <!-- 1.2-3 here 
      1 represents the minimum number of integer digits 
      2 represents the minimum number of decimal digits 
      3 represents the maximum number of decimal digits -->
      {{ 5.678 | number: '1.2-3' }} <br />
      {{ 5.678 | number: '3.4-5' }} <br />
      {{ 5.678 | number: '3.1-2' }} <br />
      {{ 0.25 | percent }} <br />
      {{ 0.25 | currency }} <br />
      <!-- by default currency is in US dollar  -->
      {{ 0.25 | currency: 'GBP' }} <br />
      {{ 0.25 | currency: 'GBP':'code' }} <br />
      {{ 0.25 | currency: 'EUR' }} <br />
      {{ 0.25 | currency: 'EUR':'code' }} <br />
      Pipes that are applicable for dates <br />
      {{ date }} <br />
      {{ date | date }} <br />
      <br />
      {{ date | date: 'short' }} <br />
      {{ date | date: 'shortDate' }} <br />
      {{ date | date: 'shortTime' }} <br />
      <br />
      {{ date | date: 'medium' }} <br />
      {{ date | date: 'mediumDate' }} <br />
      {{ date | date: 'mediumTime' }} <br />
      <br />
      {{ date | date: 'long' }} <br />
      {{ date | date: 'longDate' }} <br />
      {{ date | date: 'longTime' }} <br />
    </p>

    <h1>Services</h1>
    <p>
      service is a class with specific purpose <br />
      Responsibilities of services: <br />
      Share data <br />
      implement application logic <br />
      external interaction (connecting to a DB) <br />
      by convention service name should be service_name.service.ts<br />
      how do we use service? the answer is using dependency injection
    </p>
    <hr />
    <h5>Employee Name List</h5>
    <ul style="margin: 0;" *ngFor="let employee of employees; index as i">
      <li>{{ employee.name }}</li>
    </ul>
    <hr />
    <app-employee-detail></app-employee-detail>

    <h1>Dependency Injection (DI)</h1>
    <p>
      Dependency Injection (DI) framework from Angular is a coding pattern in
      which a class receives its dependencies from external sources rather than
      creating them itself
      <br />
      Code without DI - drawbacks <br />
      DI as a design pattern <br />
      DI as framework provided by Angular <br />
      we register all the services with the injector <br />
      steps for using a services <br />
      1- Create a service (define the service class) <br />
      2- register the service with angular built in injector <br />
      3- declare as dependency in employee list and employee detail <br />
      and to register a service we use provider metadata <br />
      we register our service in many places but we register our service in
      app.module file because in this way we use it in all its child components
      easily
    </p>

    <h1>HTTP and Observables</h1>
    <p>
      HTTP: (get, put, patch, post, delete) HTTP is used for request the data
      from the server so for this we used HTTP request <br />
      the HTTP get request will hit a web API or a web service which will fetch
      the data from database and send it back as an HTTP response <br />
      <br />
      Observables: and the response we get back from HTTP call is called
      observable <br />
      A sequence of items that arrive asynchronously over time. <br />
      HTTP call - single item <br />
      single item - HTTP response
    </p>
    <h5 class="text-success">HTTP, Observables and RxJS</h5>
    <p>
      1- HTTP GET request from EmpService <br />
      2- Receive the observable and cast it into an employee array <br />
      3- subscribe to the observable from EmpList and EmpDetail <br />
      4- assign the employee array to local variable
    </p>
    <h5 class="text-success">RxJS</h5>
    <p>
      Reactive extensions for javascript <br />
      External library to work with observable
    </p>

    <h1>Fetch Data Using HTTP and HTTP Error Handling</h1>
    <p>
      In Angular 5 we see a change in the module responsible for HTTP <br />
      till Angular version 4 we use HTTP module for HTTP but from version 5 we
      use HttpClientModule <br />
      HttpClientModule provides a simplified API for HTTP functionality for use
      with Angular Applications
    </p>

    <h1>Wildcard Route and Redirecting Routes</h1>
    <p>
      A better way to handler invalid or not existing URL's in application is to
      using wildcard route and show 404 page not found page or something like
      that <br />
      the Wildcard route should always be the last route in the routes array
    </p>

    <h1>Relative Navigation</h1>
    <p>
      path that is started with / or slash is called absolute paths<br />
      the drawback of absolute path is if we change a route path to some new or
      other path then we not only change in routing module file but also could
      change its all occurrences in all files <br />
      to resolve this issue we use relative navigation
    </p>

    <h1>Promises and observable</h1>
    <p>
      1- Promises: promises are eager it means it call as soon as you define it
      it does not matter someone is there listening / calling to it or not
      <br />2- promise can emit only single value <br />
      3- in promises we dont have operators<br />
      1- Observable: observables are lazy if nobody is there to listen it will
      not make a call so observable need subscriber if there is at least one
      subscriber only then observable call <br />
      2- observable can return multiple values <br />
      3- observable behaves like an array so we can use operators on the
      observable object to apply some operation on my data 4. as we subscribe
      our observable in the same way we can also unsubscribe it but in promise
      we dont that kind of thing
    </p>

    <h1>Make protected routes using guards</h1>
    <p>
      Angular route guards are interfaces provided by angular which when
      implemented allow us to control the accessibility of a route based on
      condition provided in class implementation of that interface.
    </p>
    <h4>CanActivate Route Guard</h4>
    <ol>
      <li>
        Route guards are interfaces which tell he router whether or not it
        should allow navigation to a requested route
      </li>
      <li>
        Guard function can return either a boolean or Observable &lt;boolean&gt;
        or promise &lt;boolean&gt; which resolve to a boolean at some point of
        time in the future
      </li>
      <li>
        if all guards return true then navigation will continue and if one of
        the guard return false navigation will be cancel
      </li>
      <h4>In angular we have 5 guards</h4>
      <ol>
        <li>CanActivate: checks to see if a user can visit a route</li>
        <li>
          CanActivateChild: checks to see if a user can visit a children routes
        </li>
        <li>
          CanDeactivate: checks to see if a user can exit a route (e.g: leave a
          page without saving its content using this guard route we can show an
          alert box to user to save the changes before leaving that specific
          route)
        </li>
        <li>
          Resolve: performs route data retrieval before route activation(e.g: if
          we want some data before visiting the targeted route, so in that case
          until the data are not get resolve the route will wait)
        </li>
        <li>
          CanLoad: checks to see if a user can route to a module that lazy
          loaded
        </li>
      </ol>
    </ol>

    <p>
      all guards in angular are interfaces that a class can implement <br />
      CanActivate: Interface that a class can implement to be guard deciding if
      a route an be activated.if all guards return true , navigation will
      continue. if any guard returns false, navigation will be cancel
      <br />we can use this command for creating a guard : ng g guard guardName
    </p>

    <h1>CanActivateChild Route Guard</h1>
    <ol>
      <li>
        Interface that a class can implement to be a guard deciding if a child
        route can be activated
      </li>
      <li>
        If all guards return true, navigation will continue. if any guard
        returns false navigation will be canceled
      </li>
    </ol>

    <h1>CanDeactivate guard route</h1>
    <ol>
      <li>
        the angular canDeactivate guard is called, whenever we navigate away
        from the route before the current component gets deactivated
      </li>
      <li>
        for example: giving a user a confirmation if he leave the page without
        saving the data ( fill a form and not saving a form )
      </li>
    </ol>

    <h1>Resolve route guard</h1>
    <p>
      resolve route guard allow us to provide the needed data for a route,
      before the route is activated <br />
      <br />
      when to use? <br />
      when you want to make sure that data from one or different source is
      available before the Component loads <br />
      when the data is critical for the Component view
    </p>`,
})
export class PracticeComponent implements OnInit, OnDestroy, OnChanges {
  private mySubscription: Subscription;
  // Interpolation code
  fullName = 'Ali Haider';
  siteUrl = window.location.href;
  greetUser(fullName: string): string {
    return `hello ${fullName}`;
  }

  // Binding code

  // property binding: data binding class -> template
  myId = 'testId';
  isDisabled = true;
  isDisable = false;

  // class binding: data binding class -> template
  successClass = 'text-success';
  hasError = true;
  isSpecial = true;
  messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  // style binding: data binding class -> template
  highlightColor = 'orange';
  titleStyle = {
    color: 'blue',
    textTransform: 'uppercase',
  };

  // event binding: data binding template -> class
  greeting = '';
  greet(event: any): void {
    console.log('Welcome to Angular World!', event, event.target);
    this.greeting = 'Welcome to Angular World!';
  }

  // Template Reference Variables Code
  logMessage(input: any) {
    console.log(input.value);
  }

  // Two Way Binding Code
  name = '';

  // Structural Directives Code

  // ngIf directive
  displayName = false;
  // ngSwitch directive
  color = 'red';
  // ngFor directive (used for render list of html elements)
  colors: string[] = ['red', 'blue', 'green', 'yellow'];

  // Pipes Code
  message = 'hello Ali Haider';
  person = {
    ['firstName']: 'ali',
    ['lastName']: 'haider',
  };
  date = new Date();

  // Services Code
  // employees = [
  //   { id: 1, name: 'Ali Haider', age: 23 },
  //   { id: 2, name: 'Arfeen', age: 25 },
  //   { id: 3, name: 'Arsalan', age: 26 },
  //   { id: 4, name: 'Kulsoom', age: 27 },
  //   { id: 5, name: 'Zohaib', age: 24 },
  //   { id: 6, name: 'Talha', age: 19 },
  // ];

  // Dependency Injection Code
  // // ngOnInit is a lifecyle hook in Angular we have many other lifecyle hooks
  // // jab Component first time initialize or render hota hai tab ya hook call hoti hai

  // employees: any;
  // employees: { id: number; name: string; age: number }[];
  // employees: Employee[];
  // constructor(private employeeService: EmployeeService) {}
  // ngOnInit(): void {
  //   this.employees = this.employeeService.getEmployees();
  // }

  // HTTP and Observables Code

  // Fetch Data Using HTTP Code
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    // here this.employeeService.getEmployees() is return an observable and to use this observable in specific component we need to subcribe it
    // from the observable we get the data asynchronously
    this.employeeService
      .getEmployees()
      .subscribe((data) => (this.employees = data));

    // Difference between Promises and observable Code by Nisha Singla

    // creating promise
    const promise = new Promise((resolve, reject) => {
      // console.log('Promise call');
      setTimeout(() => {
        resolve('Promise Working');
        resolve('Promise Working 1');
        resolve('Promise Working 2');
      }, 1000);
    });

    // console.log({ promise });

    // promise.then((result) => {
    //   console.log(result);
    // });

    // creating observable
    // const observable1 = new Observable((subscribe) => {
    //   console.log('Observable call');
    //   setTimeout(() => {
    //     subscribe.next('Observable working');
    //     subscribe.next('Observable working 1');
    //     subscribe.next('Observable working 2');
    //     subscribe.next('Observable working 3');
    //     subscribe.next('Observable working 4');
    //   }, 1000);
    // });

    // console.log({ observable });

    // observable1.subscribe((result) => {
    //   console.log(result);
    // });

    // observable
    //   .pipe(filter((d) => d === 'Observable working 2'))
    //   .subscribe((result) => {
    //     console.log(result);
    //   });

    const observable = new Observable((subscribe) => {
      console.log('Observable call');
      let counter = 0;
      setInterval(() => {
        counter++;
        subscribe.next(counter);
      }, 1000);
    });

    // this.mySubscription = observable.subscribe((result) => {
    //   console.log(`Subscriber count: ${result}`);
    // });
  }

  ngOnDestroy(): void {
    // this.mySubscription.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log({ changes });
  }

  // RXJS Angular Interview Questions
  // Question   no:  1  :-  Whats the full form of RxJs?
  // Question   no:  2  :- What is the purpose of RxJs?
  // Question   no:  3  :- What are observables and observers?
  // Question   no:  4  :- Explain the use of Subscribe with sample code?
  // Question   no:  5  :- How to unsubscribe in rxJs?
  // Question   no:  6  :- Explain concept of operators with sample code?
  // Question   no:  7  :- How to install rxJs?
  // Question   no:  8  :- Differentiate between promise and RxJs?
  // Question   no:  9  :- In Angular where have you used Rxjs?
  // Question   no:  10  :- Which operators have you used from rxJs?
  // Question   no:  11  :- What is Push/reactive vs Pull/Imperative?

  // Protecting routes with the help of guards Code By Nisha Singla
  // CanActivate Route Guard
  // CanActivateChild Route Guard
}
