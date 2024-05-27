import { Component } from '@angular/core';
import {RecomendationsComponent} from '../../widgets/home-page/recomendations/recomendations.component';
import {BannerComponent} from '../../widgets/home-page/banner/banner.component';
import {AnnouncementComponent} from '../../widgets/home-page/announcement/announcement.component';
import {NewsComponent} from '../../widgets/home-page/news/news.component';
import {RelevantComponent} from '../../widgets/home-page/relevant/relevant.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss',
  imports: [
    BannerComponent,
    RecomendationsComponent,
    NewsComponent,
    RelevantComponent,
    AnnouncementComponent,
    RecomendationsComponent,
    BannerComponent,
    AnnouncementComponent,
    NewsComponent,
    RelevantComponent
  ]
})
export default class HomeComponent {

}
