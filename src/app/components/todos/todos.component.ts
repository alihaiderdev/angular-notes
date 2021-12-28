import { Component, OnInit } from '@angular/core';
import { Todo } from './../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  name = 'Ali Haider';
  message = '';
  todos: Todo[];
  localItem: string | null;
  constructor() {
    // console.log('constructor called');
    this.localItem = localStorage.getItem('todos');
    if (this.localItem === null) {
      this.todos = [];
    }
    this.todos = JSON.parse(this.localItem || '[]');
  }

  // ngOnChanges(): void {
  //   console.log('ngOnChanges called');
  // }
  ngOnInit(): void {
    // console.log('ngOnInit called');
  }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck called');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit called');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked called');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit called');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked called');
  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy called');
  // }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    // console.log(todo);
    this.todos.splice(this.todos.indexOf(todo), 1);
    // console.log('todos: ', this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    let todoIndex = this.todos.indexOf(todo);
    this.todos[todoIndex].active = !this.todos[todoIndex].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
