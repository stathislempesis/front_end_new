import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";

@Component({
  selector: 'ngx-home-hubUsers',
  template: `
    <nb-list>
        <nb-list-item *ngFor="let user of users">
          <nb-user [name]="user.name" [title]="user.title" [picture]="user.picture">
          </nb-user>
        </nb-list-item>
      </nb-list>
  `,
})
export class HubUsersComponent implements OnInit{

   users: { name: string, title: string, picture: string}[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getHubUsers();
  }

  getHubUsers(){
    this.homeService.getHubUsers().subscribe(
        data => {
          for (let dato of data) {
               this.users.push({
                      name: dato.screenName,
                      title: "Number of followers : " + dato.followersCount,
                      picture: dato.profileImageUrl
                  });
          }

        },
        err => {
          console.log(err);
        }

      );
  }

}
