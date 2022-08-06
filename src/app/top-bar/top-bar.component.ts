import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  constructor(private http: HttpClient) {}

  public call() {
    // alert(123);
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1', {
        headers: new HttpHeaders({
          Authorization: 'my-auth-token',
          'x-header': 'x-value',
        }),
      })
      .subscribe();
  }
}
