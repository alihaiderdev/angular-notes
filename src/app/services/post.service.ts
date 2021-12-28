import { Injectable } from '@angular/core';
import { Post } from './../models/post';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// detecing error in older versions of angular
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  // detecing error in older versions of angular
  // getPosts() {
  //   return this.http
  //     .get(`https://jsonplaceholder.typicode.com/posts`)
  //     .catch((error) => {
  //       return Observable.throw(error || 'Server Error');
  //     });
  // }
}
