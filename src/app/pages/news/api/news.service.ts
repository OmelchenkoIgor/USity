import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class newsService {
  private http: HttpClient = inject(HttpClient);

  private url = 'https://test-server-lovat.vercel.app';

  getNewsData(newsId: string): Observable<any> {
    return this.http.get(this.url + '/api/news/' + newsId);
  }
}
