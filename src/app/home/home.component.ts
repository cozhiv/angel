import { Component, Injectable } from '@angular/core';
import { HomeService } from './home.service';
import {OnInit} from '@angular/core';
//import { HttpModule } from '@angular/http';

@Component({
    selector: 'app-home',
    template: `<h2 *ngIf = "profile">Hello {{profile?.login}} from {{profile?.location}}</h2>`
})
@Injectable()
export class HomeComponent implements OnInit {
    profile: Object;
    someData: string;
    constructor(

        private homeService: HomeService) {

    }
    ngOnInit() {
        this.homeService
        .getGitHubProfile('cozhiv')
        .subscribe(data => this.profile = data, err => console.log(err));
    }
}
