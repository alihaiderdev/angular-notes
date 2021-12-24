import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  getPost() {
    return this.httpClient
      .get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        return res;
      });
  }
}
