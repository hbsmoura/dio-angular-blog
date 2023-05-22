import { Component } from '@angular/core';
import { fakeData } from 'src/app/mocked-data/mocked-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.media-min-576.component.css']
})
export class HomeComponent {

    mainArticle = fakeData[0];
    otherArticles = fakeData.slice(1)

}
