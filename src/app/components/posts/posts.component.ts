import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  errorMessage: string;
  constructor(private _postService: PostService) {}
  ngOnInit(): void {
    this._postService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log('posts: ', this.posts);
      },
      (error) => {
        this.errorMessage = error;
        console.log('error: ', this.errorMessage);
      }
    );
  }
}
