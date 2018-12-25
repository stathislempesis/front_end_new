import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class RetweetsService {

  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: Http) { }

  findRetweetsById(id: number): Observable<any> {
    /*const url = `${this.apiUrl}/${id}/tweets`;*/
     const url = `${this.apiUrl}/1034105453989572608/retweets`;
    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
