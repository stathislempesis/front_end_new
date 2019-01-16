import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";

@Component({
  selector: 'ngx-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

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
