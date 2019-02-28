import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home.service";

@Component({
  selector: 'ngx-home-retweeters',
  template: `
    <nb-list>
        <nb-list-item *ngFor="let user of users">
          <nb-user [name]="user.name" [title]="user.title" [picture]="user.picture">
          </nb-user>
        </nb-list-item>
      </nb-list>
  `,
})
export class RetweetersComponent implements OnInit{

   users: { name: string, title: string, picture: string}[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getRetweeters();
  }

  getRetweeters(){
    this.homeService.getRetweeters().subscribe(
        data => {
          for (let dato of data) {
               this.users.push({
                      name: dato.user.screenName,
                      title: "Number of retweets : " + dato.Number_Retweets,
                      picture: dato.user.profileImageUrl
                  });
          }

        },
        err => {
          console.log(err);
        }

      );
  }

}
