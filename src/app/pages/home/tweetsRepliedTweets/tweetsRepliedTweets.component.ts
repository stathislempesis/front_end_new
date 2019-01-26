import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-home-tweetsRepliedTweets',
  styleUrls: ['./tweetsRepliedTweets.component.scss'],
  templateUrl: './tweetsRepliedTweets.component.html',
})
export class TweetsRepliedTweetsComponent implements OnDestroy {

  private alive = true;

  revealed = false;
  period: string = 'week';

  constructor() {

  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
