import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-posts',
  // templateUrl: './posts.component.html',
  // styleUrls: ['./posts.component.css'],
  styles: [
    `
      .selected {
        background-color: lightgray;
        padding: 1rem 0.25rem;
        border-radius: 0.25rem;
      }
    `,
  ],
  template: ` <ul style="list-style: none">
    <!-- [class.selected]="isSelected(post)" -->
    <!-- (click)="onSelect(post)" -->
    <li
      [ngClass]="{ selected: isSelected(post) }"
      *ngFor="let post of posts; index as i"
      style="cursor: pointer; margin: 1.2rem 0"
    >
      <a [routerLink]="['/posts', post.id]"
        >{{ post.userId }} - {{ post.id }} - {{ post.title }} -
        {{ post.body }}</a
      >
    </li>
  </ul>`,
})
export class PostsComponent implements OnInit {
  posts: Post[];
  errorMessage: string;

  selectedId: number;
  constructor(
    private _postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this._postService.getPosts().subscribe(
    //   (data) => {
    //     this.posts = data;
    //     console.log('posts: ', this.posts);
    //   },
    //   (error) => {
    //     this.errorMessage = error;
    //     console.log('error: ', this.errorMessage);
    //   }
    // );
    console.log(this.route, 'route');
    this.posts = this.route.snapshot.data['data']; // here data is the same key we mentioned in router file

    this.route.paramMap.subscribe(
      (params: ParamMap) =>
        (this.selectedId = parseInt(params.get('id') as any))
    );
  }
  onSelect(post: Post) {
    // code for absolute path
    this.router.navigate(['/posts', post.id]); // here /posts is absolute path

    // code for relative navigation
    // this.router.navigate([post.id], { relativeTo: this.route });
  }

  isSelected(post: any): boolean {
    return post.id === this.selectedId;
  }
}
