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
    this.localItem = localStorage.getItem('todos');
    if (this.localItem === null) {
      this.todos = [];
    }
    this.todos = JSON.parse(this.localItem || '[]');
  }

  ngOnInit(): void {}

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
