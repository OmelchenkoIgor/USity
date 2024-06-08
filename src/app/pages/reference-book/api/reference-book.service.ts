import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class referenceBookService {
  private http: HttpClient = inject(HttpClient);

  private url = 'https://test-server-lovat.vercel.app';

    getReferenceBookList(): Observable<any> {
      return this.http.get(this.url + '/api/handbook');
    }
}
