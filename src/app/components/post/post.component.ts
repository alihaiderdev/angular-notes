import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  template: `
    <h1 class="text-center">Post {{ postId }}</h1>

    <ul class="d-flex">
      <li class="py-2 px-4"><a routerLink="title">Title</a></li>
      <li class="py-2 px-4"><a routerLink="body">Body</a></li>
    </ul>

    <router-outlet></router-outlet>

    <div class="pagination">
      <a (click)="goPrevious()">Previous</a>
      <a (click)="goNext()">Next</a>
    </div>
    <a (click)="goBack()">Back</a>
  `,
  styles: [
    `
      ul {
        margin: 0px;
        padding: 0px;
        list-style: none;
      }
      .pagination {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      a {
        cursor: pointer;
        text-decoration: none;
      }
    `,
  ],
})
export class PostComponent implements OnInit {
  postId: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    // this.postId = parseInt(this.route.snapshot.paramMap.get('id') as any);
  }
  ngOnInit(): void {
    // this.postId = parseInt(this.route.snapshot.paramMap.get('id') as any);
    // see by using the snapShot approach the route is change on click on previous and next button but the UI is not changing

    // console.log('route:', this.route);

    this.route.paramMap.subscribe(
      (params: ParamMap) => (this.postId = parseInt(params.get('id') as any))
    );
  }
  goPrevious(): void {
    this.router.navigate(['/posts', this.postId - 1]);
    // this.router.navigate(['/post-list', this.postId - 1]);

    // this.router.navigate(['../', this.postId - 1]);
  }
  goNext(): void {
    this.router.navigate(['/posts', this.postId + 1]);
    // this.router.navigate(['/post-list', this.postId + 1]);

    // this.router.navigate(['../', this.postId + 1]);
  }
  goBack(): void {
    let selectedId = this.postId ? this.postId : null;
    this.router.navigate(['/posts', { id: selectedId, test: 'test-value' }]);
    // this.router.navigate(['/post-list', { id: selectedId, test: 'test-value' }]);

    // this.router.navigate(['../', { id: selectedId }], {
    //   relativeTo: this.route,
    // });
  }

  showTitle() {
    this.router.navigate(['title'], { relativeTo: this.route });
  }
  showBody() {
    this.router.navigate(['body'], { relativeTo: this.route });
  }
}
