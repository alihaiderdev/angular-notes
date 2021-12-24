import { EmployeeService } from './services/employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { PhotosComponent } from './components/photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { PipesComponent } from './components/pipes/pipes.component';
import { SquarePipe } from './pipes/square.pipe';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { PracticeComponent } from './components/practice/practice.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    PostsComponent,
    PhotosComponent,
    SqrtPipe,
    PipesComponent,
    SquarePipe,
    CapitalizeFirstLetterPipe,
    ReverseStringPipe,
    PracticeComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
