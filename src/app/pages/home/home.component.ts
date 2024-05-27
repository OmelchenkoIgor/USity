import { Component } from '@angular/core';
import { BannerComponent } from '../../widgets/banner/banner.component';
import { RecomendationsComponent } from '../../widgets/recomendations/recomendations.component';
import { NewsComponent } from '../../widgets/news/news.component';
import { RelevantComponent } from '../../widgets/relevant/relevant.component';
import { AnnouncementComponent } from '../../widgets/announcement/announcement.component';

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
        AnnouncementComponent
    ]
})
export default class HomeComponent {

}
