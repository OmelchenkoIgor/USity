import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class locationsService {
  private http: HttpClient = inject(HttpClient);

  private url = 'https://test-server-lovat.vercel.app';

    getLocationList(type: string, page: number): Observable<any> {
      return this.http.get(this.url + '/api/type/' + type + '/' + page );
    }
}
