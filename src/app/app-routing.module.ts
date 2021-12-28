import { ResolveGuard } from './guards/resolve.guard';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UnSavedChangesGuard } from './guards/un-saved-changes.guard';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LocationComponent } from './components/location/location.component';
import { PostBodyComponent } from './components/post-body/post-body.component';
import { PostTitleComponent } from './components/post-title/post-title.component';
import { PostComponent } from './components/post/post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PracticeComponent } from './components/practice/practice.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PostsComponent } from './components/posts/posts.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AboutComponent } from './components/about/about.component';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '**', component: PageNotFoundComponent },
  // redirectTo: '/practice-playground',
  // pathMatch: 'prefix | full',
  // default route
  { path: '', component: TodosComponent, canDeactivate: [UnSavedChangesGuard] },
  {
    path: 'add-user',
    component: AddUserComponent,
    canDeactivate: [UnSavedChangesGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'location', outlet: 'map', component: LocationComponent }, // for used name router outlet we do this thing additional and the name goes here the same as passed in named router outlet
      { path: 'feedback', outlet: 'feeds', component: FeedbackComponent },
    ],
  },
  { path: 'photos', component: PhotosComponent },
  // { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'posts', component: PostsComponent, resolve: { data: ResolveGuard } },
  // implementing child routes in angular
  {
    path: 'posts/:id',
    component: PostComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AdminGuard],
    children: [
      // { path: '', redirectTo: 'title', pathMatch: 'full' }, // if we setting any default route in our child routes array then we will face error while accessing its parent route
      { path: 'title', component: PostTitleComponent },
      { path: 'body', component: PostBodyComponent },
    ],
  },
  { path: 'pipes', component: PipesComponent },
  { path: 'practice-playground', component: PracticeComponent },
  // Wildcard route for a 404 page
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  PracticeComponent,
  PipesComponent,
  PostsComponent,
  PhotosComponent,
  AboutComponent,
  TodosComponent,
];
// const routes: Routes = [
//   { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
//   { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
// ];
