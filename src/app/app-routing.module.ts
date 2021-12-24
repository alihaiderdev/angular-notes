import { PracticeComponent } from './components/practice/practice.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PostsComponent } from './components/posts/posts.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AboutComponent } from './components/about/about.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TodosComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent, pathMatch: 'full' },
  { path: 'posts', component: PostsComponent, pathMatch: 'full' },
  { path: 'pipes', component: PipesComponent, pathMatch: 'full' },
  {
    path: 'practice-playground',
    component: PracticeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// const routes: Routes = [
//   { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
//   { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
// ];
