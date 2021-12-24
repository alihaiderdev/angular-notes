import { Todo } from './../../Todo';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// there are 3 ways to specifies the selector for your Component
@Component({
  // selector: '[app-todo-item]',
  // selector: '.app-todo-item',
  selector: 'app-todo-item',
  // template: '<div>Inline Template</div>',
  // template: `<div class="my-3">
  //   <h5 [ngClass]="{ strike: !todo.active }">
  //     {{ todo.title }}
  //   </h5>
  //   <p class="mb-2" [ngClass]="{ strike: !todo.active }">
  //     {{ todo.description }}
  //   </p>
  //   <div class="mb-3 form-check">
  //     <input
  //       type="checkbox"
  //       class="form-check-input"
  //       id="todo{{ i }}"
  //       (click)="onCheckboxClick(todo)"
  //       [checked]="!todo.active"
  //     />
  //     <label class="form-check-label" for="todo{{ i }}">Done</label>
  //   </div>
  //   <button class="btn btn-danger btn-sm" (click)="deleteItem(todo)">
  //     Delete
  //   </button>
  // </div> `,
  templateUrl: './todo-item.component.html',
  // template: `<h1>{{ parentData }}</h1>`,
  // styleUrls: ['./todo-item.component.css'],
  styles: [
    `
      .strike {
        text-decoration: line-through;
      }
    `,
  ],
})
export class TodoItemComponent implements OnInit {
  // @Input() parentData: string;
  @Input('parentData') name: any;
  @Output() childEvent = new EventEmitter();
  fireEvent(): void {
    this.childEvent.emit('Hey Codevolution');
  }

  // if we passing some arguments in a components then we also accept it by using Input directive
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteItem(todo: Todo): void {
    this.todoDelete.emit(todo);
    // console.log('onclick has been triggered');
  }
  onCheckboxClick(todo: Todo) {
    this.todoToggle.emit(todo);
  }
}
