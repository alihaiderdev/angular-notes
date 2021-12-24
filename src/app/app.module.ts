import { EmployeeService } from './services/employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { SquarePipe } from './pipes/square.pipe';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// import { TodosComponent } from './components/todos/todos.component';
// import { AboutComponent } from './components/about/about.component';
// import { PostsComponent } from './components/posts/posts.component';
// import { PhotosComponent } from './components/photos/photos.component';
// import { PipesComponent } from './components/pipes/pipes.component';
// import { PracticeComponent } from './components/practice/practice.component';
@NgModule({
  declarations: [
    // TodosComponent,
    // AboutComponent,
    // PostsComponent,
    // PhotosComponent,
    // PipesComponent,
    // PracticeComponent,
    routingComponents,
    AppComponent,
    TodoItemComponent,
    AddTodoComponent,
    SqrtPipe,
    SquarePipe,
    CapitalizeFirstLetterPipe,
    ReverseStringPipe,
    EmployeeDetailComponent,
    PageNotFoundComponent,
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
