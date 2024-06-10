import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class newsService {
  private http: HttpClient = inject(HttpClient);

  private url = 'https://test-server-lovat.vercel.app';

  getNewsList(): Observable<any> {
    return this.http.get(this.url + '/api/news' );
  }
}
