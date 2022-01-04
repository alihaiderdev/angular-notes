import { PracticePlaygroundModule } from './featured-modules/practice-playground.module';
import { ResolveGuard } from './guards/resolve.guard';
import { UnSavedChangesGuard } from './guards/un-saved-changes.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { EmployeeService } from './services/employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { SquarePipe } from './pipes/square.pipe';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import { ReverseStringPipe } from './pipes/reverse-string.pipe';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostComponent } from './components/post/post.component';
import { PostTitleComponent } from './components/post-title/post-title.component';
import { PostBodyComponent } from './components/post-body/post-body.component';
import { NgxsModule } from '@ngxs/store';
import { LocationComponent } from './components/location/location.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { TdfFormComponent } from './components/tdf-form/tdf-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormWithValidationsComponent } from './components/reactive-form-with-validations/reactive-form-with-validations.component';

import { MatSliderModule } from '@angular/material/slider';

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
    PostComponent,
    PostTitleComponent,
    PostBodyComponent,
    LocationComponent,
    FeedbackComponent,
    AddUserComponent,
    TdfFormComponent,
    ReactiveFormComponent,
    ReactiveFormWithValidationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    // normal loading for PracticePlaygroundModule
    // PracticePlaygroundModule,
    // lazing loading for PracticePlaygroundModule
    // NgxsModule.forRoot([ZooState], {
    //   developmentMode: !environment.production,
    // }),
  ],
  providers: [
    // EmployeeService,
    // AuthService,
    // AuthGuard,
    // AdminGuard,
    // UnSavedChangesGuard,
    // ResolveGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
