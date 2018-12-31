import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:8888/hubUsers';

  constructor(private http: Http) { }

  getHubUsers(): Observable<any> {
     const url = `${this.apiUrl}`;
    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
