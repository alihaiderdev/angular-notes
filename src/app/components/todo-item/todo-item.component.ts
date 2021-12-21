import { Todo } from './../../Todo';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
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
