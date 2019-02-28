import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: Http) { }

  getHubUsers(): Observable<any> {
     const url = `${'http://localhost:8888/hubUsers'}`;
    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRetweeters(): Observable<any> {
     const url = `${'http://localhost:8888/retweeters'}`;
    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findRepliesByIdDates(id: number, arr_dates: Date[]): Observable<any> {

     const url = `${'http://localhost:8080/users'}/1034105453989572608/${arr_dates}/replies`;
 
    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findTweetsById(id: number): Observable<any> {

     const url = `${'http://localhost:8080/users'}/1034105453989572608/tweets`;
 
    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findTweetsRepliesById(id: number): Observable<any> {

     const url = `${'http://localhost:8080/users'}/1034105453989572608/tweetsWithReplies`;
 
    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findTweetsRepliesById2(id: number, dateRangeStart: string, dateRangeEnd: string): Observable<any> {

     const url = `${'http://localhost:8080/users'}/1034105453989572608/${dateRangeStart}/${dateRangeEnd}/tweetsWithReplies`;
 
    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findTweetsRetweetsById(id: number): Observable<any> {

     const url = `${'http://localhost:8080/users'}/1034105453989572608/tweetsWithRetweets`;
 
    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findTweetsRetweetsById2(id: number, dateRangeStart: string, dateRangeEnd: string): Observable<any> {

     const url = `${'http://localhost:8080/users'}/1034105453989572608/${dateRangeStart}/${dateRangeEnd}/tweetsWithRetweets`;
 
    return this.http.get(url)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
